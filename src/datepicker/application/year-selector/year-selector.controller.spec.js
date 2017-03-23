import { YearSelectorController } from './year-selector.controller';

describe('YearSelectorController', () => {
  let controller;

  beforeEach(() => {
    controller = new YearSelectorController({
      viewDate: new Date('2010-01-01'),
    });
  });

  it('should return the next year', () => {
    expect(controller.next).toBe(2011);
  });

  it('should return the previous year', () => {
    expect(controller.previous).toBe(2009);
  });
});
