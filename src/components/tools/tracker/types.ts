export interface PoseEntry {
  id: string;
  poseName: string;
  date: string;
  progressRating: number;
  holdTime: number;
  alignmentRating: number;
  notes: string;
  photoUrl?: string;
}

export interface TrackerFormData {
  poseName: string;
  progressRating: number;
  holdTime: number;
  alignmentRating: number;
  notes: string;
  photo?: File;
}