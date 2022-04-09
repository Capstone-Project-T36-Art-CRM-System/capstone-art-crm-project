import { useMemo } from 'react';
import { format } from 'date-fns';

// Material UI
import { Button, Stack, DialogActions, Autocomplete, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Form Controls
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components Import
import { FormProvider, RHFDateTimePicker, RHFSelect, RHFTextField } from '../../../../../components/hook-form';

// Mock Data
import { getArtworkList } from '../../../../../mock_data/artworks';
import { getEventList } from '../../../../../mock_data/events';
import { fCurrency } from '../../../../../utils/formatNumber';

export default function NewPaymentForm({ onCloseDialog, customerId }) {
  
    const defaultValues = useMemo(
      () => ({
        type: 'purchase',
        customerId: customerId,
        productCategory: 'Event Ticket',
        event: null,
        artwork: null,
        amount: 0,
        date: new Date()
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
  
    const methods = useForm({
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
  
    const onClose = () => {
      onCloseDialog()
      reset()
    } 
  
    const onSubmit = async (values) => {
      console.log(values)
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(values)

      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <RHFSelect name="productCategory" label="Category" fullWidth>
            {['Event Ticket', 'Artwork Purchase'].map((option) => (
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
                getOptionSelected={(option, value) => option.eventId == value.eventId}
                onChange={(event, newValue) => { field.onChange(newValue); setValue('amount', newValue ? newValue.price : 0 ) }}
                renderInput={(params) => <RHFTextField label="Event" {...params} />}
                getOptionLabel={event => `${event.title} – ${fCurrency(event.price)}`}
              />
            )}
          />}

          {getValues('productCategory') === "Artwork Purchase" && <Controller
            name="artwork"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={getArtworkList()}
                getOptionSelected={(option, value) => option.artworkId == value.artworkId}
                onChange={(event, newValue) => { field.onChange(newValue); setValue('amount', newValue ? newValue.price : 0 ) }}
                renderInput={(params) => <RHFTextField label="Artwork" {...params} {...field} />}
                getOptionLabel={artwork => ` ${artwork.title}, ${artwork.year}`}
              />
            )}
          />}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFDateTimePicker name="date" label="Date"/>

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