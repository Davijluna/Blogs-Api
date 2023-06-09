const jwt = require('jsonwebtoken');
const { User, Category, BlogPost } = require('../models');
// const { Category } = require('../models');
// const { PostCategory } = require('../models');
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

// vamos ver se funciona kkkk
const creatUser = async (body) => {
  const { displayName, email, password, image } = body;
  
    const user = await User.findOne({ where: { displayName, email, password, image } });
    if (user) {
      return { error: { message: 'User already registered' }, code: 409 };
    }
    await User.create(body);
    const payload = { email };
  const { JWT_SECRET } = process.env;
  const validToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return { data: validToken, code: 201 };
};

const listUser = async () => {
 const result = await User.findAll({ attributes: { exclude: 'password' },
 });
 return { data: result, code: 200 };
};

const listUserId = async ({ id }) => {
  const result = await User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!result) {
    return { error: { message: 'User does not exist' }, code: 404 };
  }
  return { data: result, code: 200 };
};

const postName = async (body) => {
  const { name } = body;
  await Category.create({ name });
  const result = await Category.findOne({ where: { name } });
  return { data: result, code: 201 };
};

const getCategories = async (body) => {
  const { id, name } = body;
  const result = await Category.findAll({ id, name });
  return { data: result, code: 200 };
};
//
const setCategory = async () => { // mudar para "getPost"
  const result = await BlogPost.findAll({ include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      through: { attributes: [] },
      as: 'categories' },
  ],
});
  return { data: result, code: 200 };
};

module.exports = { 
  login,
  creatUser,
  listUser,
  listUserId,
  postName,
  getCategories,
  setCategory };