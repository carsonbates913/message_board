const express = require('express');
const indexRouter = require('./routes/indexRouter.js');
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = 8080;
app.listen(PORT, ()=>{console.log(`listening on port ${PORT}!`)})