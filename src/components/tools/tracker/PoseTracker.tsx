import React, { useState } from 'react';
import TrackerForm from './TrackerForm';
import TrackerHistory from './TrackerHistory';
import type { PoseEntry, TrackerFormData } from './types';

export default function PoseTracker() {
  const [entries, setEntries] = useState<PoseEntry[]>([]);

  const handleSubmit = (data: TrackerFormData) => {
    const newEntry: PoseEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      ...data,
      photoUrl: data.photo ? URL.createObjectURL(data.photo) : undefined
    };
    setEntries([newEntry, ...entries]);
  };

  return (
    <div className="space-y-8">
      <TrackerForm onSubmit={handleSubmit} />
      {entries.length > 0 && <TrackerHistory entries={entries} />}
    </div>
  );
}