const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mcrypt").then((db) => console.log("Connected to database")).catch((err) => console.error(err));

