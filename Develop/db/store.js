const util = require("util");
const fs = require("fs");

const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readFile);

//call util package "util"
//call the util method promifisy() which is a callback
//call fs to write file

const writeFileAsync = util.promisify(fs.writeFile);

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
            parsedNotes = [].concat(JSON.parse(notes));
        }
        catch (err) {
            parsedNotes = [];
          }
    })}
    addNote(note) {
        const { title, text } = note
        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank!")
        }
        const newNote = { title, text, id: uuid };
        return this.getNotes()
            .then(notes => [...notes, newNote])
    }
};
// more needed for class Store

module.exports = new Store;