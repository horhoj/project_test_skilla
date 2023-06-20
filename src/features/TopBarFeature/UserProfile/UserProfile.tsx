import { FC, useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import styles from './UserProfile.module.scss';
import { DropWrap } from '~/ui/DropWrap';
import { userProfile } from '~/features/TopBarFeature/userProfileConfig';
import { Avatar } from '~/ui/Avatar';
import callIcon from '~/assets/user_profile__calls-24px.svg';
import emailIcon from '~/assets/user_profile__email.svg';
import avatarIcon from '~/assets/user_profile__avatar.png';

interface UserProfileProps {}

export const UserProfile: FC<UserProfileProps> = () => {
  const userLogoRender = useCallback(
    () => <Avatar src={userProfile.userLogo} alt={'Аватар руководителя'} />,
    [],
  );

  return (
    <DropWrap titleRenderFn={userLogoRender} childrenMarginTop={0}>
      <div className={styles.wrap}>
        <div className={styles.directorWrap}>
          <div className={styles.directorName}>{userProfile.director.name}</div>
          <div className={styles.directorPositionAndPlace}>
            {userProfile.director.position}
            <span className={styles.directorPositionAndPlaceMarker} />
            {userProfile.director.place}
          </div>
          <div className={styles.directorTelephone}>
            <ReactSVG src={callIcon} />
            <span>{userProfile.director.phone}</span>
          </div>
          <div className={styles.directorEmail}>
            <ReactSVG src={emailIcon} />
            <span>{userProfile.director.email}</span>
          </div>
          <div className={styles.directorBorderBottom} />
        </div>
        <div className={styles.departmentListWrap}>
          {userProfile.departmentList.map((department) => (
            <div key={department.id} className={styles.departmentWrap}>
              <div className={styles.departmentName}>{department.name}</div>
              <div className={styles.departmentEmployeeList}>
                {department.EmployeeList.map((employee) => (
                  <button
                    className={styles.departmentEmployeeWrap}
                    key={employee.id}
                  >
                    <span className={styles.departmentEmployeeName}>
                      <Avatar src={avatarIcon} alt={'фото сотрудника'} />{' '}
                      <span>{employee.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DropWrap>
  );
};
