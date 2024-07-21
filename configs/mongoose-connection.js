const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://tknautomation:Ankesh%40123@cluster0.pyk16gp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/userdetails`)

let db=mongoose.connection;

db.once("open", function() {
    console.log("connected");
})

module.exports = db;