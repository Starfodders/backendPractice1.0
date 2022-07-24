module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router()
//create a new tutorial, post as its creating new element
router.post("/", tutorials.create); 
//retrieve all tutorials
router.get("/", tutorials.findAll);
//retrieve all published tutorials
router.get("/published", tutorials.findAllPublished);
//retrieve single tutorial with id
router.get("/:id", tutorials.findOne);
router.put("/:id", tutorials.update);
router.delete("./id", tutorials.delete);
router.delete("/", tutorials.deleteAll);
app.use("/api/tutorials", router); //unsure of this
};