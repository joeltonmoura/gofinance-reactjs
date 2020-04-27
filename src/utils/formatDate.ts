import { parseISO, format } from 'date-fns';

const result = (data: Date): string =>
  format(parseISO(String(data)), 'dd/mm/yyyy');

export default result;
