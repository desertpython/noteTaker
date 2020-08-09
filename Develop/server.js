const path = require('path')
const fs = require('fs')
const express = require('express')

const app = express();
const PORT = 3001;
const uuid = require('uuid');
const db = require("./db/db");

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
app.get('/api/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, db))
})
//Receive new note to save on req.body, add to db.json, then return new route
app.post('/api/notes', (req, res)=> {
    //write to file 'fs'
    res.send(req.body)
    fs.writeFile( 'db', JSON.stringify(req.body), (err)=>{
        if (err) 
        console.log(err); 
        else { 
        console.log("File written successfully\n"); 
        console.log("The written has the following contents:"); 
        console.log(fs.readFileSync('db', "utf8")); 
    } 
})})

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  })

  //you want to do is read db,json and add the new note to the list and rewrite the file with the updated list
  //you'll want to read the file and find the appropriate note with the matching id