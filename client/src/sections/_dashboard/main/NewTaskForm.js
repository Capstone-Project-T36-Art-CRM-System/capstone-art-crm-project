import { useMemo } from 'react';
import * as Yup from 'yup';

// Material UI
import { Button, Stack, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Form Controls
import { useForm } from 'react-hook-form';

// Components Import
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addTask } from '../../../mock_data/tasks';

export default function NewTaskForm({ onCloseDialog, taskId }) {
  const currentTask = null

  const NewTransactionSchema = Yup.object().shape({
    task: Yup.string().required('Task is required'),
  });

  const defaultValues = useMemo(
    () => ({
        task: currentTask?.task || "",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTask]
  );

  const methods = useForm({
    resolver: yupResolver(NewTransactionSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onClose = () => {
    onCloseDialog()
    reset()
  }

  const onSubmit = async (data) => {
    try {
        addTask({task: data.task})
        onClose()
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="task" label="Task" />

        <DialogActions>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            {taskId ? 'Save' : 'Add Task'}
          </LoadingButton>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>

      </Stack>
    </FormProvider>
  );
}