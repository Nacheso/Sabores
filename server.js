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


    const whitelist = [
        // Allow domains here
        'http://localhost:3000/',
        'http://localhost:3001/',
        'http://localhost/',
        'http://127.0.0.1:3001/',
        'http://85.60.104.68:3001/'
        
      ]
      const corsOptions = {
        origin(origin, callback) {
          const originIsWhitelisted = whitelist.indexOf(origin) !== -1
          callback(null, originIsWhitelisted)
        },
        credentials: true
      }
      //aplicanco el cors de forma global
      // si comento la siguiente línea sigue funcionando ¡¡¡ TENDRÍA QUE CAERSE !!! pero sigue funcionando la ruta http://localhost:3000/clientes
      app.use(cors()) // sin cors option funciona, aunque se podrá meter todo el mundo whitelist de adorno y corsOption también
      
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