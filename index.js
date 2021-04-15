const express = require("express");
const app = express();
const con = require("./model/db");
const Question = require("./model/questions");
const routes = require("./routes/admin");

con.authenticate()
    .then(() => {
        console.log("Successfully connected to mySql");
    })
    .catch((err) => {
        console.log("could not connect to mysql error: " + err);
    });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log("Connected to 8082 port");
});
