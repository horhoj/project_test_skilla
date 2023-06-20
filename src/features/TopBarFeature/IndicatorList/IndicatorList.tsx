import { FC } from 'react';
import styles from './IndicatorList.module.scss';
import { indicatorListConfig } from '~/features/TopBarFeature/indicatorConfigs';
import { Indicator } from '~/features/TopBarFeature/Indicator';

interface IndicatorListProps {}

export const IndicatorList: FC<IndicatorListProps> = () => {
  return (
    <div className={styles.wrap}>
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
  );
};
