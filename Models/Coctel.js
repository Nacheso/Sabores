const mongoose = require ("mongoose");

const CoctelSchema = new mongoose.Schema ({
    id: {type: String},
    name: {type: String},
    photo: {type: String},
    categoria: [{type:mongoose.Types.ObjectId, ref: "Categoria"}],
    subcategoria: {type:mongoose.Types.ObjectId, ref: "Subcategoria"},
    ingredientes: [{type: String}], // poner como categoria.
    alcohol: Boolean,
});

module.exports = Coctel = mongoose.model("Coctel", CoctelSchema);