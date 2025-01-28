import React from 'react';
import type { Pose } from './types';

interface PoseListProps {
  poses: Pose[];
  currentPoseIndex: number;
  onPoseUpdate: (index: number, pose: Pose) => void;
  onPoseDelete: (index: number) => void;
}

export default function PoseList({
  poses,
  currentPoseIndex,
  onPoseUpdate,
  onPoseDelete,
}: PoseListProps) {
  return (
    <div className="space-y-2">
      {poses.map((pose, index) => (
        <div
          key={pose.id}
          className={`p-4 rounded-md border ${
            index === currentPoseIndex ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">{pose.name}</span>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={pose.duration}
                onChange={(e) => onPoseUpdate(index, { ...pose, duration: Number(e.target.value) })}
                className="w-20 px-2 py-1 border rounded"
                min="1"
              />
              <button
                onClick={() => onPoseDelete(index)}
                className="text-red-600 hover:text-red-700"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}