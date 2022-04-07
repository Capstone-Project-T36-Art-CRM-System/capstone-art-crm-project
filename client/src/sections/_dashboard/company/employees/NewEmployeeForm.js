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
import { FormProvider, RHFDateTimePicker, RHFSelect, RHFTextField } from '../../../../components/hook-form';

export default function NewEmployeeForm({ onCloseDialog, currentEmployee }) {
  
    const defaultValues = useMemo(
      () => ({
        name: currentEmployee?.name || "",
        email: currentEmployee?.email || "",
        position: currentEmployee?.position || "",
        photoURL: currentEmployee?.photoURL || "",
        status: currentEmployee?.status || "",
        phone: currentEmployee?.phone || "",
        hasAccess: currentEmployee?.hasAccess || false,
        accessLevel: currentEmployee?.accessLevel || 2,
        password: currentEmployee?.password || "",
        balance: currentEmployee?.balance || 0,
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

          </Stack>

          <DialogActions>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Add Payemnt
            </LoadingButton>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>

        </Stack>
      </FormProvider>
    );
  }