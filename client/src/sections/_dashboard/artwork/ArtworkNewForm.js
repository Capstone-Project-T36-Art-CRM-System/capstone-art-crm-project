import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

// Routing
import { useNavigate } from 'react-router-dom';

// Form Controls
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Material UI
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// Components Import
import { FormProvider, RHFUploadImage, RHFTextField } from '../../../components/hook-form';

//Utils
import { fData } from '../../../utils/formatNumber';
import {
  collection,
  addDoc,
  updateDoc
} from "firebase/firestore";

// FIRESTORE
import { db } from '../../../firebase';

// Props
ArtworkNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentCustomer: PropTypes.object,
};

export default function ArtworkNewForm({ isEdit, currentArtwork }) {

  const artworlCollectionRef = collection(db, "artworks") 

  const navigate = useNavigate();

  const NewUserSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author name is required'),
    material: Yup.string().required('Material name is required'),
    price: Yup.number().typeError('Number must be specified').required('Price is required'),
    height: Yup.number().typeError('Number must be specified').required('Height is required'),
    width: Yup.number().typeError('Number must be specified').required('Width is required'),
    coverPrev: Yup.mixed().test('required', 'Image cover is required', (value) => value !== ''),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentArtwork?.title || '',
      author: currentArtwork?.author || '',
      material: currentArtwork?.material || '',
      price: currentArtwork?.price || '',
      height: currentArtwork?.height || '',
      width: currentArtwork?.height || '',
      // birthDate: currentArtwork?.birthDate,
      description: currentArtwork?.description || '',
      cover: currentArtwork?.cover || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentArtwork]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentArtwork) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentArtwork]);

  const onSubmit = async (values) => {
    try {

      const createArtwork = async () => {
        //await addDoc(artworlCollectionRef,  { name: values.author, cover: newCover, description: newDescription, height: Number(newHeight), width: Number(newWidth), price: Number(newPrice), material: Number(newMaterial), status: newStatus, title: newTitle, year: Number(newYear) } );
      };

      console.log("ABOBA", values)
      // navigate(`/dashboard/artwork/list`)
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'coverPrev',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

        var reader = new FileReader();
        reader.onload = function () {
            console.log(reader.result.replace("data:", "")
                .replace(/^.+,/, ""));
        }
        reader.readAsDataURL(file);
      }
    },
    [setValue]
  );



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 7, pt: 3, px: 3 }}>

            <Box sx={{ mb: 5 }}>
              <RHFUploadImage
                name="coverPrev"
                accept=".jpeg, .jpg, .png"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png,
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="title" label="Title" />
              <RHFTextField name="author" label="Author Name" />
              <RHFTextField name="material" label="Material" />
              <RHFTextField name="price" label="Price" />
              <RHFTextField name="height" label="Height (cm)" />
              <RHFTextField name="width" label="Width (cm)" />
              {/* <RHFDateTimePicker name="birthDate" label="Birth Date" /> */}

            </Box>
            <RHFTextField sx={{mt: 3}} multiline rows={3} name="description" label="Description" />

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Artwork' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
    // <div>
    //   <input
    //     placeholder="Author..."
    //     onChange={(event) => {
    //       setNewAuthor(event.target.value);
    //     }}
    //   />
    //   <input
    //     placeholder="Cover..."
    //     onChange={(event) => {
    //       setNewCover(event.target.value);
    //     }}
    //   />
    //    <input
    //     placeholder="Desc..."
    //     onChange={(event) => {
    //       setNewDescription(event.target.value);
    //     }}
    //   />
    //   <input
    //     type="number"
    //     placeholder="Height..."
    //     onChange={(event) => {
    //       setNewHeight(event.target.value);
    //     }}
    //   />
    //   <input
    //     type="number"
    //     placeholder="Width..."
    //     onChange={(event) => {
    //       setNewWidth(event.target.value);
    //     }}
    //   />
    //   <input
    //     placeholder="Material..."
    //     onChange={(event) => {
    //       setNewMaterial(event.target.value);
    //     }}
    //   />
    //   <input
    //   type="number"
    //     placeholder="Price..."
    //     onChange={(event) => {
    //       setNewPrice(event.target.value);
    //     }}
    //   />
    //   <input
    //     placeholder="Status..."
    //     onChange={(event) => {
    //       setNewStatus(event.target.value);
    //     }}
    //   />
    //   <input
    //     placeholder="Title..."
    //     onChange={(event) => {
    //       setNewTitle(event.target.value);
    //     }}
    //   />
    //   <input
    //   type="number"
    //     placeholder="Year..."
    //     onChange={(event) => {
    //       setNewYear(event.target.value);
    //     }}
    //   />
    //    <button onClick={onSubmit}> Create Art Work</button>
    
    // </div>
  );
}
