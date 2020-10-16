const router = require("express").Router();
const Store = require("../db/store");

router.get("/notes", function(req, res){
    Store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
})

router.post("/notes", (req, res) => {
  console.log("hey fam");
  console.log(req.body);
    Store
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch(err => res.status(500).json(err));
  });
// router.delete("/notes/:id"); //incase of the delete


module.exports = router;