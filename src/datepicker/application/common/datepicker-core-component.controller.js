import { immutableDates } from './decorators/immutable-dates';

@immutableDates('viewDate')
export class DatepickerCoreComponentController {
  constructor(config = {}) {
    const { viewDate, selectedDate } = config;
    this.viewDate = viewDate;
    this.selectedDate = selectedDate;
  }

  get html() {
    return `<div></div>`;
  }
}
