const mongoose = require ("mongoose");

const CategoriaSchema = new mongoose.Schema ({
    name: {type: String},
    photo: {type: String}
});

module.exports = Categoria = mongoose.model("Categoria", CategoriaSchema);