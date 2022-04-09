import PropTypes from 'prop-types';
import * as Yup from 'yup';
import merge from 'lodash/merge';
import { getTime, isBefore } from 'date-fns';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Stack, Button, Tooltip, TextField, IconButton, DialogActions, Autocomplete } from '@mui/material';
import { LoadingButton, LocalizationProvider, MobileDateTimePicker } from '@mui/lab';

// components
import Iconify from '../../../components/Iconify';
import { ColorSinglePicker } from '../../../components/color-utils';
import { FormProvider, RHFTextField, RHFSwitch } from '../../../components/hook-form';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { deleteEvent, deleteScheduledEvent, getEventbyId, getEventList, getScheduledEventbyId, scheduleEvent, updateScheduledEvent } from '../../../mock_data/events';
import { useMemo } from 'react';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#54D62C', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E', // theme.palette.error.darker
];

const getInitialValues = (event, range) => {
  const _event = {
    title: '',
    description: '',
    textColor: '#1890FF',
    allDay: false,
    start: range ? new Date(range.start) : new Date(),
    end: range ? new Date(range.end) : new Date(),
  };

  if (event || range) {
    return merge({}, _event, event);
  }

  return _event;
};

// ----------------------------------------------------------------------

CalendarForm.propTypes = {
  eventId: PropTypes.string,
  range: PropTypes.object,
  onCancel: PropTypes.func,
};

export default function CalendarForm({ scheduledEventId, range, onCancel }) {
  const EventSchema = Yup.object().shape({
    description: Yup.string().max(5000),
  });

  const scheduledEvent = getScheduledEventbyId(scheduledEventId)
  console.log(scheduledEvent?.id.substring(1, 2))

  // const defaultValues = useMemo(
  //   () => ({
  //     title: curEvent?.title || '',
  //     description: curEvent?.description || '',
  //     // textColor: curEvent?.textColor || '',
  //     // allDay: curEvent?.allDay || false,
  //     // start: curEvent?.start || range?.start || null,
  //     // end: curEvent?.end || range?.end || null,

  //   }),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [curEvent]
  // );

  const methods = useForm({
    resolver: yupResolver(EventSchema),
    defaultValues: getInitialValues(
      { 
        ...scheduledEvent, 
        event: getEventbyId( scheduledEvent?.id.substring(1, 2) ) 
      }, range)
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const scheduleItemFields = {
        title: data.event.title,
        description: data.description,
        textColor: data.textColor,
        allDay: data.allDay,
        start: getTime(data.start),
        end: getTime(data.end),
      };
      if (scheduledEventId) {
        updateScheduledEvent(scheduledEventId, scheduleItemFields)
      } else {
        scheduleEvent(data.event.eventId, scheduleItemFields)
      }
      onCancel();
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!scheduledEventId) return;
    try {
      deleteScheduledEvent(scheduledEventId);
      onCancel();

    } catch (error) {
      console.error(error);
    }
  };

  const values = watch();

  const isDateError = isBefore(new Date(values.end), new Date(values.start));

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Controller
          name="event"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={getEventList()}
              getOptionSelected={(option, value) => option.eventId == value.eventId}
              onChange={(event, newValue) => { field.onChange(newValue); }}
              renderInput={(params) => <RHFTextField label="Event" {...params} />}
              getOptionLabel={event => `${event.title}`}
            />
          )}
        />

        <RHFTextField name="description" label="Description" multiline rows={4} />

        <RHFSwitch name="allDay" label="All day" />

        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                {...field}
                label="Start date"
                inputFormat="dd/MM/yyyy hh:mm a"
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          )}
        />

         <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                {...field}
                label="End date"
                inputFormat="dd/MM/yyyy hh:mm a"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={!!isDateError}
                    helperText={isDateError && 'End date must be later than start date'}
                  />
                )}
              />
            </LocalizationProvider>
          )}
        />

        <Controller
          name="textColor"
          control={control}
          render={({ field }) => (
            <ColorSinglePicker value={field.value} onChange={field.onChange} colors={COLOR_OPTIONS} />
          )}
        />
      </Stack>

      <DialogActions>
        {scheduledEventId && (
          <Tooltip title="Delete Event">
            <IconButton onClick={handleDelete}>
              <Iconify icon="eva:trash-2-outline" width={20} height={20} />
            </IconButton>
          </Tooltip>
        )}
        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onCancel}>
          Cancel
        </Button>

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} disabled={!values.event ? true : false} loadingIndicator="Loading...">
          {scheduleEvent ? 'Save' : 'Add'}
        </LoadingButton>
      </DialogActions>
    </FormProvider>
  );
}
