import { FC } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  return <img src={props.src} alt={props.alt} className={styles.userLogo} />;
};
