import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'terish tee',
        email: 'tee@example.com',
        password: bcrypt.hashSync('123456', 10),
    },  {
        name: 'paa joe',
        email: 'paa@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
] 


export default users