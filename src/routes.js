const express = require('express');

const NoteController = require ('./controllers/NoteController');

const router = express.Router();

router.get('/ping',NoteController.ping );

router.get('/notes', NoteController.all);
/*router.get('/note/:_id', NoteController.one);
router.post('/note', NoteController.new);
router.put('/note/:_id', NoteController.edit);
router.delete('/note/:_id', NoteController.delete);*/

module.exports = router;