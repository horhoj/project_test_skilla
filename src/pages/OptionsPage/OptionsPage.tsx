import { FC } from 'react';
import styles from './OptionsPage.module.scss';
import { getUUID } from '~/utils/getUUID';

interface OptionsPageProps {}

const uuidList = Array(1200)
  .fill(null)
  .map(() => getUUID());

export const OptionsPage: FC<OptionsPageProps> = () => {
  return (
    <div className={styles.wrap}>
      {uuidList.map((uuid) => (
        <div key={uuid}>{uuid}</div>
      ))}
    </div>
  );
};
