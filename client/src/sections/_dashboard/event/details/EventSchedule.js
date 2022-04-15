// Material UI
import { Card, CardHeader } from '@mui/material';

// Components Import
import { ScheduleList } from './schedule'


export default function EventSchedule({eventId}) {

  return (
    <Card>
      <CardHeader title="Schedule" sx={{ mb: 3 }}/>
      <ScheduleList eventId={eventId}/>
    </Card>
  );
}
