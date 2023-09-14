export enum ESportType {
  SOCCER = 'soccer',
  VOLLEYBALL = 'volleyball',
  HANDBALL = 'handball',
  BASKETBALL = 'basketball',
  TENNIS = 'tennis',
  SKI_JUMPING = 'ski jumping',
}

/**
 * Define match scores as string divided by ":"
 * For example: "3:2"
 */
export type TMatchScore = string;

/**
 * Define multiple match scores as string divided by ":"
 * For example: "3:2,1:0,3:5"
 */
export type TMatchScoreWithSetScores = string;

/**
 * Define quarter scores
 * For example: ["3:2","1:0"], ["3:5", "2:1"]
 */
export type TMatchQuarters = [
  [TMatchScore, TMatchScore],
  [TMatchScore, TMatchScore],
];

export interface IMatch {
  sport: ESportType;
  participant1: string;
  participant2: string;
}

export interface IMatchDefault extends IMatch {
  score: TMatchScore;
}

export interface IMatchTennis extends IMatch {
  score: TMatchScoreWithSetScores;
}

export interface IMatchVolleyBall extends IMatch {
  score: TMatchScoreWithSetScores;
}

export interface IMatchBasketball extends IMatch {
  score: TMatchQuarters;
}
