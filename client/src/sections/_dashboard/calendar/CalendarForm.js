import PropTypes from 'prop-types';
import * as Yup from 'yup';
import merge from 'lodash/merge';
import { getTime, isBefore } from 'date-fns';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Stack, Button, Tooltip, TextField, IconButton, DialogActions } from '@mui/material';
import { LoadingButton, LocalizationProvider, MobileDateTimePicker } from '@mui/lab';

// components
import Iconify from '../../../components/Iconify';
import { ColorSinglePicker } from '../../../components/color-utils';
import { FormProvider, RHFTextField, RHFSwitch, RHFDateTimePicker } from '../../../components/hook-form';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { addEvent, deleteEvent, getEventbyId, updateEvent } from '../../../mock_data/events';
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
  event: PropTypes.object,
  range: PropTypes.object,
  onCancel: PropTypes.func,
};

export default function CalendarForm({ eventId, range, onCancel }) {
  const EventSchema = Yup.object().shape({
    title: Yup.string().max(255).required('Title is required'),
    description: Yup.string().max(5000),
  });

  const curEvent = getEventbyId(eventId)
  console.log(eventId, curEvent)

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
    defaultValues: getInitialValues(curEvent, range)
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
      const newEvent = {
        eventId: eventId,
        title: data.title,
        description: data.description,
        textColor: data.textColor,
        allDay: data.allDay,
        start: getTime(data.start),
        end: getTime(data.end),
      };
      if (curEvent) {
        updateEvent(eventId, newEvent)
      } else {
        console.log(curEvent)
        addEvent(newEvent)
      }
      // onCancel();
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!curEvent) return;
    try {
      deleteEvent(eventId);
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
        <RHFTextField name="title" label="Title" />

        <RHFTextField name="description" label="Description" multiline rows={4} />

        <RHFSwitch name="allDay" label="All day" />
        {/* <RHFDateTimePicker name="start" label="Start date"/> */}

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
        {curEvent && (
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

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} loadingIndicator="Loading...">
          Add
        </LoadingButton>
      </DialogActions>
    </FormProvider>
  );
}
