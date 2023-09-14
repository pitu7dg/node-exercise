import {
  countQuartersToMatchScore,
  extractScores,
  extractMatchResultsFromString,
} from './formatter';

describe('Test formatter utils', () => {
  test('should extract scores from string', () => {
    const result = extractScores('0:0');

    expect(result[0]).toEqual(0);
    expect(result[1]).toEqual(0);
  });

  test('should extract scores from string', () => {
    const result = extractScores('99:125');

    expect(result[0]).toEqual(99);
    expect(result[1]).toEqual(125);
  });

  test('should extract scores from string', () => {
    const result = extractScores('-9:-5');

    expect(result[0]).toEqual(-9);
    expect(result[1]).toEqual(-5);
  });

  test('should extract scores array from string', () => {
    const result = extractMatchResultsFromString('9:5,0:0,8:8');

    expect(result[0]).toEqual('9:5');
    expect(result[1]).toEqual('0:0');
    expect(result[2]).toEqual('8:8');
  });

  test('count final score from quarters', () => {
    const result = countQuartersToMatchScore(['9:5', '1:2', '2:2', '8:8']);

    expect(result[0]).toEqual(20);
    expect(result[1]).toEqual(17);
  });
});
