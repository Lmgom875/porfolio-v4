const router = require('express').Router();
const repoCtrl = require('../controllers/repo');

router.route('/repo').get(repoCtrl.getRepo);

router.route('/repo').post(repoCtrl.postRepo);

router.route('/repo').put(repoCtrl.putRepo);

router.route('/repo').delete(repoCtrl.deleteRepo)

module.exports = router;