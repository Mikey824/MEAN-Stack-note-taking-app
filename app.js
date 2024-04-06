const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const notesRoutes = require("./routes/notes");

const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://Mayank:Mayank@cluster0.0iddkni.mongodb.net/Notes-taking-webapp?retryWrites=true&w=majority")
    .then(() => {
        console.log('connection successful to MongoDB');
    }).catch((error) => {
        console.log('connection failed to database:', error);
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
    console.log("server is running on Port 3000");
});
 