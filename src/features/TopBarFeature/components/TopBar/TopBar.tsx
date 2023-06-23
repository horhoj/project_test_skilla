import { FC } from 'react';
import styles from './TopBar.module.scss';
import { CurrentDate } from '~/features/TopBarFeature/components/CurrentDate';
import { IndicatorList } from '~/features/TopBarFeature/components/IndicatorList';
import { TextDropDown } from '~/features/TopBarFeature/components/TextDropDown';
import { UserProfile } from '~/features/TopBarFeature/components/UserProfile';
import { UserProfileData } from '~/features/TopBarFeature/types';

interface TopBarProps {
  currentDate: Date;
  userProfileData: UserProfileData;
}

export const TopBar: FC<TopBarProps> = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.currentDateWrap}>
        <CurrentDate currentDate={props.currentDate} />
      </div>
      <div className={styles.indicatorListWrap}>
        <IndicatorList />
      </div>
      <div className={styles.textDropDownWrap}>
        <TextDropDown />
      </div>
      <div className={styles.textUserProfileWrap}>
        <UserProfile userProfile={props.userProfileData} />
      </div>
    </div>
  );
};
