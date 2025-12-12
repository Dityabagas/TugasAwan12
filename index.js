const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Halo dari Vercel!</h1>
    <p>Aplikasi ini dibuat menggunakan Node.js dan Express.</p>
    <p>Salam Hangat dari Multoholic</p>
  `);
});

module.exports = app;
