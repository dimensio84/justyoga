import React from 'react';
import type { PoseEntry } from './types';

interface TrackerHistoryProps {
  entries: PoseEntry[];
}

export default function TrackerHistory({ entries }: TrackerHistoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Progress History</h3>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{entry.poseName}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm">Progress: {entry.progressRating}/10</div>
                <div className="text-sm">Hold Time: {entry.holdTime}s</div>
              </div>
            </div>
            {entry.notes && (
              <p className="mt-2 text-sm text-gray-600">{entry.notes}</p>
            )}
            {entry.photoUrl && (
              <img
                src={entry.photoUrl}
                alt={`Progress photo for ${entry.poseName}`}
                className="mt-2 rounded-md max-h-48 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}