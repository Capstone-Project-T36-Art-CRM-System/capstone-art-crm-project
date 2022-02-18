import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import ClassSearch from './ClassSearch';

const columns = [
  {
    field: 'classTitle',
    headerName: 'Class title',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.classTitle || ''}`,
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'status', headerName: 'Status', width: 70 },
  //{ field: 'phone', headerName: 'Phone', width: 170 },
  //{ field: 'balance', headerName: 'Balance', width: 100 },
  { field: 'classType', headerName: 'Class type', width: 120 },
  { field: 'dateScheduled', headerName: 'Date', width: 120 },
  { field: 'timeScheduled', headerName: 'Time', width: 120 },
  { field: 'duration', headerName: 'Duration (hours)', width: 140 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },

];

const rows = [
  { id: 1, classTitle: 'Painting Class', classType: "Group class", status: "Active", dateScheduled: "Feb 14, 2022", timeScheduled: "9:00 a.m.", duration: 2},
  { id: 2, classTitle: 'Graphic Class', classType: "Group class", status: "Active", dateScheduled: "Feb 14, 2022", timeScheduled: "12:00 p.m.", duration: 2},
  { id: 3, classTitle: 'Modern Art Discussion', classType: "Event", status: "Active", dateScheduled: "Feb 14, 2022", timeScheduled: "3:00 p.m.", duration: 3},
  { id: 4, classTitle: 'Painting Class', classType: "Group class", status: "Active", dateScheduled: "Feb 15, 2022", timeScheduled: "8:00 a.m.", duration: 1},
  { id: 5, classTitle: 'Painting Class', classType: "Group class", status: "Active", dateScheduled: "Feb 15, 2022", timeScheduled: "10:00 a.m.", duration: 2},
  { id: 6, classTitle: 'Graphic Class', classType: "Group class", status: "Active", dateScheduled: "Feb 15, 2022", timeScheduled: "1:00 p.m.", duration: 1},
  { id: 7, classTitle: 'Oil painting', classType: "Master class", status: "Active", dateScheduled: "Feb 15, 2022", timeScheduled: "3:00 p.m.", duration: 2},
  { id: 8, classTitle: 'Painting Class', classType: "Group class", status: "Active", dateScheduled: "Feb 16, 2022", timeScheduled: "9:00 a.m.", duration: 2},
  { id: 9, classTitle: 'Graphic Class', classType: "Group class", status: "Active", dateScheduled: "Feb 16, 2022", timeScheduled: "12:00 p.m.", duration: 2},
  { id: 10, classTitle: '20th certury Art Discussion', classType: "Event", status: "Active", dateScheduled: "Feb 16, 2022", timeScheduled: "3:00 p.m.", duration: 3},
  { id: 11, classTitle: 'Graphic Class', classType: "Group class", status: "Active", dateScheduled: "Feb 17, 2022", timeScheduled: "8:00 a.m.", duration: 1},
  { id: 12, classTitle: 'Painting Class', classType: "Group class", status: "Active", dateScheduled: "Feb 17, 2022", timeScheduled: "10:00 a.m.", duration: 2},
  { id: 13, classTitle: 'Graphic Class', classType: "Group class", status: "Active", dateScheduled: "Feb 17, 2022", timeScheduled: "1:00 p.m.", duration: 1},
  { id: 14, classTitle: 'Oil painting', classType: "Master class", status: "Active", dateScheduled: "Feb 17, 2022", timeScheduled: "3:00 p.m.", duration: 2},
];

export default function ClassesTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ClassSearch marginBottom={2}/>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
