import type { FlexibilityData, AssessmentResult } from './types';

export function assessFlexibility(data: FlexibilityData): AssessmentResult {
  // Calculate flexibility level
  const scores = {
    touchToes: getScore(data.touchToes),
    sitCross: getScore(data.sitCross),
    backBend: getScore(data.backBend),
    shoulderFlexibility: getScore(data.shoulderFlexibility)
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const level = getFlexibilityLevel(totalScore);
  const recommendations = getRecommendations(level, data);

  return {
    level,
    recommendations
  };
}

function getScore(value: string): number {
  const scoreMap: Record<string, number> = {
    // Touch toes
    easily: 4,
    withEffort: 3,
    almost: 2,
    no: 1,
    // Sit cross-legged
    veryComfortable: 4,
    somewhat: 3,
    difficult: 2,
    impossible: 1,
    // Back bend
    full: 4,
    partial: 3,
    minimal: 2,
    stiff: 1,
    // Shoulder flexibility
    excellent: 4,
    good: 3,
    limited: 2,
    restricted: 1
  };

  return scoreMap[value] || 1;
}

function getFlexibilityLevel(score: number): string {
  if (score >= 14) return 'Advanced';
  if (score >= 10) return 'Intermediate';
  if (score >= 6) return 'Beginner-Intermediate';
  return 'Beginner';
}

function getRecommendations(level: string, data: FlexibilityData): string[] {
  const recommendations: string[] = [];

  switch (level) {
    case 'Beginner':
      recommendations.push(
        'Start with gentle stretching exercises',
        'Focus on basic standing poses like Mountain Pose and Forward Fold',
        'Practice Cat-Cow stretches for spine mobility',
        'Work on seated forward folds with bent knees'
      );
      break;
    case 'Beginner-Intermediate':
      recommendations.push(
        'Incorporate Sun Salutations into your practice',
        'Begin working on Warrior poses',
        'Practice seated forward folds',
        'Include gentle twists in your routine'
      );
      break;
    case 'Intermediate':
      recommendations.push(
        'Deepen your practice with held poses',
        'Work on balance poses like Tree Pose',
        'Include backbends in your routine',
        'Practice more challenging variations of basic poses'
      );
      break;
    case 'Advanced':
      recommendations.push(
        'Explore advanced variations of poses',
        'Work on inversions with proper guidance',
        'Practice longer holds in challenging poses',
        'Include flow sequences in your practice'
      );
      break;
  }

  // Add specific recommendations based on individual metrics
  if (data.touchToes === 'no' || data.touchToes === 'almost') {
    recommendations.push('Focus on hamstring flexibility with gentle forward folds');
  }

  if (data.shoulderFlexibility === 'restricted' || data.shoulderFlexibility === 'limited') {
    recommendations.push('Include shoulder mobility exercises in your routine');
  }

  return recommendations;
}