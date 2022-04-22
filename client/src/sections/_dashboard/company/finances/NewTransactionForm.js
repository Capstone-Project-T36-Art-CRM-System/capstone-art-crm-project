import { useMemo } from 'react';
import * as Yup from 'yup';

// Material UI
import { Button, Stack, DialogActions, TextField } from '@mui/material';
import { DateTimePicker, LoadingButton, LocalizationProvider } from '@mui/lab';

// Form Controls
import { Controller, useForm } from 'react-hook-form';

// Components Import
import { FormProvider, RHFSelect, RHFTextField } from '../../../../components/hook-form';
import { addTransaction } from '../../../../mock_data/transactions';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { yupResolver } from '@hookform/resolvers/yup';
import { getTime } from 'date-fns';

export default function NewTransactionForm({ onCloseDialog, transactionId }) {
  const currentTransaction = null

  const NewTransactionSchema = Yup.object().shape({
    note: Yup.string().required('Note is required'),
    amount: Yup.number().typeError('Number must be specified').required('Amount is required'),
    date: Yup.number().typeError('Date is required').required('Date is required'),
  });

  const defaultValues = useMemo(
    () => ({
        note: currentTransaction?.note || "",
        type: currentTransaction?.type || "operation_expenses",
        amount: currentTransaction?.amount || 0,
        date: currentTransaction?.date || getTime(new Date()),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTransaction]
  );

  const methods = useForm({
    resolver: yupResolver(NewTransactionSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onClose = () => {
    onCloseDialog()
    reset()
  }

  const onSubmit = async (data) => {

    let transactionFields = { 
        type: data.type,
        customerId: null,
        employeeId: null,
        productCategory: null,
        note: data.note,
        productId: null,
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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="note" label="Note" />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFSelect name="type" label="Transaction Type" fullWidth>
            {['operation_expenses', 'salary_expenses'].map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
            </RHFSelect>

            <RHFTextField name="amount" label="Amount" />
        </Stack>

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

        <DialogActions>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {transactionId ? 'Save' : 'Add Transaction'}
          </LoadingButton>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>

      </Stack>
    </FormProvider>
  );
}