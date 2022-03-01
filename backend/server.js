const express = require('express');
const app = express();

//import package HTTP de Node.js pour créer le serveur
const http = require('http');

//importer le package pour utiliser les variables d'environnement
const dotenv = require('dotenv');
const result = dotenv.config();


//parametrage du port avec la méthode set de Express
app.set("port", process.env.PORT);

//La méthode createServer() prend en argument la fonction qui sera appelé à chaque requête recu par le serveur
const server = http.createServer(app);

//le serveur écoute les requêtes sur le port
server.listen(process.env.PORT, console.log(`écoute du port ${process.env.PORT}`));
