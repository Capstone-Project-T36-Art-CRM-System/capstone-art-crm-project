import { Calendar as ReactCalendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.scss'
import moment from 'moment'
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Material UI

const EVENTS = [
    {
        id: 0,
        title: 'Paining Class – 2-hours Group',
        start: new Date(2022, 1, 14, 9),
        end: new Date(2022, 1, 14, 11),
        hexColor: 'B18CE7',
    },
    {
        id: 1,
        title: 'Graphic Class – 2-hours Group',
        start: new Date(2022, 1, 14, 12),
        end: new Date(2022, 1, 14, 14),
        hexColor: 'B18CE7',
    },
    {
        id: 2,
        title: 'Event – Modern Art Discussion',
        start: new Date(2022, 1, 14, 15),
        end: new Date(2022, 1, 14, 18),
        hexColor: 'F6C47A',
    },

    {
        id: 3,
        title: 'Paining Class – 1-hour Group',
        start: new Date(2022, 1, 15, 8),
        end: new Date(2022, 1, 15, 9),
        hexColor: 'B18CE7',
    },
    {
        id: 4,
        title: 'Paining Class – 2-hours Group',
        start: new Date(2022, 1, 15, 10),
        end: new Date(2022, 1, 15, 12),
        hexColor: 'B18CE7',
    },
    {
        id: 5,
        title: 'Graphic Class – 1-hour Group',
        start: new Date(2022, 1, 15, 13),
        end: new Date(2022, 1, 15, 14),
        hexColor: 'B18CE7',
    },
    {
        id: 6,
        title: 'Master Class – Oil Painting',
        start: new Date(2022, 1, 15, 15),
        end: new Date(2022, 1, 15, 17),
        hexColor: 'AEDE80',
    },

    {
        id: 7,
        title: 'Paining Class – 2-hours Group',
        start: new Date(2022, 1, 16, 9),
        end: new Date(2022, 1, 16, 11),
        hexColor: 'B18CE7',
    },
    {
        id: 8,
        title: 'Graphic Class – 2-hours Group',
        start: new Date(2022, 1, 16, 12),
        end: new Date(2022, 1, 16, 14),
        hexColor: 'B18CE7',
    },
    {
        id: 9,
        title: 'Event – 20th-century Art Discussion',
        start: new Date(2022, 1, 16, 15),
        end: new Date(2022, 1, 16, 18),
        hexColor: 'F6C47A',
    },

    {
        id: 10,
        title: 'Graphic Class – 1-hour Group',
        start: new Date(2022, 1, 17, 8),
        end: new Date(2022, 1, 17, 9),
        hexColor: 'B18CE7',
    },
    {
        id: 11,
        title: 'Paining Class – 2-hours Group',
        start: new Date(2022, 1, 17, 10),
        end: new Date(2022, 1, 17, 12),
        hexColor: 'B18CE7',
    },
    {
        id: 12,
        title: 'Graphic Class – 1-hour Group',
        start: new Date(2022, 1, 17, 13),
        end: new Date(2022, 1, 17, 14),
        hexColor: 'B18CE7',
    },
    {
        id: 13,
        title: 'Master Class – Oil Painting',
        start: new Date(2022, 1, 17, 15),
        end: new Date(2022, 1, 17, 17),
        hexColor: 'AEDE80',
    },
];

const localizer = momentLocalizer(moment) // Globalize Localizer

const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#' + event.hexColor + 70;
    let borderColor = '#' + event.hexColor;

    let style = {
        backgroundColor: backgroundColor,
        color: 'black',
        border: '0px',
        borderLeft: `3px solid ${borderColor}`,
        borderRadius: '5px',
        fontSize: '12px',
        padding: '11px 40px 0 12px',
        margin: '0 5px'
    };

    return { style };
}


const CustomHeader = ({ label }) => {
    let labelSplited = label.split(' ');
    let day = labelSplited[0];
    let weekDay = labelSplited[1];

    return (
        <Box sx={{ height: 'fit-content', display: 'flex', flexFlow: 'column wrap', alignItems: 'center', p: 2, borderBotton: 'none' }}>
            <Avatar sx={{mb: 1, fontSize: '18px', backgroundColor: '#F4F4F4', color: 'black'}}>{day}</Avatar>
            <Typography sx={{fontSize: '12px'}}>{weekDay}</Typography>
        </Box>
    )
}
export default function Calendar() {

  return (
    <ReactCalendar
        localizer={localizer}
        events={EVENTS}
        startAccessor="start"
        endAccessor="end"
        defaultView="work_week"
        timeslots={2}
        views={['day', 'work_week']}
        style={{height: '90vh'}}
        eventPropGetter={eventStyleGetter}
        min={new Date(2001, 0, 1, 8, 0, 0)} 
        max={new Date(2001, 0, 5, 20, 0, 0)}
        components={{
            work_week: { header: CustomHeader },
          }}
    />
  );
}