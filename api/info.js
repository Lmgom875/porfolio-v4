const router = require('express').Router();
const infoCtrl = require('../controllers/info');

router.route('/info').get(infoCtrl.getInfo);

router.route('/info').post(infoCtrl.postInfo);

router.route('/info').put(infoCtrl.putInfo);

router.route('/info').delete(infoCtrl.deleteInfo)

module.exports = router;