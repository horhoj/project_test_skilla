import { FC } from 'react';
import classNames from 'classnames';
import styles from './Indicator.module.scss';

type ColorType = 'green' | 'yellow' | 'red';

interface IndicatorProps {
  text: string;
  colorText: string;
  colorType: ColorType;
  progress: number;
}

export const Indicator: FC<IndicatorProps> = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div>{props.text}</div>
        <div className={classNames(styles[`colorText_${props.colorType}`])}>
          {props.colorText}
        </div>
      </div>
      <div className={styles.progressBarBackground}>
        <div
          className={classNames(
            styles.progressBar,
            styles[`progressBar_${props.colorType}`],
          )}
          style={{ width: `${props.progress}%` }}
        />
      </div>
    </div>
  );
};
