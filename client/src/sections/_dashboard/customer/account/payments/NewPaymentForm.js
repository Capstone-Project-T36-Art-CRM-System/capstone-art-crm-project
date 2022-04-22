import { useEffect, useMemo, useState } from 'react';

// Material UI
import { Button, Stack, DialogActions, Autocomplete, InputAdornment, TextField, CircularProgress } from '@mui/material';
import { DateTimePicker, LoadingButton, LocalizationProvider } from '@mui/lab';

// Form Controls
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

// Components Import
import { FormProvider, RHFSelect, RHFTextField } from '../../../../../components/hook-form';

// Mock Data
import { getArtworkList } from '../../../../../mock_data/artworks';
import { getEventList } from '../../../../../mock_data/events';
import { fCurrency } from '../../../../../utils/formatNumber';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { addTransaction } from '../../../../../mock_data/transactions';

export default function NewPaymentForm({ onCloseDialog, customerId }) {
  const [artworkList, setArtworkList] = useState([]);

  const PaymentSchema = Yup.object().shape({
    date: Yup.date().nullable().required('Date is required')
  });
  
    const defaultValues = useMemo(
      () => ({
        type: 'sales',
        customerId: customerId,
        productCategory: 'Event Ticket',
        event: null,
        artwork: null,
        amount: 0,
        date: null,
        note: ''
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
  
    const methods = useForm({
      resolver: yupResolver(PaymentSchema),
      defaultValues,
    });
  
    const {
      reset,
      watch,
      control,
      getValues,
      setValue,
      handleSubmit,
      formState: { isSubmitting },
    } = methods;
  
    const values = watch();
  
    useEffect(() => {
      if (values.event){ setValue("note", `Ticket – ${values.event.title}`) }
      if (values.artwork){ setValue("note", `Artwork – ${values.artwork.title}, ${values.artwork.year}`) }

      getArtworkList()
      .then((data) => setArtworkList(data.docs.map((doc) => ({...doc.data(), id: doc.id }))))
      .catch((error) => console.log("Firebase Error: ", error.message))
    }, [values.event, values.artwork, setValue]);
  
    const onClose = () => {
      onCloseDialog()
      reset()
    }
  
    const onSubmit = async (data) => {

      let transactionFields = { 
        type: data.type,
        customerId: customerId,
        employeeId: null,
        productCategory: data.productCategory,
        note: data.note,
        productId: data.event?.eventId || data.artwork?.id,
        date: data.date,
        amount: data.amount
      }

      try {
        addTransaction(transactionFields)
        onClose()

      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      !artworkList ? 
      <CircularProgress /> 
      :
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <RHFSelect name="productCategory" label="Category" fullWidth>
            {['Event Ticket', 'Artwork'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </RHFSelect>

          {getValues('productCategory') === "Event Ticket" && <Controller
            name="event"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={getEventList()}
                getOptionLabel={event => `${event.title} – ${fCurrency(event.price)}`}
                isOptionEqualToValue={(option, value) => option.eventId == value.eventId}
                onChange={(event, newValue) => { field.onChange(newValue); setValue('amount', newValue ? newValue.price : 0 ) }}
                renderInput={(params) => <RHFTextField label="Event" {...params} {...field} />}
              />
            )}
          />}

          {getValues('productCategory') === "Artwork" && <Controller
            name="artwork"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={artworkList.filter(art => art.status !== 'sold')}
                getOptionLabel={artwork => ` ${artwork.title}, ${artwork.year} – ${fCurrency(artwork.price)}`}
                isOptionEqualToValue={(option, value) => option.id == value.id}
                onChange={(event, newValue) => { field.onChange(newValue); setValue('amount', newValue ? newValue.price : 0 ) }}
                renderInput={(params) => <RHFTextField label="Artwork" {...params} {...field} />}
              />
            )}
          />}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Controller
              name="date"
              control={control}
              render={({ field, fieldState: { error, invalid } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    {...field}
                    label="Payment Date"
                    inputFormat="dd/MM/yyyy hh:mm a"
                    renderInput={(params) => <TextField error={invalid} helperText={invalid ? error.message : null} {...params} fullWidth />}
                  />
                </LocalizationProvider>
              )}
            />

            <RHFTextField
              sx={{width: '50%'}}
              name="amount"
              label="Amount"
              placeholder="0.00"
              disabled
              value={getValues('amount') === 0 ? '' : getValues('amount')}
              onChange={(event) => setValue('amount', Number(event.target.value))}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                type: 'number',
              }}
            />
          </Stack>

          <DialogActions>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting} disabled={!values.event && !values.artwork ? true : false}>
              Add Payemnt
            </LoadingButton>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>

        </Stack>
      </FormProvider>
    );
  }