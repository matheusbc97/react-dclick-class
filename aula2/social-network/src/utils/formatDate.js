/* import moment from 'moment';

export default function formatDate(date, format = 'DD/MM/YYYY [às] HH:mm') {
  return moment(date, 'YYYY-MM-DDTHH:mm:ss').format(format);
}
*/

import { format, parse } from 'date-fns';

export default function formatDate(date, type = 'complete') {
  let dateFormat = '';

  if (type === 'complete') {
    dateFormat = "dd/MM/uuuu 'às' HH:mm'h'";
  }

  const convertedDate = new Date();
  parse(date, 'yyyy-MM-dd', convertedDate);

  const dateFormated = format(convertedDate, dateFormat);

  return dateFormated;
}
