import { DatepickerCoreComponentController } from '../common/datepicker-core-component.controller';
import { datesByWeekInMonth } from './date-selector.domain';
import { toDates } from './date-selector.adapter';
import { renderTable } from '../common/adapter/html-table.adapter';

export class DateSelectorController extends DatepickerCoreComponentController {
  get dates() {
    return toDates(datesByWeekInMonth(this.viewDate));
  }

  get html() {
    return renderTable(this.dates);
  }
}
