const express = require("express");
const User = require("../Models/User");
const UserRouter = express.Router();
const { checkToken } = require("../middlewares");

// todos los usuarios
UserRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({
      succes: true,
      users,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      sucess: false,
      message: err.message,
    });
  }
});

// un usuario por su id
UserRouter.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        succes: false,
        message: "Falta el usuario",
      });
    }

    return res.json({
      succes: true,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err._message || err.message,
    });
  }
});

// borrar un usuario
UserRouter.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;

    const borrarUsuario = await User.findByIdAndDelete(id);

    return res.status(201).json({
      success: true,
      Comment: "Usuario borrado",
      user: borrarUsuario,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// añadir un coctel a favoritos desde un usuario
UserRouter.put("/addfavorite/:user", checkToken, async (req, res) => {
  const { coctelId } = req.body;
  const id = req.params.user;

  try {
    const addCoctel = await User.findByIdAndUpdate(id, {
      $push: { favoritos: coctelId },
    });

    return res.status(201).json({
      success: true,
      Comment: "¡Cóctel añadido a favoritos!",
      user: addCoctel,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// borrar coctel de favoritos

UserRouter.delete("/deleteFavorito/:user", checkToken, async (req, res) => {
    
    const { coctelId } = req.body;
    const id = req.params.user;

    try {
      const removeFavorito = await User.findByIdAndDelete(id, {
        $remove: { favoritos: coctelId },
      });

      return res.status(201).json({
        success: true,
        Comment: "Favorito borrado",
        user: removeFavorito,
      });

    } catch (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);

module.exports = UserRouter;
