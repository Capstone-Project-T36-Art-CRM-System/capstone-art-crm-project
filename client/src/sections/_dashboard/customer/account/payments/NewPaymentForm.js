import { useEffect, useMemo } from 'react';

// Material UI
import { Button, Stack, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Form Controls
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components Import
import { FormProvider, RHFDateTimePicker, RHFSelect } from '../../../../../components/hook-form';

export default function NewPaymentForm({ onCloseDialog, customerId }) {

    const NewPaymentSchema = Yup.object().shape({
      type: Yup.string().required('Type is required'),
      title: Yup.string().required('Document name is required'),
      expDate: Yup.date().required('Expiration date is required'),
    });
  
    const defaultValues = useMemo(
      () => ({
        type: '',
        title: '',
        expDate: null,
        docFile: ''
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
  
    const methods = useForm({
      resolver: yupResolver(NewPaymentSchema),
      defaultValues,
    });
  
    const {
      reset,
      watch,
      control,
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
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(values)
        reset();
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={3}>
          <RHFSelect name="type" label="Type" fullWidth>
            {['Event Ticket', 'Artwork Purchase'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </RHFSelect>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFDateTimePicker name="expDate" label="Expiration Date" />

            
          </Stack>

          <DialogActions>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}  disabled={1 === 0}>
              Add Payemnt
            </LoadingButton>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>

        </Stack>
      </FormProvider>
    );
  }