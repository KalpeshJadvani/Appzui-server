var mongoose = require('mongoose');
var  filedSchema = new mongoose.Schema({
    indexnumber: Number,
    pairs: String,
    result: Number,
    datetime:String,
});

var appzuiTable = mongoose.model('appzuiTable', filedSchema);

module.exports = appzuiTable;