import { TMatchScore, TMatchScoreWithSetScores } from '../types/Match';

export const extractScores = (matchScore: TMatchScore) =>
  matchScore.split(':').map(Number);

export const extractMatchResultsFromString = (
  matchScore: TMatchScoreWithSetScores
): TMatchScore[] => matchScore.split(',');

export const countQuartersToMatchScore = (
  matchScore: TMatchScore[]
): [number, number] =>
  matchScore.reduce(
    (acc, quarterScore) => {
      const [homeScore, guestScore] = extractScores(quarterScore);

      acc[0] += homeScore;
      acc[1] += guestScore;

      return acc;
    },
    [0, 0]
  );
