const Router = require('express')

const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


// router.get('/',checkRole('ADMIN'), deviceController.create)

router.get('/getVideo', deviceController.getVideo)
router.post('/createVideo', deviceController.createVideo)
router.post('/createUser', deviceController.registration_0)
router.post('/login', deviceController.login)

router.post('/createSessia', deviceController.createSessia)
router.post('/createPortfolio', deviceController.createPortfolio)
router.post('/createPortfolioImg', deviceController.createPortfolioImg)
router.post('/createSessiaTags', deviceController.createSessiaTags)


router.get('/getSessia/:id', deviceController.getSessia)
router.get('/getUser/:id', deviceController.getUser)
router.post('/login', deviceController.login)

module.exports = router