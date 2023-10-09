const catchError = require("../utils/catchError");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
};

// Register user
const create = catchError(async(req, res) => {

    const { firstName, lastName, email, password, phone } = req.body; 
    // Validation 
    if ( !firstName || !lastName || !email || !password || !phone ) {
        return res.status(400).json({
            created: false,
            msg: "Please fill in all required fields"
        })
    }
    // Check if user passwors is valid
    if ( password.length < 6 ) {
        return res.status(400).json({
            created: false,
            msg: "password is less than 6 characters"
        })
    }
    // Check if user email already exists
    const userExists = await User.findOne({ email });
    if ( userExists ) {
        return res.status(400).json({
            created: false,
            msg: "Email has already been registered"
        });
    }
    // Encrypt password before saving to DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( password, salt );

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone
    });
    return res.status(201).json(user);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if(!user) return res.status(404);
    return res.json(user);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    delete req.body.password;
    delete req.body.email;
    const user = await User.update(
        req.body,
        { where: { id }, returning: true }
    );
    if(user[0] === 0) return res.status(404);
    return res.json(user[1][0]);
});

const login = catchError(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }});
    if(!user) return res.status(401).json({ message: "Invalid credentials" });
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign(
        { user },
        process.env.TOKEN_SECRET,
        { expiresIn: "1d" }
    )
    return res.json({user, token});
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}