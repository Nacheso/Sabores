require("dotenv").config();
const express = require('express');
const {checkToken} = require('./middlewares');
const mongoose = require("mongoose");
const cors = require("cors")
const PassRouter = require("./Api/PassRouter");
const CoctelesRouter = require("./Api/CoctelesRouter");
const CategoriaRouter = require("./Api/CategoriaRouter");
const SubcategoriaRouter = require("./Api/SubcategoriaRouter");
const UserRouter = require("./Api/UserRouter");
// const FavoritoRouter=require("./Api/FavoritoRouter");

const { PORT, URI } = process.env;

// habría que ocultar el puerto.

const app = express ();

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log("¡Sabores conectada!")
    });

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use("/Api/PassRouter", PassRouter);
app.use("/Api/CoctelesRouter", CoctelesRouter);
app.use("/Api/CategoriaRouter", CategoriaRouter);
app.use("/Api/SubcategoriaRouter", SubcategoriaRouter);
app.use("/Api/UserRouter", UserRouter);
// app.use("/Api/FavoritoRouter",FavoritoRouter);

app.listen(PORT,()=> { console.log(`listening on port ${PORT}`);});

//comillas inversas como acento