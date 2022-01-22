const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String},
    nick: {type: String},
    telefono: {type: Number},
    password: {type: String},
    email: {type: String},
    favoritos: [{type:mongoose.Types.ObjectId, ref: "Coctel"}]
})

module.exports = User = mongoose.model("User", userSchema);