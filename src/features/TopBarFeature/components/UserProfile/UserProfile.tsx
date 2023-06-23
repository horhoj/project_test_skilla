import { FC, useCallback } from 'react';
import styles from './UserProfile.module.scss';
import { DropWrap } from '~/ui/DropWrap';
import { Avatar } from '~/ui/Avatar';
import callIcon from '~/assets/img/user_profile__icon-calls-24px.svg';
import emailIcon from '~/assets/img/user_profile__icon-email.svg';
import avatarIcon from '~/assets/img/user_profile__employee-foto.png';
import logoutIcon from '~/assets/img/user_profile__icon-logout.svg';
import gotEmployeeIcon from '~/assets/img/user_profile__icon-goto-employee.svg';
import { Svg } from '~/ui/Svg';
import { UserProfileData } from '~/features/TopBarFeature/types';

interface UserProfileProps {
  userProfile: UserProfileData;
}

export const UserProfile: FC<UserProfileProps> = (props) => {
  const userLogoRender = useCallback(
    () => (
      <Avatar src={props.userProfile.userLogo} alt={'Аватар руководителя'} />
    ),
    [],
  );

  return (
    <DropWrap titleRenderFn={userLogoRender} childrenMarginTop={0}>
      <div className={styles.wrap}>
        <button className={styles.logoutBtn}>
          <Svg src={logoutIcon} />
        </button>
        <div className={styles.directorWrap}>
          <div className={styles.directorName}>
            {props.userProfile.director.name}
          </div>
          <div className={styles.directorPositionAndPlace}>
            {props.userProfile.director.position}
            <span className={styles.directorPositionAndPlaceMarker} />
            {props.userProfile.director.place}
          </div>
          <a
            href={`tel:${props.userProfile.director.phone}`}
            className={styles.directorTelephone}
          >
            <Svg src={callIcon} />
            <span>{props.userProfile.director.phone}</span>
          </a>
          <a
            href={`mailto:${props.userProfile.director.email}`}
            className={styles.directorEmail}
          >
            <Svg src={emailIcon} />
            <span>{props.userProfile.director.email}</span>
          </a>
          <div className={styles.directorBorderBottom} />
        </div>
        <div className={styles.departmentListWrap}>
          {props.userProfile.departmentList.map((department) => (
            <div key={department.id} className={styles.departmentWrap}>
              <div className={styles.departmentName}>{department.name}</div>
              <div className={styles.departmentEmployeeList}>
                {department.EmployeeList.map((employee) => (
                  <a
                    href={'#'}
                    className={styles.departmentEmployeeWrap}
                    key={employee.id}
                  >
                    <span className={styles.departmentEmployeeName}>
                      <Avatar src={avatarIcon} alt={'фото сотрудника'} />{' '}
                      <span>{employee.name}</span>
                    </span>
                    <span className={styles.departmentGotoEmployeeName}>
                      <Svg src={gotEmployeeIcon} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DropWrap>
  );
};
