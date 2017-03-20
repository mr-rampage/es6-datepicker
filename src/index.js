import { log } from './datepicker/application/decorators/log';
import { render } from './datepicker/application/decorators/render';
import { toDates } from './datepicker/application/adapter/month.adapter';
import { renderTable } from './datepicker/application/adapter/html-table.adapter';
import { datesByWeekInMonth } from './datepicker/domain/month';

@log('Test Class')
@render(toDates, renderTable)
class Test {

}

const t = new Test();
console.info(t.render(datesByWeekInMonth(new Date())));
