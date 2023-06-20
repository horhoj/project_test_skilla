import { FC } from 'react';
import styles from './TopBarFeature.module.scss';
import { CurrentDate } from '~/features/TopBarFeature/CurrentDate';
import { IndicatorList } from '~/features/TopBarFeature/IndicatorList';
import { TextDropDown } from '~/features/TopBarFeature/TextDropDown';
import { UserProfile } from '~/features/TopBarFeature/UserProfile';

interface TopBarFeatureProps {}

export const TopBarFeature: FC<TopBarFeatureProps> = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.currentDateWrap}>
        <CurrentDate />
      </div>
      <div className={styles.indicatorListWrap}>
        <IndicatorList />
      </div>
      <div className={styles.textDropDownWrap}>
        <TextDropDown />
      </div>

      <div className={styles.textUserProfileWrap}>
        <UserProfile />
      </div>
    </div>
  );
};
