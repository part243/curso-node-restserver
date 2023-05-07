
require('dotenv').config();
//llama servidor
const Server = require('./models/server');

//inicializar servidor constructor__server
const server = new Server();
//inicializar servidor en puerto configurado en dotenv caso contrario con el que se envie
server.listen(null);





//obtener variable port desde dotenv y configurar puerto
