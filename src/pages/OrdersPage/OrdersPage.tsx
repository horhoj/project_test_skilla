import { FC } from 'react';
import styles from './OrdersPage.module.scss';

interface OrdersPageProps {}

export const OrdersPage: FC<OrdersPageProps> = () => {
  return <div className={styles.wrap}>OrdersPage</div>;
};
