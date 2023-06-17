import { FC } from 'react';
import styles from './MenuFeature.module.scss';
import { Logo } from '~/features/MenuFeature/Logo';
import { MenuItem } from '~/features/MenuFeature/MenuItem';
import { menuConfig } from '~/features/MenuFeature/menuConfig';

interface MenuFeatureProps {}

export const MenuFeature: FC<MenuFeatureProps> = () => {
  return (
    <div className={styles.wrap}>
      <Logo />

      <nav className={styles.nav}>
        {menuConfig.map((menuItem) => (
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
