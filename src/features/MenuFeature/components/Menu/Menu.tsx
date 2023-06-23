import { FC } from 'react';
import styles from './MenuFeature.module.scss';
import { Logo } from '~/features/MenuFeature/components/Logo';
import { MenuItem } from '~/features/MenuFeature/components/MenuItem';
import { MenuDataItem } from '~/features/MenuFeature/types';

interface MenuProps {
  menuData: MenuDataItem[];
}

export const Menu: FC<MenuProps> = (props) => {
  return (
    <div className={styles.wrap}>
      <Logo />

      <nav className={styles.nav}>
        {props.menuData.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            icon={menuItem.icon}
            to={menuItem.to}
            title={menuItem.title}
            alt={menuItem.alt}
          />
        ))}
      </nav>
    </div>
  );
};
