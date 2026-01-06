const signupMode = require("../model/signup.mode");


const signupController = async (req, res) => {
    let { name, password, email } = req.body;

    let user = new signupMode({
        name,
        email,
        password
    });
    await user.save().then(()=>{
        return res.status(201).json({ message: "User signed up successfully", data: user });
    }).catch((err)=>{
        return res.status(500).json({ error: "Error signing up user", details: err });
    });
}

module.exports = { signupController };