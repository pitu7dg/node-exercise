import { MatchModel } from './Match';
import { IMatchDefault, TMatchScore } from '../types/Match';
import { extractScores } from '../util/formatter';

export class SoccerMatchModel extends MatchModel {
  constructor(match: IMatchDefault) {
    super(match.participant1, match.participant2);

    const [homeScore, guestScore] = extractScores(match.score);

    this.homeScore = homeScore;
    this.guestScore = guestScore;
  }

  getFormattedData() {
    return {
      name: this.getMatchName(),
      score: this.getMainScoreFormatted(),
    };
  }
}
