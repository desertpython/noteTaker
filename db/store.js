const util = require("util");
const fs = require("fs");

const {
    v4: uuidv4
} = require('uuid');

const readFileAsync = util.promisify(fs.readFile);

//call util package "util"
//call the util method promifisy() which is a callback
//call fs to write file

const writeFileAsync = util.promisify(fs.writeFile);

// S

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes
        })
    }
    addNote(note) {
        const {
            title,
            text
        } = note
        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank!")
        }
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);

    }
};


module.exports = new Store;

// to delete find note by id 