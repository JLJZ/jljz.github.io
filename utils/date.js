export function dateStringToMonthYear(date) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = date.getMonth() - 1;
  const year = date.getFullYear();
  return `${months[month]} ${year}`;
}
