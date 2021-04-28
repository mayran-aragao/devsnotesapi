const express = require('express');

const NoteController = require ('./controllers/NoteController');

const router = express.Router();

router.get('/notes', NoteController.all); 
router.get('/note/:id', NoteController.one);
router.post('/note', NoteController.new);
router.put('/note/:id', NoteController.edit);
router.delete('/note/:id', NoteController.delete);

module.exports = router;