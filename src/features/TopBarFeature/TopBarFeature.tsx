import { FC } from 'react';
import styles from './TopBarFeature.module.scss';
import { CurrentDate } from '~/features/TopBarFeature/CurrentDate';
import { indicatorListConfig } from '~/features/TopBarFeature/indicatorConfigs';
import { Indicator } from '~/features/TopBarFeature/Indicator';

interface TopBarFeatureProps {}

export const TopBarFeature: FC<TopBarFeatureProps> = () => {
  return (
    <div className={styles.wrap}>
      <CurrentDate />
      <div className={styles.indicatorListWrap}>
        {indicatorListConfig.map((indicatorConfig) => (
          <Indicator
            key={indicatorConfig.id}
            text={indicatorConfig.text}
            colorText={indicatorConfig.colorText}
            colorType={indicatorConfig.colorType}
            progress={indicatorConfig.progress}
          />
        ))}
      </div>
    </div>
  );
};
