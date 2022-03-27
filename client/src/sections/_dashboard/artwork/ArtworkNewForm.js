import { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

// Routing
import { useNavigate } from 'react-router-dom';

// Form Controls
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Material UI
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Components Import
import { FormProvider, RHFDateTimePicker, RHFSelect, RHFUploadImage, RHFSwitch, RHFTextField } from '../../../components/hook-form';

//Utils
import { fData } from '../../../utils/formatNumber';


// Props
ArtworkNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentCustomer: PropTypes.object,
};

export default function ArtworkNewForm({ isEdit, currentArtwork }) {
  const navigate = useNavigate();

  const NewUserSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author name is required'),
    material: Yup.string().required('Material name is required'),
    price: Yup.number().typeError('Number must be specified').required('Price is required'),
    height: Yup.number().typeError('Number must be specified').required('Height is required'),
    width: Yup.number().typeError('Number must be specified').required('Width is required'),
    cover: Yup.mixed().test('required', 'Image cover is required', (value) => value !== ''),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentArtwork?.title || '',
      author: currentArtwork?.author || '',
      material: currentArtwork?.material || '',
      price: currentArtwork?.price || '',
      height: currentArtwork?.height || '',
      width: currentArtwork?.height || '',
      // birthDate: currentArtwork?.birthDate,
      description: currentArtwork?.description || '',
      cover: currentArtwork?.cover || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentArtwork]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
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
    if (isEdit && currentArtwork) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentArtwork]);

  const onSubmit = async (values) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      console.log(values.cover)
      // navigate(`/dashboard/artwork/list`)
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'cover',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 7, pt: 3, px: 3 }}>

            <Box sx={{ mb: 5 }}>
              <RHFUploadImage
                name="cover"
                accept=".jpeg, .jpg, .png"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png,
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>
            
            {isEdit && (
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        {...field}
                        checked={field.value !== 'active'}
                        onChange={(event) => field.onChange(event.target.checked ? 'banned' : 'active')}
                      />
                    )}
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Rejected
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Customer has officially refused the company's services 
                    </Typography>
                  </>
                }
                sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
              />
            )}

            <RHFSwitch
              name="isVerified"
              labelPlacement="start"
              label={
                <>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Video/photo recording agreement
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Customer allowed company the use of media content with his presence for publication on social media
                  </Typography>
                </>
              }
              sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="title" label="Title" />
              <RHFTextField name="author" label="Author Name" />
              <RHFTextField name="material" label="Material" />
              <RHFTextField name="price" label="Price" />
              <RHFTextField name="height" label="Height (cm)" />
              <RHFTextField name="width" label="Width (cm)" />
              {/* <RHFDateTimePicker name="birthDate" label="Birth Date" /> */}

            </Box>
            <RHFTextField sx={{mt: 3}} multiline rows={3} name="description" label="Description" />

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Artwork' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
