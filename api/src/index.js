const express = require('express');
const routes = require('./routes');
const app = express();
var cors = require('cors')


app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(routes);

app.listen(8080);