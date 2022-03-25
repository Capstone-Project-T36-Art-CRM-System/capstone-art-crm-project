import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';

// Material UI
import {
  Box,
  Card,
  Checkbox,
  Typography,
  FormControlLabel,
  Stack
} from '@mui/material';

import TaskSearch from './TaskSearch'

const TASKS = [
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

export default function TaskList() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <Box sx={{ px: 3, py: 1 }}>
        <TaskSearch />
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}