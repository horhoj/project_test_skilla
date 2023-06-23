import { FC } from 'react';
import { TopBar } from '~/features/TopBarFeature/components/TopBar';
import { userProfileData } from '~/features/TopBarFeature/dataMock/userProfileData';

interface TopBarContainerProps {}

export const TopBarContainer: FC<TopBarContainerProps> = () => {
  const currentDate = new Date();

  return <TopBar currentDate={currentDate} userProfileData={userProfileData} />;
};
