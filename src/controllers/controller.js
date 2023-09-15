const db = require("../models");
const Person = db.persons;
const Op = db.Sequelize.Op;

exports.addPerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty",
    });
    return;
  }

  const person = {
    name: req.body.name,
  };

  Person.create(person)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while creating Person",
      });
    });
};

exports.getPersonById = (req, res) => {
  const id = req.params.user_id;

  Person.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Person with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retreiving Person with id = " + id,
      });
    });
};

exports.updatePerson = (req, res) => {
  const id = req.params.user_id;

  Person.update({name: req.body.name}, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Person was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Person with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Person with id= ${id}`,
      });
    });
};

exports.deletePerson = (req, res) => {
  const id = req.params.user_id;

  Person.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Person was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Person with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Person with id=" + id,
      });
    });
};
