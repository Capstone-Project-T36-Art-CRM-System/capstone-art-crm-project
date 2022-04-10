import { useEffect, useMemo } from 'react';

// Material UI
import { Button, Stack, DialogActions, TextField } from '@mui/material';
import { DatePicker, LoadingButton, LocalizationProvider } from '@mui/lab';

// Form Controls
import { Controller, useForm } from 'react-hook-form';

// Components Import
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField } from '../../../../components/hook-form';
import { getEmployeebyId } from '../../../../mock_data/employees';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useAuth } from '../../../../contexts/AuthContext';

export default function NewEmployeeForm({ onCloseDialog, employeeId }) {

  const currentEmployee = getEmployeebyId(employeeId)

  const defaultValues = useMemo(
    () => ({
      name: currentEmployee?.name || "",
      email: currentEmployee?.email || "",
      position: currentEmployee?.position || "Instructor",
      phone: currentEmployee?.phone || "",
      password: currentEmployee?.password || "",
      dateEmployeed: currentEmployee?.dateEmployeed || new Date(),
      isFired: currentEmployee?.isFired || false,
      dateFired: currentEmployee?.dateFired || null
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentEmployee]
  );

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (!values.isFired){
      setValue("dateFired", null)
    }else{
      setValue("dateFired", new Date())
    }
  }, [values.isFired, setValue]);

  const onClose = () => {
    onCloseDialog()
    reset()
  }

  const { signup } = useAuth();

  const onSubmit = async (data) => {

    let newEmployeeFields = {
      ...data,
      hasAccess: data.position !== 'Instructor',
      accessLevel: data.position === 'Head Manager' ? 2 : (data.position === 'Manager' ? 1 : 0),
    }

    try {
      if(employeeId){
        console.log(newEmployeeFields)
        // onClose()
      }else{
        console.log(newEmployeeFields)
        // await signup(data.email, data.password);
        // onClose()
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="name" label="Full Name" />

        <RHFTextField name="email" label="Email (Login)" />

        <RHFTextField name="phone" label="Phone" />

        <RHFSelect name="position" label="Position" fullWidth>
        {['Instructor', 'Manager', 'Head Manager'].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </RHFSelect>

        <Controller
          name="dateEmployeed"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                {...field}
                label="Date Employeed"
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          )}
        />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFSwitch name="isFired" label="Fired"/>

            <Controller
              name="dateFired"
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    {...field}
                    disabled = {!values.isFired}
                    label="Date Fired"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              )}
            />
          </Stack>

        <DialogActions>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {employeeId ? 'Save' : 'Add Employee'}
          </LoadingButton>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>

      </Stack>
    </FormProvider>
  );
}