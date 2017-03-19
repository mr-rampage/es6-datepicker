'use strict';

const addDays = (date, days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const nextDay = date => addDays(date, 1);
const nextWeek = date => addDays(date, 7);
const firstDayOfMonth = date => addDays(date, -date.getDate() + 1)
const sundayWeekOf = date => addDays(date, -date.getDay());

function listDaysInWeek(date, ...week) {
  if (week.length === 0 && date.getDay() !== 0) {
    return listDaysInWeek(sundayWeekOf(date))
  } else if (date.getDay() !== 6) {
    return listDaysInWeek(nextDay(date), ...week, date);
  } else {
    return [...week, date];
  }
}

export function listDaysInMonth(date, month = null, ...weeks) {
  if (month === null) {
    return listDaysInMonth(firstDayOfMonth(date), date.getMonth()) 
  } else if (month === sundayWeekOf(nextWeek(date)).getMonth()) {
    return listDaysInMonth(nextWeek(date), month, ...weeks, listDaysInWeek(date));
  } else {
    return [...weeks, listDaysInWeek(date)];
  }
}
