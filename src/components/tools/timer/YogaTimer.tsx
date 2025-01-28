import React, { useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import PoseList from './PoseList';
import AddPose from './AddPose';
import type { Pose, TimerSettings } from './types';

export default function YogaTimer() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [settings, setSettings] = useState<TimerSettings>({
    enableVoice: true,
    enableSound: true,
    transitionAlert: true,
  });

  useEffect(() => {
    let interval: number;

    if (isRunning && poses.length > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            // Move to next pose
            if (currentPoseIndex < poses.length - 1) {
              setCurrentPoseIndex(i => i + 1);
              return poses[currentPoseIndex + 1].duration;
            } else {
              setIsRunning(false);
              return 0;
            }
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, poses, currentPoseIndex]);

  const handleStart = () => {
    if (poses.length === 0) return;
    setIsRunning(true);
    if (timeLeft === 0) {
      setTimeLeft(poses[currentPoseIndex].duration);
    }
  };

  const handlePause = () => setIsRunning(false);
  
  const handleReset = () => {
    setIsRunning(false);
    setCurrentPoseIndex(0);
    setTimeLeft(poses[0]?.duration || 0);
  };

  const handlePoseUpdate = (index: number, updatedPose: Pose) => {
    setPoses(poses.map((pose, i) => (i === index ? updatedPose : pose)));
    if (index === currentPoseIndex && !isRunning) {
      setTimeLeft(updatedPose.duration);
    }
  };

  const handlePoseDelete = (index: number) => {
    setPoses(poses.filter((_, i) => i !== index));
    if (index <= currentPoseIndex) {
      setCurrentPoseIndex(Math.max(0, currentPoseIndex - 1));
    }
  };

  const handleAddPose = (pose: Pose) => {
    setPoses([...poses, pose]);
    if (poses.length === 0) {
      setTimeLeft(pose.duration);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center text-4xl font-bold">
        {timeLeft}s
      </div>

      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        settings={settings}
        onSettingsChange={setSettings}
      />
      
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add Poses</h3>
        <AddPose onAdd={handleAddPose} />
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Sequence</h3>
        <PoseList
          poses={poses}
          currentPoseIndex={currentPoseIndex}
          onPoseUpdate={handlePoseUpdate}
          onPoseDelete={handlePoseDelete}
        />
      </div>
    </div>
  );
}