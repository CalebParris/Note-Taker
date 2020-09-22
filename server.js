// Dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");

// Variables
let notes;

// Express setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Reads the db.json file and stores the contents into the notes variable
fs.readFile("./db/db.json", function(error, data){
    if (error){
        console.log(error);
    } else {
        notes = JSON.parse(data);
    }
});

// API Routes
app.get("/api/notes", function(req, res){
    return res.json(notes);
});

app.post("/api/notes", function(req, res){
    let newNote = req.body;

    notes.push(newNote);
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