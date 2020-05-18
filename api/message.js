const router = require('express').Router();
const messageCtrl = require('../controllers/message');

router.route('/message').get(messageCtrl.getMessage);

router.route('/message').post(messageCtrl.postMessage);

router.route('/message').put(messageCtrl.putMessage);

router.route('/message').delete(messageCtrl.deleteMessage)

module.exports = router;