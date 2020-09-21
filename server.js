// Dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");

// Express setup
const app = express();
const PORT = process.env.PORT || 3000;

// Data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JSON Notes object
const notes = [];

fs.readFile("./db/db.json", function(error, data){
    if (error){
        console.log(error);
    } else {
        const saved = JSON.parse(data);
        notes.push(saved);
    }
});

// API Routes
app.get("/api/notes", function(req, res){
    res.json(notes);
});

// HTML Routes
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Server listens on the port when started
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});