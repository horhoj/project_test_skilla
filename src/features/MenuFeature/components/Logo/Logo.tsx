import { FC } from 'react';
import styles from './Logo.module.scss';
import logo from '~/assets/img/logo.svg';

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return <img src={logo} alt="logo" className={styles.logo} />;
};
