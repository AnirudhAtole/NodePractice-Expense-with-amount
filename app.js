const express = require('express');
const bodyParser = require('body-parser');

var Cors = require('cors');

const app = express();

const ProductRoutes = require('./routes/Product');
const sequelize = require('./utils/database');

app.use(bodyParser.json({extended:false}));
app.use(ProductRoutes);
app.use(Cors());

sequelize.sync()
.then(()=>{
    app.listen(7000);
})