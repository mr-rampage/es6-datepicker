import { DateSelectorController } from './date-selector.controller';

describe('DateSelectorController', () => {
  it('should return all the dates in January 2000', () => {
    const controller = new DateSelectorController({
      viewDate: new Date('2000-01-01'),
    });
    expect(controller.dates).toEqual([
      [26, 27, 28, 29, 30, 31, 1],
      [2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20, 21, 22],
      [23, 24, 25, 26, 27, 28, 29],
      [30, 31, 1, 2, 3, 4, 5],
    ]);
  });
});
