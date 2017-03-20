function dayAdapter(day) {
  return day.getDate();
}

export function toDates(month) {
  return month.map(week => week.map(dayAdapter));
}
