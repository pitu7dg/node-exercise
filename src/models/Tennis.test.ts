import { TennisMatchModel } from './Tennis';
import { ESportType, IMatchTennis } from '../types/Match';

describe('TennisMatchModel', () => {
  test('should provide formatted match result', () => {
    const inputData: IMatchTennis = {
      sport: ESportType.TENNIS,
      participant1: 'Maria Sharapova',
      participant2: 'Serena Williams',
      score: '2:1,7:6,6:3,6:7',
    };
    const model = new TennisMatchModel(inputData);
    const result = model.getFormattedData();

    expect(result).toEqual({
      name: 'Maria Sharapova vs Serena Williams',
      score: 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)',
    });
  });

  test('should provide formatted main score', () => {
    const inputData: IMatchTennis = {
      sport: ESportType.TENNIS,
      participant1: 'A',
      participant2: 'B',
      score: '2:1',
    };
    const model = new TennisMatchModel(inputData);
    const result = model.getMainScoreFormatted();
    const resultSets = model.getSetsFormatted();

    expect(result).toEqual('2:1');
    expect(resultSets).toEqual('');
  });

  test('should provide formatted sets scores', () => {
    const inputData: IMatchTennis = {
      sport: ESportType.TENNIS,
      participant1: 'A',
      participant2: 'B',
      score: '2:1,7:6',
    };
    const model = new TennisMatchModel(inputData);
    const result = model.getSetsFormatted();

    expect(result).toEqual(' (set1 7:6)');
  });
});
