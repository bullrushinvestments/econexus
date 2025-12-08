import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestimonialFormValues {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonials: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestimonialFormValues>();

  const onSubmit: SubmitHandler<TestimonialFormValues> = (data) => {
    setLoading(true);
    setError(null); // Reset error if a new submission is made

    fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message); // Set error message if there's an issue
      })
      .finally(() => setLoading(false)); // Always set loading to false regardless of success or failure
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
          className={twMerge("w-full px-3 py-2 border rounded", errors.name && "border-red-500")}
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'This field is required' })}
          className={twMerge("w-full px-3 py-2 border rounded", errors.email && "border-red-500")}
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          {...register('message', { required: 'This field is required' })}
          className={twMerge("w-full px-3 py-2 border rounded", errors.message && "border-red-500")}
          placeholder="Your Message"
          rows={4}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("bg-blue-500 text-white font-bold py-2 px-4 rounded", loading && "cursor-not-allowed opacity-50")}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default WriteTestimonials;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestimonialFormValues {
  name: string;
  email: string;
  message: string;
}

const WriteTestimonials: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestimonialFormValues>();

  const onSubmit: SubmitHandler<TestimonialFormValues> = (data) => {
    setLoading(true);
    setError(null); // Reset error if a new submission is made

    fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message); // Set error message if there's an issue
      })
      .finally(() => setLoading(false)); // Always set loading to false regardless of success or failure
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
          className={twMerge("w-full px-3 py-2 border rounded", errors.name && "border-red-500")}
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'This field is required' })}
          className={twMerge("w-full px-3 py-2 border rounded", errors.email && "border-red-500")}
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          {...register('message', { required: 'This field is required' })}
          className={twMerge("w-full px-3 py-2 border rounded", errors.message && "border-red-500")}
          placeholder="Your Message"
          rows={4}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("bg-blue-500 text-white font-bold py-2 px-4 rounded", loading && "cursor-not-allowed opacity-50")}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default WriteTestimonials;