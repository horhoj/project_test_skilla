import userLogo from '~/assets/img/user_profile__user-foto.png';
import employeeAvatar from '~/assets/img/user_profile__employee-foto.png';
import { getUUID } from '~/utils/getUUID';
import { UserProfileData } from '~/features/TopBarFeature/types';

export const userProfileData: UserProfileData = {
  userLogo,
  director: {
    name: 'Упоров Кирилл',
    position: 'Директор',
    place: 'Санкт-Петербург',
    phone: '8 (800) 333-17-21',
    email: 'hi@skilla.ru',
  },

  departmentList: [
    {
      id: getUUID(),
      name: 'Операторы',
      EmployeeList: [
        {
          id: getUUID(),
          name: 'Мирон Батонов',
          avatarImg: employeeAvatar,
        },

        {
          id: getUUID(),
          name: 'Алексей Ильин',
          avatarImg: employeeAvatar,
        },

        {
          id: getUUID(),
          name: 'Милана Константинопольская',
          avatarImg: employeeAvatar,
        },
      ],
    },

    {
      id: getUUID(),
      name: 'Логисты',
      EmployeeList: [
        {
          id: getUUID(),
          name: 'Александра Сизых',
          avatarImg: employeeAvatar,
        },

        {
          id: getUUID(),
          name: 'Илья Алексеев',
          avatarImg: employeeAvatar,
        },

        {
          id: getUUID(),
          name: 'Владимир Петров',
          avatarImg: employeeAvatar,
        },
      ],
    },

    {
      id: getUUID(),
      name: 'Бухгалтеры',
      EmployeeList: [
        {
          id: getUUID(),
          name: 'Полина Калинина',
          avatarImg: employeeAvatar,
        },

        {
          id: getUUID(),
          name: 'Наталья Натальева',
          avatarImg: employeeAvatar,
        },

        {
          id: getUUID(),
          name: 'Константин Константинопольский',
          avatarImg: employeeAvatar,
        },
      ],
    },
  ],
};
