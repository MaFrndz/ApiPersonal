const express = require('express');
const router = express.Router();
const LogicRegister = require('../service/logic-register');

router.post('/registrar-visita', (req, res) => {
  const body = req.body;
  const service = new LogicRegister();
  var msj = '';
  // debe imprimir , no devolverlo
  try{
    if(service.register(body.data)) msj = 'Procesado correctamente';
    else msj = 'Solo se permite ingresar: W(mujeres )M(Varones) C(niños)'
  }catch(ex){
    msj = 'Ocurrio un problema' + ex
  }

  res.json({
    message: msj
  })

})

module.exports = router;
