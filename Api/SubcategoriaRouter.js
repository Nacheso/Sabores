const express = require("express");
const Subcategoria = require("../Models/Subcategoria");
const SubcategoriaRouter = express.Router();

SubcategoriaRouter.get("/", (req, res) => {
    Subcategoria.find({})
        .then(subcategorias => {
            res.json({
                succes: true,
                subcategorias
            });
        });
});

// una subcategoria por su id
SubcategoriaRouter.get("/find/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const Subcategoria = await Subcategoria.findById(id);

        if (!Subcategoria) {
            return res.status(404).json({
                succes: false,
                message: "Necesaria la subcategoria"
            });
        }

        return res.json({
            succes: true,
            subcategoria
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

// Crear subcategoria nueva
SubcategoriaRouter.post("/", async (req, res) => {

    try {
        
        const { name, photo } = req.body;

        const subcategoria = new Subcategoria({
            name,
            photo,
        });

        const newSubcategoria = await subcategoria.save();

        return res.status(201).json({
            success: true,
            user: newSubcategoria
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

// borrar una subcategoria
SubcategoriaRouter.delete("/delete", async (req, res) => {

    try {

        const { id } = req.body; // veamos que pasa con el id de mongo

        const borrarSubcategoria = await Subcategoria.findByIdAndDelete(id);

        return res.status(201).json({
            success: true,
            Comment: "Subcategoria borrada",
            user: borrarSubcategoria
        
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

module.exports = SubcategoriaRouter;

//nos devolverá todas las subcategorias.