import React, { useState } from 'react';
import { presetPoses } from './presets';
import type { Pose } from './types';

interface AddPoseProps {
  onAdd: (pose: Pose) => void;
}

export default function AddPose({ onAdd }: AddPoseProps) {
  const [selectedPose, setSelectedPose] = useState('');
  const [duration, setDuration] = useState(60);

  const handleAdd = () => {
    if (!selectedPose) return;
    
    onAdd({
      id: crypto.randomUUID(),
      name: selectedPose,
      duration,
      transitionTime: 5
    });

    setSelectedPose('');
    setDuration(60);
  };

  return (
    <div className="flex gap-2 items-end">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Pose
        </label>
        <select
          value={selectedPose}
          onChange={(e) => setSelectedPose(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="">Choose a pose...</option>
          {presetPoses.map(pose => (
            <option key={pose.name} value={pose.name}>
              {pose.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Duration (s)
        </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          min="5"
          className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <button
        onClick={handleAdd}
        disabled={!selectedPose}
        className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add
      </button>
    </div>
  );
}