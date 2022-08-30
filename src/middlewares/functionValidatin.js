// const User = require('../database/models');

// // valida se todos os campos estão preenchidos.
// const valideitor = async (req, res, next) => {
//     const { params: { id } } = req;
//     const result = await User(id);

//     if (!result) return res.status(400).json({ message: 'Some required fields are missing' });
//     next();
// };

// // valida se displayName e amail estão peenchidos
// const validUser = async (req, res, next) => {
//     const { password, email } = req.body;
//     if (password === '' || email === '') {
//         return res.status(400).json({ message: 'Invalid fields' });
//     }
//     next();
// };

// const tokenValidetion = async (re)

// module.exports = { validUser, valideitor };