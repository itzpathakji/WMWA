const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register a new user
router.post('/register',async (req,res) => {
    try{
        //check if user already exist then throw error

        const userExists = User.findOne({ email: req.body.email });
        if(userExists){
            throw new Error("User already exists");
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        // Save the new User

        const user = new User(req.body);
        await user.save();
        res.send({
            success: true,
            message: "User registered successfully",
        });

    }catch(error){
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// login a user
router.post("/login", async (req,res) => {
    try{
        // check the existence of user
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            throw new Error("User does not exist");
        }

        //check if password is correct
        const passwordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!passwordCorrect)
        {
            throw new Error("Invalid password");
        }
        
        // assign web token if password is correct to send it to front end
        const token = jwt.sign({ userId : user._id }, process.env.WMWA, {expiresIn: "1d"});

        res.send({
            success: true,
            data: token
        });

    }catch(error){
        res.send({
            success: false,
            message: error.message,
        });
    }
});


module.exports = router;