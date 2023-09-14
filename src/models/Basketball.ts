import { MatchModel } from './Match';
import { IMatchBasketball } from '../types/Match';
import { countQuartersToMatchScore } from '../util/formatter';

export class BasketballMatchModel extends MatchModel {
  constructor(match: IMatchBasketball) {
    super(match.participant1, match.participant2);

    const allQuartersScores = match.score.flat();

    const [homeScore, guestScore] =
      countQuartersToMatchScore(allQuartersScores);

    this.homeScore = homeScore;
    this.guestScore = guestScore;
    this.matchSets = allQuartersScores;
  }

  getFormattedData() {
    return {
      name: this.getMatchName(),
      score: this.getQuartersFormatted(),
    };
  }
}
