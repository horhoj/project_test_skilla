import { FC } from 'react';
import styles from './IndicatorList.module.scss';
import { indicatorListConfig } from '~/features/TopBarFeature/dataMock/indicatorConfigs';
import { Indicator } from '~/features/TopBarFeature/components/Indicator';

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
