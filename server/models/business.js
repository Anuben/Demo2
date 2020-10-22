let mongoose = require('mongoose');

//create a model class
let businessModel = mongoose.Schema({
    name: String,
    email: String,
    //contactno: String,
    phone: String

},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);