/* import moment from 'moment';

export default function formatDate(date, format = 'DD/MM/YYYY [às] HH:mm') {
  return moment(date, 'YYYY-MM-DDTHH:mm:ss').format(format);
}
*/

import { format, parse } from 'date-fns';

type FormatDateTypes = 'complete';

export default function formatDate(
  date: string,
  type: FormatDateTypes = 'complete',
): string {
  let dateFormat = '';

  if (type === 'complete') {
    dateFormat = "dd/MM/uuuu 'às' HH:mm'h'";
  }

  const convertedDate = new Date();
  parse(date, 'yyyy-MM-dd', convertedDate);

  const dateFormatted = format(convertedDate, dateFormat);

  return dateFormatted;
}
