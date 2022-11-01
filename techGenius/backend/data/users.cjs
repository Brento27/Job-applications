import bcrypt from 'bcryptjs';

const users = [
  {
    firstName: 'Brent',
    lastName: 'Lombaard',
    telephoneNumber: '0670375514',
    email: 'test@test.com',
    status: 'active',
    password: bcrypt.hashSync('Password123#', 10),
    department: {},
    isManager: true,
  },
];

export default users;
