import { DatepickerController } from '../datepicker.controller';
import { datesByWeekInMonth } from './date-selector.domain';
import { toDates } from './date-selector.adapter';

export class DateSelectorController extends DatepickerController {
  get dates() {
    return toDates(datesByWeekInMonth(this.viewDate));
  }
}
