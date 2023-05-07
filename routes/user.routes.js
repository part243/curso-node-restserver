const {Router} = require('express'); //desestructuracion de express para solo usar Router
const router = Router(); //inicializar router
const {usuariosGet, usuariosPost, usuariosPut, usuariosDelete} = require('../controllers/user.controller');


router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete);

module.exports = router;