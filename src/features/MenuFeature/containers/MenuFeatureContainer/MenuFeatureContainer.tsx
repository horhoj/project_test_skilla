import { FC } from 'react';
import { Menu } from '~/features/MenuFeature/components/Menu';
import { menuData } from '~/features/MenuFeature/dataMock/menuData';

interface MenuFeatureContainerProps {}

export const MenuFeatureContainer: FC<MenuFeatureContainerProps> = () => {
  return <Menu menuData={menuData} />;
};
