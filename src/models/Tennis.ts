import { MatchModel } from './Match';
import { IMatchTennis, TMatchScore } from '../types/Match';
import {
  extractScores,
  extractMatchResultsFromString,
} from '../util/formatter';

export class TennisMatchModel extends MatchModel {
  sets: TMatchScore[];

  constructor(match: IMatchTennis) {
    super(match.participant1, match.participant2);

    const [mainScore, ...matchSetsScores] = extractMatchResultsFromString(
      match.score
    );

    const [homeScore, guestScore] = extractScores(mainScore);

    this.homeScore = homeScore;
    this.guestScore = guestScore;
    this.matchSets = matchSetsScores;
  }

  getMatchName() {
    return `${this.homeTeam} vs ${this.guestTeam}`;
  }

  getFormattedData() {
    return {
      name: this.getMatchName(),
      score: `Main score: ${this.getMainScoreFormatted()}${this.getSetsFormatted()}`,
    };
  }
}
