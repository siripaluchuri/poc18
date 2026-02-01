const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req, res) => {
    res.send(`Hello from POC18 Server, ENV - ${NODE_ENV}, added feature 1`);
})

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`POC18 Server Running on PORT ${PORT}`);
})