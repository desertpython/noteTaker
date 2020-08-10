const path = require("path");
const router = require("express").Router();

router.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
}) //use / instead of * if an error occurs




module.exports = router;