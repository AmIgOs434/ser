const Router = require('express')

const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


// router.get('/',checkRole('ADMIN'), deviceController.create)
router.get('/getSchet/:id', deviceController.getSchet)
router.get('/getUser/:login', deviceController.getUser)
router.post('/login', deviceController.login)

module.exports = router