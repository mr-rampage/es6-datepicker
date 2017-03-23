import { MonthSelectorController } from './month-selector.controller';

describe('MonthSelectorController', () => {
  let controller;
  beforeEach(() => {
    controller = new MonthSelectorController({
      viewDate: new Date('2010-01-01'),
    });
  });

  it('should return the next month', () => {
    expect(controller.next).toBe(1);
  });

  it('should return the previous month', () => {
    expect(controller.previous).toBe(-1);
  });
});
