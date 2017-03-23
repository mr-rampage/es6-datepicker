import { toDates } from './date-selector.adapter';

describe('MonthAdapter', () => {
  it('should convert a matrix of dates into a matrix of days', () => {
    expect(toDates([[new Date(2000, 1, 1)]])).toEqual([[1]]);
  });
});
