const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId;
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
    },
    body:{
        type:String,
        trim:true,
    },
});

module.exports = mongoose.model('NoteService', noteSchema);