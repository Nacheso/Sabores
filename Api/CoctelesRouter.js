const express = require("express");
const Coctel = require("../Models/Coctel");
const CoctelesRouter = express.Router();

// Encontrar cocteles
CoctelesRouter.get("/", async (req, res) => {
    try {
        const cocteles = await Coctel.find({});
        return res.json({
            succes: true,
            cocteles
        });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            sucess: false,
            message: err.message
        });
    }

});

// un coctel por su id
CoctelesRouter.get("/find/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const coctel = await Coctel.findById(id);

        if (!coctel) {
            return res.status(404).json({
                succes: false,
                message: "No hay coctel con esta Id"
            });
        }

        return res.json({
            succes: true,
            coctel
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

// crear un coctel nuevo
CoctelesRouter.post("/", async (req, res) => {

    try {

        const { id, name, photo, categoria, subcategoria, ingredientes, alcohol } = req.body;

        const coctel = new Coctel({
            id,
            name,
            photo,
            categoria,
            subcategoria,
            ingredientes,
            alcohol
        });

        const newCoctel = await coctel.save();

        return res.status(201).json({
            success: true,
            coctel: newCoctel
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

//nos devolverá todos los cocteles.
CoctelesRouter.get("/filtros", async (req, res) => {

    try {
        let query = {};
        if (req.query.alcohol) query.alcohol = req.query.alcohol;
        if (req.query.categoria) query.categoria = { "$all": req.query.categoria };
        // {req.query.categoria}
        if (req.query.subcategoria) query.subcategoria = req.query.subcategoria;

        let filter = await Coctel.find(query)
            .populate("categoria")
            .populate("subcategoria")

        return res.json({
            success: true,
            filter
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: err.message || err._message
        });
    }
});

// FILTROS PARA ENSEÑAR NUESTROS REFRESCOS, MIXERS, COMBINADOS O COCTELES.

module.exports = CoctelesRouter