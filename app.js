const express = require('express');
const app = express();
const port = 4500;

//configuration

app.use(express.json());

app.get("/", (req ,rsp) => {
    rsp.json({message :})
})