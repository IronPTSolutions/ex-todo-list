const express = require("express");
const logger = require("morgan");

// Creamos la aplicación servidor ejecutando express como una función
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }));

require("./config/db.config");
require("./config/hbs.config");

const routes = require("./config/routes.config");
app.use("/", routes);

const port = 3000;
app.listen(port, () => console.log(`Application listening at port ${port}`));
