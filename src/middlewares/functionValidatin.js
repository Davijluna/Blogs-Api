// const user = require('../database/models/user');

const validCaracter = (req, res, next) => {
    const { displayName } = req.body;
    if (!displayName) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
next();
};

const validEmail = (req, res, next) => {
    const { email } = req.body;
    // const result = await User(body)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
      }
      next();
};

const lengthPassword = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
      }
      next();
};

const validName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400)
        .json({ message: '"name" is required' });
    }
    next();
};

const blogvalidetion = (req, res, next) => {
    const { title, content, cotegoryIds } = req.body;
    if (!title || !content || !cotegoryIds) {
        return res.status(400)
        .json({ message: 'Erro nas validações' });
    }
    next();
};

module.exports = {
    validEmail,
    validCaracter,
    lengthPassword,
    validName,
    blogvalidetion };