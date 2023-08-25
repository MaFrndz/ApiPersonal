const express = require('express');
const routesApi = require('./routes')

const app = express();
const port = 666;

app.use(express.json()); // middleware :. en formato json

routesApi(app)

// inicando servidor
app.listen(port, () => {

})

