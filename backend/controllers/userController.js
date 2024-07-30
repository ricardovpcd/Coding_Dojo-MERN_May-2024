import User from "../models/userModel.js";

const createUser = async (req, res) => {
    var data = req.body;
    var newUser = await User.create(data);
    res.status(200).json(newUser);
}

export {createUser};