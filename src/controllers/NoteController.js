const mongoose = require('mongoose');
const Note =  mongoose.model('NoteService');

exports.all = async(req,res) => {
    let json = {
        error:'',
        result:[]
    };

    const note = await Note.find();
    json.result = note;
    if(json.result.length == 0){
        json.error = 'Não há nenhuma nota!';
    }
        res.json(json);
};
exports.one = async(req,res) => {
    let json = {
        error:'',
        result:[]
    };
    let id = req.params.id;
    const note = await Note.findOne({_id: id});
    if(note){
        json.result = note;
    }else{
        json.error = 'Nota não encontrada!';
    }
        res.json(json);
};

exports.new = async (req,res) => {
    let json = {error:'',result:{}};
    
    if(req.body.title || req.body.body){
        const note = new Note(req.body);
        await note.save();
        json.result = note;
    }else{
        json.error = 'Campos não digitados!';
    }
    
    res.json(json);
};

exports.edit = async(req,res) => {
    let json = {
        error:'',
        result:[]
    };
    let id = req.params.id;
    if(id && (req.body.title || req.body.body)){
        const note = await Note.findOneAndUpdate({_id: id},req.body,{new:true,runValidators:true});
        json.result = note;
    }else{
        json.error = 'Nota não alterada!';
    }
        res.json(json);
};
exports.delete = async(req,res) => {
    let json = {
        error:'',
        result:[]
    };
    let id = req.params.id;
    const note = await Note.findOneAndDelete({_id: id});
    
        res.json(json);
};