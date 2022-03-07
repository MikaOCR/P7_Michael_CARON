const axios = require('axios').default;

axios.defaults.baseURL = 'http://localhost:5000';


//ici c'est pour ne pas avoir a écrire l'url de l'api sur chaque request. (ne pas oublier de l'importer dans main.js)