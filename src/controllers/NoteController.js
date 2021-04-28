const mongoose = require('mongoose');
const Notes =  mongoose.model('NoteService');

exports.ping = (req, res) => {
    res.json({pong:true});
};

exports.all = async(req,res) => {
    let json = {result:[]};

        let notes = await Notes.find();
        for(let i in notes){
            json.result = notes;
        }
        
        
        console.log(notes);
};