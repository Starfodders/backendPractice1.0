const db = require("../models"); //makes all of /models available
const Tutorial = db.tutorials; //we declared db.tutorials in index.js
const Op = db.Sequelize.Op;

//Create & Save new Tut
exports.create = (req, res) => {
    if (!req.body.title) { //validate status
        res.status(400).send({
        message: "Content can't be empty!"
        });
        return;
    }
    const tutorial = { //create tutorial
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false //if true, post published
    };
    Tutorial.create(tutorial)
        .then(data => {
            res.send(data); //if good, send data which is tutorial in this case
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error while creating tutorial."
            });
        });

};
//locate all tutorials in DB
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: {[Op.like]: `%{title}%`}} : null; //what?
    Tutorial.findAll({where:condition})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while finding tutorials."
            });
        });
};
//find single entry by ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id) //primary key
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send ({
                    message: `Cannot find tutorial with the id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving tutorial with id=" + id
            });
        })
    };
//update tutorial by ID in req
exports.update = (req, res) => {
    const id = req.params.id;
    Tutorial.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) { //believe above returns a boolean?
                res.send({
                    message: "Tutorial was updated successfully!"
                });
            }else {
                res.send({
                    message: `Cannot update id=${id} possibly because it doesn't exist or req.body is empty`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating tutorial with id" + id
            });
        });
};
//delete tutorial by ID in req
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.destroy({
        where :{id: id}
    })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Deletion successful."
            })
            }else {
                res.send({
                    message: `Cannot delete tutorial with id=${id} because it may not exist!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting tutorial with id" + id
            });
        });
};
//delete all from DB
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.send({message: `${nums} Tutorials were deleted succesfully!`})
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials"
            });
        });
};
//find all in DB
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({where: {published:true}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

//create CRUD functions to be exported 
//what does Op mean?