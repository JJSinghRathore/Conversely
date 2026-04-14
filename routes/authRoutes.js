const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { register, login, profile } = require('../controllers/authController');
const { registerValidator, loginValidator } = require('../validators/authValidator');

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);
router.get('/profile', auth, profile);

module.exports = router;
