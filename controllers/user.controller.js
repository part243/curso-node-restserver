const { response , request} = require('express'); //obtener el response de express

const usuariosGet = (req = request,res = response) => {   
    const {categoria, orden='ASC', limit} = req.query;

    res.json({
        "ok": true,
        "msg": "Hola mundo desde express controlador -",
        categoria,
        orden,
        limit
    });
}

const usuariosPost = (req,res = response) => {
    res.json({
        "ok": true,
        "dat": req.body,
        "msg": "post API - controlador"
    });
}

const usuariosPut = (req,res = response) => {
    const id = req.params.id;
    
    res.json({
        "ok": true,
        //regresa el id del body
        "dat": req.body.id,
        "msg": "put API"
    });
}

const usuariosDelete = (req,res = response) => {
    res.json({
        "ok": true,
        "datRAW": req.body.id,
        "datParams": req.params.id,
        "msg": "delete API"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete

};