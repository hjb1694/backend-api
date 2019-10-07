const router = require('express').Router();
const ctrl = require('../controllers/auth');
const registerValidation = require('../validation/register');

router.post('/register', registerValidation, ctrl.registerController);
router.post('/login', ctrl.loginController);

module.exports = router;