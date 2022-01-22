const express = require("express");
const Categoria = require("../Models/Categoria");
const CategoriaRouter = express.Router();

// todas las categorias
CategoriaRouter.get("/", (req, res) => {
    Categoria.find({})
        .then(categorias => {
            res.json({
                succes: true,
                categorias
            });
        });
});

// una categoria por su id
CategoriaRouter.get("/find/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const Categoria = await Categoria.findById(id);

        if (!Categoria) {
            return res.status(404).json({
                succes: false,
                message: "Falta la categoria"
            });
        }

        return res.json({
            succes: true,
            categoria
        });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: err._message || err.message
        });
    }
})

// Crear categoria nueva
CategoriaRouter.post("/", async (req, res) => {

    try {

        const { name, photo } = req.body;

        const categoria = new Categoria({
            name,
            photo
        });

        const newCategoria = await categoria.save();

        return res.status(201).json({
            success: true,
            categoria: newCategoria
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

// borrar una categoria
CategoriaRouter.delete("/delete", async (req, res) => {

    try {

        const { id } = req.body; // veamos que pasa con el id de mongo

        const borrarCategoria = await User.findByIdAndDelete(id);

        return res.status(201).json({
            success: true,
            Comment: "Categoria borrada",
            user: borrarCategoria

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

module.exports = CategoriaRouter;

//nos devolverá todos las categorias.