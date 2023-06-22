import userLogo from '~/assets/img/user_profile__logo.png';
import employeeAvatar from '~/assets/img/user_profile__avatar.png';
import { getUUID } from '~/utils/getUUID';

interface Employee {
  id: string;
  name: string;
  avatarImg: string;
}

interface Department {
  id: string;
  name: string;
  EmployeeList: Employee[];
}

interface UserProfile {
  userLogo: string;
  director: {
    name: string;
    position: string;
    place: string;
    phone: string;
    email: string;
  };

  departmentList: Department[];
}

export const userProfile: UserProfile = {
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
