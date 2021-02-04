/* import moment from 'moment';

export default function formatDate(date, format = 'DD/MM/YYYY [às] HH:mm') {
  return moment(date, 'YYYY-MM-DDTHH:mm:ss').format(format);
}
*/

import { format, toDate, parse } from 'date-fns';

export default function formatDate(date, type = 'complete') {
  let dateFormat = '';

  if (type === 'complete') {
    dateFormat = 'dd/MM/uuuu';
  }

  const dateToFormat = parse(date, 'yyyy-MM-dd', new Date());

  return format(dateToFormat, dateFormat);
}
