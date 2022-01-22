const mongoose = require ("mongoose");

const SubcategoriaSchema = new mongoose.Schema ({
    name: {type: String},
    photo: {type: String},
});

module.exports = Subcategoria = mongoose.model("Subcategoria", SubcategoriaSchema);