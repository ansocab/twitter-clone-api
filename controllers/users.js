const pool = require("../models");

exports.getAllUsers = async function (req, res) {
  const all = await pool.query("SELECT * from twitteruser");
  const rows = all.rows;
  res.json(rows);
};

exports.getOneUser = async function (req, res) {
  const { id } = req.params;
  const single = await pool.query("SELECT * from twitteruser WHERE id=$1", [
    id,
  ]);
  const rows = single.rows;
  res.json(rows);
};

exports.getOneUserMessages = async function (req, res) {
  const { id } = req.params;
  const single = await pool.query("SELECT * from message WHERE id_user=$1", [
    id,
  ]);
  const rows = single.rows;
  res.json(rows);
};

exports.getRandomUser = async function (req, res) {
    const random = await pool.query("SELECT * FROM twitteruser ORDER BY RANDOM() LIMIT 1");
    const row = random.rows;
    res.json(row);
};

exports.createUser = async function (req, res) {
  const { name, email, password } = req.body;
  const user =
    "INSERT INTO twitteruser (name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, email, password];
  const result = await pool.query(user, values);
  res.json({ success: true });
};
