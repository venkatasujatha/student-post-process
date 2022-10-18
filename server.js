const {dataSource} = require("./database")
const bodyParser = require("body-parser");

const cors = require("cors");

const router = require("./router/routes");

const express = require("express");
const app = express();
require("dotenv").config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.use(cors());
//create function

async function run() {
  await dataSource.initialize();
  console.log(`datasource initialized.....`);
  //listining to server

  app.listen(process.env.port, () => {
    console.log(`server listening at port ${process.env.port}`);
  });
}

run();