const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const EXPRESS_PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
    res.json({"success": true});
});

app.listen(EXPRESS_PORT, () => {
    console.log(`Express server on port ${EXPRESS_PORT}`)
});