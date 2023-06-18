import { FC } from 'react';
import styles from './CurrentDate.module.scss';

interface CurrentDateProps {}

const getWeekday = (date: Date, locale = 'ru') => {
  const result = date.toLocaleString(locale, { weekday: 'long' });
  return `${result.slice(0, 1).toUpperCase()}${result.slice(1)}`;
};

const getDay = (date: Date, locale = 'ru') =>
  date.toLocaleString(locale, { day: '2-digit' });

const getMonth = (date: Date, locale = 'ru') =>
  date.toLocaleString(locale, { month: 'short' }).slice(0, 3);

export const CurrentDate: FC<CurrentDateProps> = () => {
  const currentDate = new Date();

  const weekday = getWeekday(currentDate);
  const day = getDay(currentDate);
  const month = getMonth(currentDate);

  return (
    <div className={styles.wrap}>
      {weekday}, {day} {month}
    </div>
  );
};
