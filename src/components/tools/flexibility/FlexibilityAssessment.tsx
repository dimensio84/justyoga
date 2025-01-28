import React, { useState } from 'react';
import FlexibilityForm from './FlexibilityForm';
import FlexibilityResults from './FlexibilityResults';
import { assessFlexibility } from './flexibilityUtils';
import type { FlexibilityData, AssessmentResult } from './types';

export default function FlexibilityAssessment() {
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const handleSubmit = (data: FlexibilityData) => {
    const assessmentResults = assessFlexibility(data);
    setResults(assessmentResults);
  };

  return (
    <div>
      {!results ? (
        <FlexibilityForm onSubmit={handleSubmit} />
      ) : (
        <div>
          <FlexibilityResults results={results} />
          <button
            onClick={() => setResults(null)}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Take Assessment Again
          </button>
        </div>
      )}
    </div>
  );
}