import { datesByWeekInMonth } from './date-selector.domain';

describe('datesByWeekInMonth', () => {
  const daysInMonth = datesByWeekInMonth(new Date('2000-01-09'));

  it('should have 4 weeks in January 1, 2000', () => {
    expect(daysInMonth.length).toBe(6);
  });

  it('should have a day in January for every row', () => {
    const isInJanuary = day => day.getFullYear() === 2000 &&
      day.getMonth() === 0;

    daysInMonth.forEach((week) =>
      expect(week.some(isInJanuary)).toBeTruthy('Week should contain a day in January 2000')
    );
  });
});
