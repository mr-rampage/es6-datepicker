import { DateSelectorController } from './datepicker/application/date-selector/date-selector.controller';

const selected = new Date();

const d = new DateSelectorController({
  viewDate: new Date(),
  selectedDate: selected,
});
console.info(d);
