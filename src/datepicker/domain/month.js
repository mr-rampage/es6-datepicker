const addDays = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const nextDay = date => addDays(date, 1);
const nextWeek = date => addDays(date, 7);
const firstDayOfMonth = date => addDays(date, -date.getDate() + 1);
const sundayWeekOf = date => addDays(date, -date.getDay());

function daysInWeek(date, ...week) {
  if (week.length === 0 && date.getDay() !== 0) {
    return daysInWeek(sundayWeekOf(date));
  } else if (date.getDay() !== 6) {
    return daysInWeek(nextDay(date), ...week, date);
  }
  return [...week, date];
}

export function datesByWeekInMonth(date, month = null, ...weeks) {
  if (month === null) {
    return datesByWeekInMonth(firstDayOfMonth(date), date.getMonth());
  } else if (month === sundayWeekOf(nextWeek(date)).getMonth()) {
    return datesByWeekInMonth(nextWeek(date), month, ...weeks, daysInWeek(date));
  }
  return [...weeks, daysInWeek(date)];
}
