import { matches } from '../data/matches';
import {
  ESportType,
  IMatchDefault,
  IMatchBasketball,
  IMatchTennis,
  IMatchVolleyBall,
} from '../types/Match';

import { BasketballMatchModel } from '../models/Basketball';
import { HandballMatchModel } from '../models/Handball';
import { SoccerMatchModel } from '../models/Soccer';
import { TennisMatchModel } from '../models/Tennis';
import { VolleyballMatchModel } from '../models/Volleyball';

export class EventParser {
  static getMatches() {
    return matches
      .map((element) => {
        switch (element.sport) {
          case ESportType.BASKETBALL:
            return new BasketballMatchModel(element as IMatchBasketball);
          case ESportType.HANDBALL:
            return new HandballMatchModel(element as IMatchDefault);
          case ESportType.SOCCER:
            return new SoccerMatchModel(element as IMatchDefault);
          case ESportType.TENNIS:
            return new TennisMatchModel(element as IMatchTennis);
          case ESportType.VOLLEYBALL:
            return new VolleyballMatchModel(element as IMatchVolleyBall);
          default:
            return null;
        }
      })
      .filter(Boolean);
  }
}
