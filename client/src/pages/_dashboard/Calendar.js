import React, { useState, useRef, useEffect } from 'react';

// Full Calendar
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';

// Material UI
import { Card, Button, Container, DialogTitle, Dialog, Stack, Typography } from '@mui/material';

import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

// Page Sections
import { CalendarForm, CalendarStyle, CalendarToolbar } from '../../sections/_dashboard/calendar';
import { getEventList } from '../../mock_data/events';

export default function Calendar() {

  const calendarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState('dayGridMonth');

  const [events, setEvent] = useState(getEventList().filter(event => !event.isDeleted));
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = 'dayGridMonth';
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, []);

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectRange = (arg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }
    const { start, end } = arg;
    setSelectedRange({ start, end })
    setIsModalOpen(true)
  };

  const handleSelectEvent = (arg) => {
    console.log(arg.event.extendedProps)
    setSelectedEventId(arg.event.extendedProps.eventId);
    setIsModalOpen(true)
  };

  const handleAddEvent = () => {
    setIsModalOpen(true)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEventId(null)
    calendarRef.current.getApi().removeAllEvents()
    calendarRef.current.getApi().addEventSource(getEventList().filter(event => !event.isDeleted))
  };

  return (
    <Page title="Calendar">
      <Container maxWidth='xl'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Calendar
          </Typography>
          <Button
              variant="contained"
              onClick={handleAddEvent}
              startIcon={ <Iconify icon={'eva:plus-fill'} width={20} height={20} />}
          >
              Add event
          </Button>
        </Stack>
        {/* Page Title End*/}

        <Card>
          <CalendarStyle>
            <CalendarToolbar
              date={date}
              view={view}
              onNextDate={handleClickDateNext}
              onPrevDate={handleClickDatePrev}
              onToday={handleClickToday}
              onChangeView={handleChangeView}
            />
            <FullCalendar
              weekends
              selectable
              events={events}
              ref={calendarRef}
              rerenderDelay={10}
              initialDate={date}
              initialView={view}
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              allDayMaintainDuration
              eventResizableFromStart
              select={handleSelectRange}
              eventClick={handleSelectEvent}
              height={720}
              plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
            />
          </CalendarStyle>
        </Card>

        <Dialog open={isModalOpen} onClose={handleCloseModal}>
          <DialogTitle>{selectedEventId ? 'Edit Event' : 'Add Event'}</DialogTitle>

          <CalendarForm eventId={selectedEventId || {}} range={selectedRange} onCancel={handleCloseModal} />
        </Dialog>

      </Container>
    </Page>
  );
}
