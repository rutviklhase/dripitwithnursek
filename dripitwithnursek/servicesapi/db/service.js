const mongoose = require ('mongoose');
const serviceSchema = new mongoose.Schema({
    img:String,
    price:String,
    description:String
});

module.exports = mongoose.model("services",serviceSchema);