import { DatepickerController } from '../datepicker.controller';

export class YearSelectorController extends DatepickerController {
  get next() {
    return this.viewDate.getUTCFullYear() + 1;
  }

  get previous() {
    return this.viewDate.getUTCFullYear() - 1;
  }
}
