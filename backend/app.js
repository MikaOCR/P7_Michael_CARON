const express = require("express");

const userRoutes = require("./routes/user");

const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "groupomania",
});
connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err}`);
  } else {
    console.log("Connecté à la base de donnée - groupomania");
    console.log(`connected as id ${connection.threadId}`);
  }
});

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //accéder à notre API depuis n'importe quelle origine
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); //ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); //envoyer des requêtes avec les méthodes mentionnées
  next();
});

app.use(express.json());

app.use("/api", userRoutes);

module.exports = app;

