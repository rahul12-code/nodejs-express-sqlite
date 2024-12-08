
const Tutorial = require("../models/tutorial.model");

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: "Title cannot be empty!" });
  }

  const tutorial = { title: req.body.title, description: req.body.description, published: req.body.published || 0 };
  Tutorial.create(tutorial, (err, result) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send({ id: result.id, ...tutorial });
  });
};

exports.findAll = (req, res) => {
  Tutorial.findAll((err, rows) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(rows);
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.findById(id, (err, row) => {
    if (err) res.status(500).send({ message: err.message });
    else if (!row) res.status(404).send({ message: `Tutorial with id ${id} not found` });
    else res.send(row);
  });
};

exports.findByTitle = (req, res) => {
    const title = req.query.title;
    Tutorial.findByTitle(title, (err, rows) => {
      if (err) res.status(500).send({ message: err.message });
      else res.send(rows);
    });
};

exports.findPublished = (req, res) => {
    Tutorial.findPublished((err, rows) => {
        if (err) res.status(500).send({ message: err.message });
        else res.send(rows);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const tutorial = { title: req.body.title, description: req.body.description, published: req.body.published };
  Tutorial.update(id, tutorial, (err) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send({ message: `Tutorial with id ${id} updated successfully` });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Tutorial.delete(id, (err) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send({ message: `Tutorial with id ${id} deleted successfully` });
  });
};

exports.deleteAll = (req, res) => {
    Tutorial.deleteAll((err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.send({ message: "All tutorials deleted successfully" });
    });
};
  

