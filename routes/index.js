const express = require('express')
const visitanteRouter = require('./visitante-router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router) // path global

  router.use('/visitante', visitanteRouter) // importando router: visitante-router
}

module.exports = routerApi;
