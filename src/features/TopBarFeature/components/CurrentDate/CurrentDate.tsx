import { FC } from 'react';
import styles from './CurrentDate.module.scss';

const getWeekday = (date: Date, locale = 'ru') => {
  const result = date.toLocaleString(locale, { weekday: 'long' });
  return `${result.slice(0, 1).toUpperCase()}${result.slice(1)}`;
};

const getDay = (date: Date, locale = 'ru') =>
  date.toLocaleString(locale, { day: '2-digit' });

const getMonth = (date: Date, locale = 'ru') =>
  date.toLocaleString(locale, { month: 'short' }).slice(0, 3);

interface CurrentDateProps {
  currentDate: Date;
}

export const CurrentDate: FC<CurrentDateProps> = (props) => {
  const weekday = getWeekday(props.currentDate);
  const day = getDay(props.currentDate);
  const month = getMonth(props.currentDate);

  return (
    <div className={styles.wrap}>
      {weekday}, {day} {month}
    </div>
  );
};
