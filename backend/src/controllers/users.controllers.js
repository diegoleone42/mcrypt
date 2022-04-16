const usersController = {}

const User = require("../models/user.model");

usersController.getUser = async (req, res) => {
    const loginData = req.body;
    const userInfo = await User.findOne({ email: loginData.email });
    if (userInfo !=  null) {
        res.send("User Brought:" + userInfo);
    }else{
        res.send("User Does not exist");
    }
    console.log(userInfo);
    
}
usersController.createUser = async (req, res) => {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    res.send("User Created");
}

module.exports = usersController;