import React from 'react';

interface FlexibilityResultsProps {
  results: {
    level: string;
    recommendations: string[];
  };
}

export default function FlexibilityResults({ results }: FlexibilityResultsProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Your Flexibility Assessment Results</h3>
      <div className="mb-4">
        <span className="text-primary-600 font-semibold">Flexibility Level: </span>
        <span className="text-gray-700">{results.level}</span>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Recommended Actions:</h4>
        <ul className="list-disc pl-5 space-y-2">
          {results.recommendations.map((rec, index) => (
            <li key={index} className="text-gray-700">{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}