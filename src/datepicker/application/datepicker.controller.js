import { immutableDates } from './decorators/immutable-dates';

@immutableDates('viewDate')
export class DatepickerController {
  constructor(config = {}) {
    const { viewDate, selectedDate } = config;
    this.viewDate = viewDate;
    this.selectedDate = selectedDate;
  }
}
