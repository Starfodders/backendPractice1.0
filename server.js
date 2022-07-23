const express = require("express");
const cors = require("cors"); //
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions)); //parses requests of content type - application/JSON
app.use(express.json()); //parses requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); //allows parsing of values of any type, not just strings
//simple route, what is sent to you when you load root page
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Bezkoder App" });
});
//set port, listen for requests
const PORT = process.env.PORT || 8080; //either local port as detected by process.env or the value of 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})