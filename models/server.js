require('colors');
//proteccion para el servidor superficial
const cors = require('cors');
const express = require('express');
// ruta de error
const errorHandler = require('../routes/any.routes');

class Server{
    constructor(){
        //inicializar express
        this.app = express();
        this.port = process.env.PORT || 3000;
        //rutas disponibles en la app
        this.userPath = '/api/usuarios';
        // CONFIGRURAR APP PARA QUE LEA JSON
        this.app.use(express.json()); //conifura express apra capturar json
       // this.app.use(express.json());  //conifura express apra capturar json
        this.middlewares();  //Middlewares public static
        this.routes(); //configura rutas

       
    }

    //middlewares
    middlewares(){
        //cors
        this.app.use(cors()); //configurar cuando se tenga el front-end
        //directorio público
        this.app.use(express.static('public'));
    }
 

    //rutas
    routes(){
        this.app.use(this.userPath, require('../routes/user.routes')); //llama rutas de usuarios y las configura en para acceso /api/usuarios
        this.app.use('*',errorHandler); //validar rutas que no existen
    }

    //listen
    listen(port){
        this.app.listen(port?port:this.port, () => {
            // imprime un rectangulo donde ira lo siguiente console
            console.log('==============================================================='.yellow)
            console.log(`| Servidor corriendo en puerto ${port?port:this.port}`.yellow);
            console.log(`| CORS-enabled web server listening on port ${port?port:this.port}`);
            // imprime userPath url
            console.log(`| Ruta de usuarios: http://localhost:${port?port:this.port}${this.userPath}`.green);
            console.log('==============================================================='.yellow)
        });
    }

}

module.exports = Server;