import { useCallback, useEffect, useMemo } from 'react';

// Material UI
import { Button, Typography, Stack, FormControlLabel, Switch, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Form Controls
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components Import
import { FormProvider, RHFDateTimePicker, RHFSelect, RHFTextField } from '../../../../../components/hook-form';
import { getTime } from 'date-fns';
import { fData } from '../../../../../utils/formatNumber';

export default function NewPaymentForm({ onCloseDialog, currentDoc }) {

    const NewPaymentSchema = Yup.object().shape({
      title: Yup.string().required('Document name is required'),
      type: Yup.string().required('Type is required'),
      expDate: Yup.date().required('Expiration date is required'),
      docFile: Yup.mixed().test('required', 'Image cover is required', (value) => value !== ''), 
    });
  
    const defaultValues = useMemo(
      () => ({
        title: currentDoc?.title || '',
        type: currentDoc?.type || '',
        expDate: currentDoc?.expDate || null,
        docFile: currentDoc?.docFile || ""
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [currentDoc]
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
  
    useEffect(() => {
      if (currentDoc) {
        reset(defaultValues);
      }
      if (!currentDoc) {
        reset(defaultValues);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDoc]);
  
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
              {!currentDoc ? 'Add Payemnt' : 'Save Changes'}
            </LoadingButton>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>

        </Stack>
      </FormProvider>
    );
  }