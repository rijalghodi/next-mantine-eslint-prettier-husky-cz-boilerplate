import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/id';

dayjs.locale('id');
dayjs.extend(localizedFormat);

export const formatDate = (
  //  formatDate
  value: string | undefined,
  format?:
    | 'ddd'
    | 'LL'
    | 'hh:mm WIB'
    | 'dddd, LL'
    | 'LL, hh:mm WIB'
    | 'ddd, LL, hh:mm WIB'
) => {
  return value
    ? dayjs(value)
        .locale('id')
        .format(format ?? 'LL')
    : '-';
};
