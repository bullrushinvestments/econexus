import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleRequirementToggle = (id: number) => {
    setRequirements(prevRequirements =>
      prevRequirements.map(requirement =>
        requirement.id === id ? { ...requirement, isCompleted: !requirement.isCompleted } : requirement
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Gather Requirements</h1>
      <ul role="list" aria-label="Requirements list" className="space-y-3">
        {requirements.map(requirement => (
          <li key={requirement.id} className={`flex items-center ${requirement.isCompleted ? 'line-through' : ''}`}>
            <input
              type="checkbox"
              checked={requirement.isCompleted}
              onChange={() => handleRequirementToggle(requirement.id)}
              aria-label={`Complete requirement: ${requirement.name}`}
              className="mr-2"
            />
            <span>{requirement.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleRequirementToggle = (id: number) => {
    setRequirements(prevRequirements =>
      prevRequirements.map(requirement =>
        requirement.id === id ? { ...requirement, isCompleted: !requirement.isCompleted } : requirement
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Gather Requirements</h1>
      <ul role="list" aria-label="Requirements list" className="space-y-3">
        {requirements.map(requirement => (
          <li key={requirement.id} className={`flex items-center ${requirement.isCompleted ? 'line-through' : ''}`}>
            <input
              type="checkbox"
              checked={requirement.isCompleted}
              onChange={() => handleRequirementToggle(requirement.id)}
              aria-label={`Complete requirement: ${requirement.name}`}
              className="mr-2"
            />
            <span>{requirement.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;