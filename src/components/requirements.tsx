import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirementsForm {
  title: string;
  description: string;
  targetAudience: string;
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirementsForm>();

  const onSubmit: SubmitHandler<IRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setLoading(false);
      setError(null);
      reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className={twMerge("block text-sm font-medium text-gray-700", errors.title ? "text-red-500" : "")}>Title</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Title is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.title ? "border-red-300" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={twMerge("block text-sm font-medium text-gray-700", errors.description ? "text-red-500" : "")}>Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.description ? "border-red-300" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className={twMerge("block text-sm font-medium text-gray-700", errors.targetAudience ? "text-red-500" : "")}>Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: 'Target audience is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.targetAudience ? "border-red-300" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className={twMerge("block text-sm font-medium text-gray-700", errors.contentTypes ? "text-red-500" : "")}>Content Types</label>
        <input
          type="text"
          id="contentTypes"
          {...register('contentTypes', { required: 'At least one content type is required' })}
          placeholder="e.g., blog, video, podcast (comma separated)"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.contentTypes ? "border-red-300" : "")}
        />
      </div>
      <button type="submit" disabled={loading} className={twMerge("inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", loading ? "cursor-not-allowed opacity-50" : "")}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirementsForm {
  title: string;
  description: string;
  targetAudience: string;
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirementsForm>();

  const onSubmit: SubmitHandler<IRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setLoading(false);
      setError(null);
      reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className={twMerge("block text-sm font-medium text-gray-700", errors.title ? "text-red-500" : "")}>Title</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Title is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.title ? "border-red-300" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={twMerge("block text-sm font-medium text-gray-700", errors.description ? "text-red-500" : "")}>Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.description ? "border-red-300" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className={twMerge("block text-sm font-medium text-gray-700", errors.targetAudience ? "text-red-500" : "")}>Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: 'Target audience is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.targetAudience ? "border-red-300" : "")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className={twMerge("block text-sm font-medium text-gray-700", errors.contentTypes ? "text-red-500" : "")}>Content Types</label>
        <input
          type="text"
          id="contentTypes"
          {...register('contentTypes', { required: 'At least one content type is required' })}
          placeholder="e.g., blog, video, podcast (comma separated)"
          className={twMerge("mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50", errors.contentTypes ? "border-red-300" : "")}
        />
      </div>
      <button type="submit" disabled={loading} className={twMerge("inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", loading ? "cursor-not-allowed opacity-50" : "")}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;