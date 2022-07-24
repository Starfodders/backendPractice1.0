const express = require("express");
const cors = require("cors"); //
const app = express();
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {  //queries db, dropping a table before re-creating it if it exists
    console.log("Drop and re-sync db")
});

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions)); //parses requests of content type - application/JSON
app.use(express.json()); //parses requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); //allows parsing of values of any type, not just strings



//simple route, what is sent to you when you load root page
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Bezkoder App mydude" });
});
//set port, listen for requests
const PORT = process.env.PORT || 8080; //either local port as detected by process.env or the value of 8080;
require("./app/routes/tutorial.routes")(app); //what is the 2nd app for?
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})