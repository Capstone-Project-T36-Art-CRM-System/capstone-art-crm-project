import { useCallback, useEffect, useMemo } from 'react';

// Material UI
import { Button, Typography, Stack, FormControlLabel, Switch } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Form Controls
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components Import
import { FormProvider, RHFDateTimePicker, RHFSelect, RHFTextField } from '../../../../../components/hook-form';
import { getTime } from 'date-fns';
import { fData } from '../../../../../utils/formatNumber';

export default function NewDocForm({ onCloseColapse, currentDoc }) {

    const NewDocumentSchema = Yup.object().shape({
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
      resolver: yupResolver(NewDocumentSchema),
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
      onCloseColapse()
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
  
    const handleDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];
  
      if (file) {
        setValue(
          'docFile',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );
  
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={3}>
              <Typography variant="subtitle1">{!currentDoc ? 'Add Document' : 'Update Document'}</Typography>
  
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="title" label="Document Name" fullWidth/>
  
                <RHFSelect name="type" label="Type" fullWidth>
                  {['', 'Personal', 'Agreement'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </RHFSelect>
              </Stack>
  
              <Stack>
                <RHFTextField 
                  type="file" 
                  name="docFile" 
                  maxSize={3145728} 
                  onChange={(e) => handleDrop(e)} 
                  accept=".pdf, .doc, .docx" 
                  helperText={
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                      }}
                    >
                      Allowed *.pdf, *.doc, *.docx
                      <br /> max size of {fData(3145728)}
                    </Typography>
                  }
                />  
              </Stack>
  
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFDateTimePicker disabled={values.expDate ? false : true} name="expDate" label="Expiration Date" />
  
                <FormControlLabel
                  labelPlacement="end"
                  control={
                    <Controller
                      name="expDate"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          {...field}
                          checked={field.value == null}
                          onChange={(event) => field.onChange(event.target.checked ? null : getTime(new Date()))}
                        />
                      )}
                    />
                  }
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Do not expire
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0,  justifyContent: 'space-between' }}
                />
              </Stack>
  
              
  
              <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
                <Button color="inherit" variant="outlined" onClick={onClose}>
                  Cancel
                </Button>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!currentDoc ? 'Add Document' : 'Save Changes'}
                </LoadingButton>
              </Stack>
            </Stack>
        </FormProvider>
    );
  }