"use strict";

// const fs = require('fs');
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const data = require("./api/tickets.json");

const app = express();


// let nextId = 7;
app.use(cors());

app.set("port", (process.env.PORT || 3004));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.set("port", (process.env.PORT || 3004));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.get("/api/tickets", (req, res) => {
  res.send(data.tickets);
});

app.listen(app.get("port"), () => console.log(`Server is listening: http://localhost:${app.get("port")}`));