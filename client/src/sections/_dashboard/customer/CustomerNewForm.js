import { useEffect, useMemo } from 'react';
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
import { FormProvider, RHFDateTimePicker, RHFSelect, RHFSwitch, RHFTextField } from '../../../components/hook-form';
import { addCustomer } from '../../../mock_data/customers';

// ----------------------------------------------------------------------

CustomerNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentCustomer: PropTypes.object,
};

export default function CustomerNewForm({ isEdit, currentCustomer }) {
  const navigate = useNavigate();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email(),
    phone: Yup.string().required('Phone number is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentCustomer?.name || '',
      email: currentCustomer?.email || '',
      phone: currentCustomer?.phone || '',
      gender: currentCustomer?.gender || 'Male',
      birthDate: currentCustomer?.birthDate || null,
      note: currentCustomer?.note || '',
      status: currentCustomer?.status || 'active',
      isRecordingAgreed: currentCustomer?.isRecordingAgreed || false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentCustomer]
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
    if (isEdit && currentCustomer) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentCustomer]);

  const onSubmit = async (values) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(values);
      addCustomer(values)
      .then(reset())
      .catch(error => console.log(error))
      // navigate(`/dashboard/customer/list`)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 7, px: 3 }}>
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
                        onChange={(event) => field.onChange(event.target.checked ? 'rejected' : 'active')}
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
              name="isRecordingAgreed"
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
              <RHFTextField name="name" label="Full Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phone" label="Phone Number" />
              <RHFDateTimePicker name="birthDate" label="Birth Date" />

              <RHFSelect name="gender" label="Gender" placeholder="Gender">
                {['Male', 'Female'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </RHFSelect>
            </Box>
            <RHFTextField sx={{mt: 3}} multiline rows={2} name="note" label="Note" />

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create User' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
