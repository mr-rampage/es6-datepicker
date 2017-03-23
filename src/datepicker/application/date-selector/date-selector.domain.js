const addDays = (date, days) =>
  new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days);
const nextDay = date => addDays(date, 1);
const nextWeek = date => addDays(date, 7);
const firstDayOfMonth = date => addDays(date, -date.getUTCDate() + 1);
const sundayWeekOf = date => addDays(date, -date.getUTCDay());

function daysInWeek(date, ...week) {
  if (week.length === 0 && date.getUTCDay() !== 0) {
    return daysInWeek(sundayWeekOf(date));
  } else if (date.getUTCDay() !== 6) {
    return daysInWeek(nextDay(date), ...week, date);
  }
  return [...week, date];
}

export function datesByWeekInMonth(date, month = null, ...weeks) {
  if (month === null) {
    return datesByWeekInMonth(firstDayOfMonth(date), date.getUTCMonth());
  } else if (month === sundayWeekOf(nextWeek(date)).getUTCMonth()) {
    return datesByWeekInMonth(nextWeek(date), month, ...weeks, daysInWeek(date));
  }
  return [...weeks, daysInWeek(date)];
}
