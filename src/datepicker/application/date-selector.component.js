import { renderable } from './decorators/renderable';
import { toDates } from './adapter/month.adapter';
import { renderTable } from './adapter/html-table.adapter';
import { immutableDates } from './decorators/immutable-dates';

@renderable(toDates, renderTable)
@immutableDates('viewDate')
export class DateSelectorComponent {
  constructor(config = {}) {
    const { viewDate, selectedDate } = config;
    this.viewDate = viewDate;
    this.selectedDate = selectedDate;
  }
}
