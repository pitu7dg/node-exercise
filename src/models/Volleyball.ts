import { MatchModel } from './Match';
import { IMatchVolleyBall } from '../types/Match';
import {
  extractMatchResultsFromString,
  extractScores,
} from '../util/formatter';

export class VolleyballMatchModel extends MatchModel {
  constructor(match: IMatchVolleyBall) {
    super(match.participant1, match.participant2);

    const [mainScore, ...matchSetsScores] = extractMatchResultsFromString(
      match.score
    );

    const [homeScore, guestScore] = extractScores(mainScore);

    this.homeScore = homeScore;
    this.guestScore = guestScore;
    this.matchSets = matchSetsScores;
  }

  getFormattedData() {
    return {
      name: this.getMatchName(),
      score: `Main score: ${this.getMainScoreFormatted()}${this.getSetsFormatted()}`,
    };
  }
}
