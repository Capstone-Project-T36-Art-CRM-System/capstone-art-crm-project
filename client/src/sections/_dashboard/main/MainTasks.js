import {useState} from 'react';
import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';

import { getTaskList } from '../../../mock_data/tasks';

// Material UI
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack,
  IconButton,
  Dialog,
  DialogTitle,
  Button
} from '@mui/material';
import Iconify from '../../../components/Iconify';
import NewTaskForm from './NewTaskForm';

let TASKS = [
  'Update next week schedule',
  'Contact Margaret Atwood for ArtFest',
  'Order water',
  'Upload lecture video on youtube',
  'Order oils and watercolors',
  'Upload insta stories about open art classes',
  'Reminde Michele L. about membership extention',
];

// Prop Types
TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through'
              })
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function MainTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { values, handleSubmit } = formik;
  const [taskList, setTaskList] = useState(getTaskList())

  return (
    <Card>
      <CardHeader title="Tasks" action={
        <TaskDialog setTaskList={() => setTaskList(getTaskList())}>
          <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />}>
            Add new task
          </Button>
        </TaskDialog>}
      />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {taskList.map((task) => (
              <TaskItem
                key={task.id}
                task={task.task}
                formik={formik}
                checked={values.checked.includes(task.task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}


function TaskDialog({ taskId, children, setTaskList }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
    setTaskList()
  };

  return (
    <>
      {children ? 
      <Box onClick={handleOpen}>
        {children}
      </Box>
      :
      <IconButton onClick={handleOpen}>
        <Iconify icon={'eva:edit-fill'} width={20} height={20} />
      </IconButton>
      }

      <Dialog open={Boolean(open)} fullWidth maxWidth="xs" onCancel={handleClose}>
        <DialogTitle>{!taskId ? 'Add Transaction' : 'Update Transaction'}</DialogTitle>
        <Stack spacing={3} sx={{ p: 3, pb: 0 }}>

          <NewTaskForm onCloseDialog={handleClose} taskId={taskId}  />

        </Stack>
      </Dialog>
    </>
  );
}