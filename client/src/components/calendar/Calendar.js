import moment from 'moment'

// React Big Calendar
import { Calendar as ReactCalendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Material UI
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Mockup Data
import EVENTS from '../../mock_data/events';

// Styling
import './calendar.scss'

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