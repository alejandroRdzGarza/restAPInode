'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cuestionarioRoutes = require('./routes/cuestionarioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const rutinaRoutes = require('./routes/rutinaRoutes');
const estadisticasRoutes = require('./routes/estadisticasRoutes');
const ejercicioRoutes = require('./routes/ejercicioRoutes');
const dietaRoutes = require('./routes/dietaRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const alimentoRoutes = require('./routes/alimentoRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', cuestionarioRoutes.routes);
app.use('/api', usuarioRoutes.routes);
app.use('/api', rutinaRoutes.routes);
app.use('/api', estadisticasRoutes.routes);
app.use('/api', ejercicioRoutes.routes);
app.use('/api', dietaRoutes.routes);
app.use('/api', categoriaRoutes.routes);
app.use('/api', alimentoRoutes.routes);



app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));