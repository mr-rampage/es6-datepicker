function dayAdapter(day) {
  return day.getUTCDate();
}

export function toDates(month) {
  return month.map(week => week.map(dayAdapter));
}
