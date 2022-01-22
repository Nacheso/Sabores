const express = require("express");
const User = require("../Models/User");
const PassRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { checkToken } = require("../middlewares");
const { JWT_SECRET } = process.env

PassRouter.post("/signup", async (req, res) => {

    try {

        const { name, nick, telefono, password, email, favoritos } = req.body;
        const hash = await bcrypt.hash(password, 10)
        const user = new User({
            name,
            nick,
            telefono,
            password: hash,
            email,
            favoritos
        });

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "Error en email o password"
            });
        }

        const foundUser = await User.findOne({ email });

        if (foundUser) {
            return res.status(403).json({
                success: false,
                message: "Este mail ya existe"
            })
        }

        if (password.length < 9) {
            return res.status(403).json({
                success: false,
                message: "Password mínimo 9 carácteres"
            });

        }

        const newUser = await user.save();

        return res.status(201).json({
            success: true,
            user: newUser
        });

    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

PassRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Error de credenciales en el mail"
        });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(401).json({
            success: false,
            message: "Error de credenciales en el pas"
        });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "Stack" });

    return res.json({
        success: true,
        message: "Estás login",
        token: token
    });

    //CREAR TOKEN

});

module.exports = PassRouter;

