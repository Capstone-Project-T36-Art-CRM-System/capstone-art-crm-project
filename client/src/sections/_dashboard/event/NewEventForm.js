import { useEffect, useMemo } from 'react';

// Material UI
import { Button, Stack, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Form Controls
import { useForm } from 'react-hook-form';

// Components Import
import { FormProvider, RHFSelect, RHFTextField } from '../../../components/hook-form';
import { addEvent, getEventbyId, updateEvent } from '../../../mock_data/events';
import { useNavigate } from 'react-router-dom';

export default function NewEventForm({ onCloseDialog, eventId }) {

    let navigate = useNavigate()

  const currentEvent = getEventbyId(eventId)
  console.log(eventId)

  const defaultValues = useMemo(
    () => ({
        title: currentEvent?.title || "",
        type: currentEvent?.type || "class",
        price: currentEvent?.price || 0,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentEvent]
  );

  const methods = useForm({
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

    try {
      if(eventId){
        updateEvent(eventId, data).then(navigate(-1))

      }else{
        addEvent(data)
        onClose()
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Event Title" />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFSelect name="type" label="Event Type" fullWidth>
            {['class', 'exhibition', 'lecture', 'other'].map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
            </RHFSelect>

            <RHFTextField name="price" label="Ticket Price" />
        </Stack>

        <DialogActions>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {eventId ? 'Save' : 'Add Event'}
          </LoadingButton>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>

      </Stack>
    </FormProvider>
  );
}