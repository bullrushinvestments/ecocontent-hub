import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import clsx from 'clsx';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

interface BusinessSpecification {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail?: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (errors) {
      Object.values(errors).forEach(error =>
        enqueueSnackbar(`${error.type}: ${error.message}`, { variant: 'error' })
      );
    }
  }, [errors]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
      enqueueSnackbar('Business specification created successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(`Failed to create business specification: ${error.message}`, { variant: 'error' });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="businessName"
        control={control}
        rules={{ required: 'Business Name is required', minLength: { value: 3, message: 'Minimum length is 3 characters' } }}
        render={({ field }) => (
          <TextField
            label="Business Name"
            variant="outlined"
            fullWidth
            error={!!errors.businessName}
            helperText={errors.businessName?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required', minLength: { value: 10, message: 'Minimum length is 10 characters' } }}
        render={({ field }) => (
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="websiteUrl"
        control={control}
        rules={{ pattern: { value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*$/, message: 'Invalid URL' } }}
        render={({ field }) => (
          <TextField
            label="Website URL"
            variant="outlined"
            fullWidth
            error={!!errors.websiteUrl}
            helperText={errors.websiteUrl?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="contactEmail"
        control={control}
        rules={{ pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
        render={({ field }) => (
          <TextField
            label="Contact Email"
            variant="outlined"
            fullWidth
            error={!!errors.contactEmail}
            helperText={errors.contactEmail?.message}
            {...field}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className={clsx('mt-4', { 'opacity-50': loading })}
      >
        {loading ? <CircularProgress size={20} className="mr-2" /> : 'Create Business Specification'}
      </Button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import clsx from 'clsx';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

interface BusinessSpecification {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail?: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecification>();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (errors) {
      Object.values(errors).forEach(error =>
        enqueueSnackbar(`${error.type}: ${error.message}`, { variant: 'error' })
      );
    }
  }, [errors]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
      enqueueSnackbar('Business specification created successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(`Failed to create business specification: ${error.message}`, { variant: 'error' });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="businessName"
        control={control}
        rules={{ required: 'Business Name is required', minLength: { value: 3, message: 'Minimum length is 3 characters' } }}
        render={({ field }) => (
          <TextField
            label="Business Name"
            variant="outlined"
            fullWidth
            error={!!errors.businessName}
            helperText={errors.businessName?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required', minLength: { value: 10, message: 'Minimum length is 10 characters' } }}
        render={({ field }) => (
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="websiteUrl"
        control={control}
        rules={{ pattern: { value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*$/, message: 'Invalid URL' } }}
        render={({ field }) => (
          <TextField
            label="Website URL"
            variant="outlined"
            fullWidth
            error={!!errors.websiteUrl}
            helperText={errors.websiteUrl?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="contactEmail"
        control={control}
        rules={{ pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
        render={({ field }) => (
          <TextField
            label="Contact Email"
            variant="outlined"
            fullWidth
            error={!!errors.contactEmail}
            helperText={errors.contactEmail?.message}
            {...field}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className={clsx('mt-4', { 'opacity-50': loading })}
      >
        {loading ? <CircularProgress size={20} className="mr-2" /> : 'Create Business Specification'}
      </Button>
    </form>
  );
};

export default CreateBusinessSpecification;