import { DatepickerComponent } from './datepicker/application/datepicker.component';

const selected = new Date();

const d = new DatepickerComponent({
  viewDate: new Date(),
  selectedDate: selected,
});
console.info(d);

const f = d.viewDate;
f.setFullYear(1990);

console.info(f, d.viewDate);

selected.setFullYear(1990);

console.info(selected, d.selectedDate);
