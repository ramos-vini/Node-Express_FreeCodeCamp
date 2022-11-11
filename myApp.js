let express = require('express');
let app = express();

console.log("Hello World");

// app.get("/", function (req, res) {
//     res.send('Hello Express');
// });

app.get("/", function (req, res) {
    res.send(`${__dirname}/views/index.html`);
});

app.use(`${__dirname}/public`, express.static(`${__dirname}/public/style.css`));
































 module.exports = app;
