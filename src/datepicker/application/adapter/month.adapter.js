function dayAdapter(day) {
  return day.getDate();
}

export function monthAdapter(month) {
  return month.map(week => week.map(dayAdapter));
}
