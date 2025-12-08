import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestFormValues {
  title: string;
  description: string;
}

const initialValues: WriteTestFormValues = {
  title: '',
  description: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
});

interface WriteTestsProps {
  onCreateTest?: (test: Test) => void;
}

export const WriteTests: React.FC<WriteTestsProps> = ({ onCreateTest }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setLoading(true);
        // Simulate API call
        const test: Test = {
          id: 'test-id',
          title: values.title,
          description: values.description
        };
        if (onCreateTest) {
          onCreateTest(test);
        }
        formik.resetForm();
      } catch (error) {
        console.error('Error creating test:', error);
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test title..."
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-sm italic">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test description..."
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm italic">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading || !formik.isValid}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium rounded-md focus:outline-none`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestFormValues {
  title: string;
  description: string;
}

const initialValues: WriteTestFormValues = {
  title: '',
  description: ''
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
});

interface WriteTestsProps {
  onCreateTest?: (test: Test) => void;
}

export const WriteTests: React.FC<WriteTestsProps> = ({ onCreateTest }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setLoading(true);
        // Simulate API call
        const test: Test = {
          id: 'test-id',
          title: values.title,
          description: values.description
        };
        if (onCreateTest) {
          onCreateTest(test);
        }
        formik.resetForm();
      } catch (error) {
        console.error('Error creating test:', error);
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test title..."
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-sm italic">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test description..."
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm italic">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading || !formik.isValid}
          className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium rounded-md focus:outline-none`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};