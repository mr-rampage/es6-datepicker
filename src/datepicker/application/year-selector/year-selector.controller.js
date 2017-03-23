import { DatepickerCoreComponentController } from '../common/datepicker-core-component.controller';

export class YearSelectorController extends DatepickerCoreComponentController {
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
