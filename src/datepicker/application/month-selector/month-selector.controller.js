import { DatepickerController } from '../datepicker.controller';

export class MonthSelectorController extends DatepickerController {
  get next() {
    return this.viewDate.getUTCMonth() + 1;
  }

  get previous() {
    return this.viewDate.getUTCMonth() - 1;
  }
}
