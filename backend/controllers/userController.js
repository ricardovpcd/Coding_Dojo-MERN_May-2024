import User from "../models/userModel.js";

const register = async (req, res) => {
    try {
        var data = req.body;
        var newUser = await User.create(data);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

const login = async (req, res) => {
    var data = req.body;
    var userFind = await User.findOne({email: data.email, password: data.password});
    if(userFind != null){
        res.status(200).json({"exists": true});
    } else {
        res.status(200).json({"exists": false});
    }
}

export {register, login};