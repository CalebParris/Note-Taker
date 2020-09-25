// Dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");
const { json } = require("express");

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
// Grabs the data from db.json file that we stored above and puts it in the /api/notes route. Thus allowing the HTML to get the info and display it on the page
app.get("/api/notes", function(req, res){
    return res.json(notes);
});

// Takes the input data from the html and adds it to the db.json file
app.post("/api/notes", function(req, res){
    let newNote = req.body;

    notes.push(newNote);

    // Adds an ID to each of the objects in the db.json file
    for (let i = 0; i < notes.length; i++){
        notes[i].id = i + 1;
    }

    // Writes the new note to the db.json file, so that the saved note will stay even if the server is restarted
    fs.writeFile("./db/db.json", JSON.stringify(notes), function(error){
        if (error){
            console.log(error);
        }
    });

    return res.json(notes);
});

// Filters out the notes with the matching ID and updates the db.json file with only the non-matching notes, then displays it on the HTML
app.delete("/api/notes/:id", function(req, res){
  notes = notes.filter((note) => note.id != req.params.id);
  
  fs.writeFile("./db/db.json", JSON.stringify(notes), function(error){
        if (error){
            console.log(error);
        }
    });
  return res.json(notes);
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