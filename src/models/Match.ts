import { TMatchScore } from 'Match';

export class MatchModel {
  homeTeam: string;
  guestTeam: string;

  homeScore: number;
  guestScore: number;

  matchSets: TMatchScore[];

  constructor(homeTeam: string, guestTeam: string) {
    this.homeTeam = homeTeam;
    this.guestTeam = guestTeam;
  }

  getMatchName() {
    return `${this.homeTeam} - ${this.guestTeam}`;
  }

  getMainScoreFormatted() {
    return `${this.homeScore}:${this.guestScore}`;
  }

  getSetsFormatted() {
    const matchSetsFormatted = this.matchSets
      .map((matchScore, idx) => `set${idx + 1} ${matchScore}`)
      .join(', ');

    return matchSetsFormatted ? ` (${matchSetsFormatted})` : '';
  }

  getQuartersFormatted() {
    const matchQuartersFormatted = this.matchSets.join(',');

    return matchQuartersFormatted;
  }

  getWinnerName() {
    if (this.homeScore == this.guestScore) {
      return 'No winner';
    }

    return this.homeScore > this.guestScore ? this.homeTeam : this.guestTeam;
  }
}
