
const db = require("../config/db.config");

const Tutorial = {
  create: (tutorial, callback) => {
    const sql = `INSERT INTO tutorials (title, description, published) VALUES (?, ?, ?)`;
    db.run(sql, [tutorial.title, tutorial.description, tutorial.published], function (err) {
      callback(err, { id: this.lastID });
    });
  },

  findAll: (callback) => {
    const sql = `SELECT * FROM tutorials`;
    db.all(sql, [], callback);
  },

  findById: (id, callback) => {
    const sql = `SELECT * FROM tutorials WHERE id = ?`;
    db.get(sql, [id], callback);
  },

  findByTitle: (title, callback) => {
    const sql = `SELECT * FROM tutorials WHERE title LIKE ?`;
    db.all(sql, [`%${title}%`], callback);
  },

  findPublished: (callback) => {
    const sql = `SELECT * FROM tutorials WHERE published = 1`;
    db.all(sql, [], callback);
    },

  update: (id, tutorial, callback) => {
    const sql = `UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?`;
    db.run(sql, [tutorial.title, tutorial.description, tutorial.published, id], callback);
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM tutorials WHERE id = ?`;
    db.run(sql, [id], callback);
  },

  deleteAll: (callback) => {
    const sql = `DELETE FROM tutorials`;
    db.run(sql, [], callback);
  }  
};

module.exports = Tutorial;
