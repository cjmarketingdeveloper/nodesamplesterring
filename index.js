const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

//Connect locally
mongoose.connect(process.env.MONGO_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(() =>{
     console.log("Localhost Connection done")
 })
 
 //Routes
app.use("/", function(req, res){
    res.send("Hello World");
});

/////////////--
const port = process.env.port || 8780;
 app.listen( port, () => {
    console.log(`Sterring listneing on port ${port}!`)
});