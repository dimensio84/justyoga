import React from 'react';
import type { TimerSettings } from './types';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  settings: TimerSettings;
  onSettingsChange: (settings: TimerSettings) => void;
}

export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
  settings,
  onSettingsChange,
}: TimerControlsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          onClick={isRunning ? onPause : onStart}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.enableVoice}
            onChange={(e) => onSettingsChange({ ...settings, enableVoice: e.target.checked })}
          />
          Voice Guidance
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.enableSound}
            onChange={(e) => onSettingsChange({ ...settings, enableSound: e.target.checked })}
          />
          Sound Effects
        </label>
      </div>
    </div>
  );
}