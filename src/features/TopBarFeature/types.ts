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

export interface UserProfileData {
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
