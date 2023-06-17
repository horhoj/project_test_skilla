import { FC } from 'react';
import styles from './MessagesPage.module.scss';

interface MessagesPageProps {}

export const MessagesPage: FC<MessagesPageProps> = () => {
  return <div className={styles.wrap}>MessagesPage</div>;
};
