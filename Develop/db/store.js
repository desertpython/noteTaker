const util = require("util");
const fs = require("fs");

const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);

//call util package "util"
//call the util method promifisy() which is a callback
//call fs to write file

const writeFileAsync = util.promisify(fs.watchFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes(){
    return this.read().then(notes =>{
        let parsedNotes;
        try {
            parsedNotes = ().concat
        }
        finally{}

    })}
    addNote(){
    const {title , text} = note
    if (!title||!text){
        throw new Error("Note 'title' and 'text' cannot be blank!")
    }
    const newNote = {title , text, id:uuidv1()};
    return this.getNotes()
    .then(notes => [...notes, newNote])
    removeNote();
}};
// more needed for class Store