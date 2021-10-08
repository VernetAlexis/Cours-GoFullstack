const express = require('express')
const thingCtrl = require('../controllers/thing')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const router = express.Router()

router.post('/', auth, multer, thingCtrl.createThing);
router.put('/:id', auth, multer, thingCtrl.modifyThing);
router.delete('/:id', auth, thingCtrl.deleteThing);
router.get('/:id', auth, thingCtrl.getOneThing);
router.get('/', auth, thingCtrl.getAllThings);

module.exports = router;