import { DatepickerController } from '../datepicker.controller';

export class YearSelectorController extends DatepickerController {
  get year() {
    return this.viewDate.getUTCFullYear();
  }

  get next() {
    return this.year + 1;
  }

  get previous() {
    return this.year - 1;
  }
}
