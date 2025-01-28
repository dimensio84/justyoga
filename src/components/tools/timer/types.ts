export interface Pose {
  id: string;
  name: string;
  duration: number;
  transitionTime: number;
}

export interface Sequence {
  id: string;
  name: string;
  poses: Pose[];
  totalDuration: number;
}

export interface TimerSettings {
  enableVoice: boolean;
  enableSound: boolean;
  transitionAlert: boolean;
}