import { DatepickerCoreComponentController } from '../common/datepicker-core-component.controller';

export class MonthSelectorController extends DatepickerCoreComponentController {
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
