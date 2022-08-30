const { login, creatUser } = require('../services/userService');

const loginController = async (req, res) => {
    const { data, error, code } = await login(req.body);
    if (error) return res.status(code).json(error);
    return res.status(code).json({ token: data });
};

const controllerCreate = async (req, res) => {
    const { data, error, code } = await creatUser(req.body);
    if (error) return res.status(code).json(error);
    return res.status(code).json({ token: data });
};

module.exports = { loginController, controllerCreate };