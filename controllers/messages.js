const pool = require("../models");

exports.getAllMessages = async function (req, res) {
  const all = await pool.query("SELECT * from message");
  const rows = all.rows;
  res.json(rows);
};

exports.getOneMessage = async function (req, res) {
  const { id } = req.params;
  const single = await pool.query("SELECT * from message WHERE id=$1", [id]);
  const rows = single.rows;
  if (!rows.length) {
    return res.status(404).send("Message with this ID does not exist");
  }
  res.json(rows);
};

exports.createMessage = async function (req, res) {
  const { text, date, id_user } = req.body;
  const message =
    "INSERT INTO message (text, date, id_user) VALUES ($1, $2, $3) RETURNING *";
  const values = [text, date, id_user];
  const result = await pool.query(message, values);
  res.json({ success: true });
};
