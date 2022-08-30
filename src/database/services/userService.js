const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const login = async (body) => {
  const { email, password } = body;
  if (email === '' || password === '') {
    return { error: { message: 'Some required fields are missing' }, code: 400 };
  }
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { error: { message: 'Invalid fields' }, code: 400 };
  }
  const payload = { email };
  const { JWT_SECRET } = process.env;
  const validToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return { data: validToken, code: 200 };
};

module.exports = { login };