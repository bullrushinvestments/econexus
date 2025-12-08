import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: '',
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/business-specification');
        setSpecification(response.data);
      } catch (err) {
        setError('Failed to load initial data.');
      } finally {
        setLoading(false);
      }
    };

    if (!specification.id) {
      fetchInitialData();
    }
  }, [specification]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleRequirementChange = (index: number, field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedRequirements = [...specification.requirements];
    updatedRequirements[index][field] = e.target.value;
    setSpecification({
      ...specification,
      requirements: updatedRequirements
    });
  };

  const addRequirement = () => {
    setSpecification({
      ...specification,
      requirements: [
        ...specification.requirements,
        { title: '', details: '' }
      ]
    });
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = specification.requirements.filter(
      (_, i) => i !== index
    );
    setSpecification({
      ...specification,
      requirements: updatedRequirements
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('/api/business-specification', specification);
      setError(null);
      // Navigate to a success page or show a message
    } catch (err) {
      setError('Failed to create business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={specification.name}
            onChange={handleInputChange}
            required
            className={clsx(
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              loading ? 'opacity-25' : ''
            )}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={specification.description}
            onChange={handleInputChange}
            required
            rows={3}
            className={clsx(
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              loading ? 'opacity-25' : ''
            )}
          />
        </div>
        <div className="space-y-4">
          {specification.requirements.map((requirement, index) => (
            <React.Fragment key={index}>
              <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
                Requirement Title
              </label>
              <input
                type="text"
                name={`title-${index}`}
                id={`title-${index}`}
                value={requirement.title}
                onChange={handleRequirementChange(index, 'title')}
                required
                className={clsx(
                  'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                  loading ? 'opacity-25' : ''
                )}
              />
              <label htmlFor={`details-${index}`} className="block text-sm font-medium text-gray-700">
                Requirement Details
              </label>
              <textarea
                name={`details-${index}`}
                id={`details-${index}`}
                value={requirement.details}
                onChange={handleRequirementChange(index, 'details')}
                required
                rows={3}
                className={clsx(
                  'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                  loading ? 'opacity-25' : ''
                )}
              />
            </React.Fragment>
          ))}
        </div>
        <button
          type="button"
          onClick={addRequirement}
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
        >
          Add Requirement
        </button>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={loading}
            className={clsx(
              'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150',
              loading ? 'cursor-not-allowed' : ''
            )}
          >
            {loading ? 'Creating...' : 'Create Business Specification'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: '',
    name: '',
    description: '',
    requirements: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/business-specification');
        setSpecification(response.data);
      } catch (err) {
        setError('Failed to load initial data.');
      } finally {
        setLoading(false);
      }
    };

    if (!specification.id) {
      fetchInitialData();
    }
  }, [specification]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleRequirementChange = (index: number, field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedRequirements = [...specification.requirements];
    updatedRequirements[index][field] = e.target.value;
    setSpecification({
      ...specification,
      requirements: updatedRequirements
    });
  };

  const addRequirement = () => {
    setSpecification({
      ...specification,
      requirements: [
        ...specification.requirements,
        { title: '', details: '' }
      ]
    });
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = specification.requirements.filter(
      (_, i) => i !== index
    );
    setSpecification({
      ...specification,
      requirements: updatedRequirements
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('/api/business-specification', specification);
      setError(null);
      // Navigate to a success page or show a message
    } catch (err) {
      setError('Failed to create business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={specification.name}
            onChange={handleInputChange}
            required
            className={clsx(
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              loading ? 'opacity-25' : ''
            )}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={specification.description}
            onChange={handleInputChange}
            required
            rows={3}
            className={clsx(
              'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              loading ? 'opacity-25' : ''
            )}
          />
        </div>
        <div className="space-y-4">
          {specification.requirements.map((requirement, index) => (
            <React.Fragment key={index}>
              <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700">
                Requirement Title
              </label>
              <input
                type="text"
                name={`title-${index}`}
                id={`title-${index}`}
                value={requirement.title}
                onChange={handleRequirementChange(index, 'title')}
                required
                className={clsx(
                  'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                  loading ? 'opacity-25' : ''
                )}
              />
              <label htmlFor={`details-${index}`} className="block text-sm font-medium text-gray-700">
                Requirement Details
              </label>
              <textarea
                name={`details-${index}`}
                id={`details-${index}`}
                value={requirement.details}
                onChange={handleRequirementChange(index, 'details')}
                required
                rows={3}
                className={clsx(
                  'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                  loading ? 'opacity-25' : ''
                )}
              />
            </React.Fragment>
          ))}
        </div>
        <button
          type="button"
          onClick={addRequirement}
          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
        >
          Add Requirement
        </button>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={loading}
            className={clsx(
              'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150',
              loading ? 'cursor-not-allowed' : ''
            )}
          >
            {loading ? 'Creating...' : 'Create Business Specification'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;