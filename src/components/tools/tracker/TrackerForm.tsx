import React, { useState } from 'react';
import type { TrackerFormData } from './types';

interface TrackerFormProps {
  onSubmit: (data: TrackerFormData) => void;
}

export default function TrackerForm({ onSubmit }: TrackerFormProps) {
  const [formData, setFormData] = useState<TrackerFormData>({
    poseName: '',
    progressRating: 5,
    holdTime: 30,
    alignmentRating: 3,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Pose Name</label>
        <input
          type="text"
          value={formData.poseName}
          onChange={(e) => setFormData({ ...formData, poseName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Progress Rating (1-10)</label>
        <input
          type="range"
          min="1"
          max="10"
          value={formData.progressRating}
          onChange={(e) => setFormData({ ...formData, progressRating: Number(e.target.value) })}
          className="mt-1 block w-full"
        />
        <span className="text-sm text-gray-500">{formData.progressRating}</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hold Time (seconds)</label>
        <input
          type="number"
          min="1"
          value={formData.holdTime}
          onChange={(e) => setFormData({ ...formData, holdTime: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Alignment Quality (1-5)</label>
        <div className="flex gap-2 mt-1">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => setFormData({ ...formData, alignmentRating: rating })}
              className={`p-2 rounded-full ${
                formData.alignmentRating === rating
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Photo (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] })}
          className="mt-1 block w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
      >
        Save Entry
      </button>
    </form>
  );
}