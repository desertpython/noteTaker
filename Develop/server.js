const path = require('path')
const fs = require('fs')
const express = require('express')

const app = express();
const PORT = 3001;

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
    res.sendFile(path.join(__dirname, './db/db.json'))
})
//Receive new note to save on req.body, add to db.json, then return new route
app.post('/api/notes', (req, res)=> {
    //write to file 'fs'
    res.send(req.body)
    fs.writeFile( './db/test.json', JSON.stringify(req.body), (err)=>{
        if (err) 
        console.log(err); 
        else { 
        console.log("File written successfully\n"); 
        console.log("The written has the following contents:"); 
        console.log(fs.readFileSync("./db/test.json", "utf8")); 
    } 
})})


//fetch request??
// fetch('/api/animals', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(animalObject)
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       alert('Error: ' + response.statusText);
//     })
//     .then(postResponse => {
//       console.log(postResponse);
//       alert('Thank you for adding an animal!');
//     });


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  })