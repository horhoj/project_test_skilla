import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  icon: string;
  title: string;
  to: string;
  alt: string;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <NavLink to={props.to} className={styles.navLink}>
      {({ isActive }) => (
        <span
          className={classNames(styles.wrap, isActive && styles.wrapActive)}
        >
          <span className={styles.iconWrap}>
            <ReactSVG
              src={props.icon}
              className={classNames(isActive && styles.iconWrapActive)}
            />
          </span>
          <span
            className={classNames(styles.text, isActive && styles.textActive)}
          >
            {props.title}
          </span>
        </span>
      )}
    </NavLink>
  );
};
