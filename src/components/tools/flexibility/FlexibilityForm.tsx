import React, { useState } from 'react';

interface FlexibilityFormProps {
  onSubmit: (data: FlexibilityData) => void;
}

interface FlexibilityData {
  touchToes: string;
  sitCross: string;
  backBend: string;
  shoulderFlexibility: string;
}

export default function FlexibilityForm({ onSubmit }: FlexibilityFormProps) {
  const [formData, setFormData] = useState<FlexibilityData>({
    touchToes: '',
    sitCross: '',
    backBend: '',
    shoulderFlexibility: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Can you touch your toes while standing?
        </label>
        <select
          name="touchToes"
          value={formData.touchToes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select an option</option>
          <option value="easily">Yes, easily</option>
          <option value="withEffort">Yes, with some effort</option>
          <option value="almost">Almost there</option>
          <option value="no">Not at all</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          How comfortable are you sitting cross-legged?
        </label>
        <select
          name="sitCross"
          value={formData.sitCross}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select an option</option>
          <option value="veryComfortable">Very comfortable</option>
          <option value="somewhat">Somewhat comfortable</option>
          <option value="difficult">Difficult</option>
          <option value="impossible">Cannot do it</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          How is your back bend flexibility?
        </label>
        <select
          name="backBend"
          value={formData.backBend}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select an option</option>
          <option value="full">Can do a full back bend</option>
          <option value="partial">Can do a partial back bend</option>
          <option value="minimal">Minimal flexibility</option>
          <option value="stiff">Very stiff</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          How is your shoulder flexibility?
        </label>
        <select
          name="shoulderFlexibility"
          value={formData.shoulderFlexibility}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select an option</option>
          <option value="excellent">Excellent range of motion</option>
          <option value="good">Good range of motion</option>
          <option value="limited">Limited range of motion</option>
          <option value="restricted">Very restricted</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Get Your Assessment
      </button>
    </form>
  );
}