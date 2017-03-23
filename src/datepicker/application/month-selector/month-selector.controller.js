import { DatepickerController } from '../datepicker.controller';

export class MonthSelectorController extends DatepickerController {
  get month() {
    return this.viewDate.getUTCMonth();
  }

  get next() {
    return this.month + 1;
  }

  get previous() {
    return this.month - 1;
  }
}
