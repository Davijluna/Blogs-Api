const { 
    login,
    creatUser,
    listUser,
    listUserId,
    postName,
    getCategories,
    setCategory,
 } = require('../services/userService');

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

const controllerGetAll = async (req, res) => {
    const { data, error, code } = await listUser(req.params);
    if (error) return res.status(code).json(error);
    return res.status(code).json(data);
};

const controllerGetId = async (req, res) => {
    const { data, error, code } = await listUserId(req.params);
    if (error) return res.status(code).json(error);
    return res.status(code).json(data);
};

const addNameTable = async (req, res) => {
    const { data, error, code } = await postName(req.body);
    if (error) return res.status(code).json(error);
    return res.status(code).json(data);
};

const controllerGetCategories = async (req, res) => {
    const { data, error, code } = await getCategories(req.body);
    if (error) return res.status(code).json(error);
    return res.status(code).json(data);
};

const getAllCategory = async (req, res) => {
    const { data, error, code } = await setCategory(req.params);
    if (error) return res.status(code).json(error);
    return res.status(code).json(data);
};
 
module.exports = {
        loginController,
        controllerCreate,
        controllerGetAll,
        controllerGetId,
        addNameTable,
        controllerGetCategories,
        getAllCategory };