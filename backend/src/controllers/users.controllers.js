const usersController ={}

usersController.getUser = (req,res)=>{
    res.send("User Brought");
}
usersController.createUser=(req,res)=>{
    res.send("User Created");
}

module.exports=usersController;