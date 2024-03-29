import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Oliver',
    email: 'oliver@dev.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Emilie',
    email: 'emilie@dev.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Alain',
    email: 'alain@dev.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Laurence',
    email: 'laurence@dev.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
