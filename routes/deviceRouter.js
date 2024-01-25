const Router = require('express')

const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/',checkRole('ADMIN'), deviceController.create)



router.post('/putGlav_text1', deviceController.putGlav_text1)
router.post('/putGlav_text', deviceController.putGlav_text)
router.get('/getGlav_text/:id', deviceController.getGlav_text)
router.post('/createGlav_text', deviceController.createGlav_text)

router.post('/putKategorii', deviceController.putKategorii)
router.post('/putKategorii1', deviceController.putKategorii1)
router.get('/getKategorii/:id', deviceController.getKategorii)

router.post('/createKategorii', deviceController.createKategorii)
router.delete('/delKategorii/:id', deviceController.delKategorii)

router.post('/putO_sebe', deviceController.putO_sebe)
router.get('/getO_sebe/:id', deviceController.getO_sebe)
router.post('/creategetOsebeinfo', deviceController.creategetO_sebe_info)
router.delete('/delOsebeinfo/:id', deviceController.delO_sebe_info)
router.put('/putO_sebe_info/:id', deviceController.putO_sebe_info)
router.get('/getO_sebe_info/:id', deviceController.getO_sebe_info)


router.delete('/delUslugi/:id', deviceController.delUslugi)
router.post('/createUslugi', deviceController.createUslugi)
router.post('/putUslugi', deviceController.putUslugi)
router.post('/putUslugi2', deviceController.putUslugi2)
router.post('/putUslugi3', deviceController.putUslugi3)

router.get('/getUslugi', deviceController.getUslugi)
router.delete('/delUslugiprice/:id', deviceController.delUslugi_price)
router.post('/createUslugiprice', deviceController.createUslugi_price)
router.post('/putUslugi_price', deviceController.putUslugi_price)
router.get('/getUslugi_price/:id', deviceController.getUslugi_price)


router.delete('/delKomplex_predl_info/:id', deviceController.delKomplex_predl_info)
router.put('/putKomplex_predl/:id', deviceController.putKomplex_predl)
router.get('/getKomplex_predl/:id', deviceController.getKomplex_predl)
router.post('/putKomplex_predl_info', deviceController.putKomplex_predl_info)
router.post('/putKomplex_predl_info1', deviceController.putKomplex_predl_info1)
router.post('/createKomplexpredlinfo', deviceController.createKomplex_predl_info)
router.get('/getKomplexpredlinfo', deviceController.getKomplex_predl_info)
router.post('/putKomplex_predl_info_desc', deviceController.putKomplex_predl_info_desc)
router.get('/getKomplexpredlinfodesc/:id', deviceController.getKomplex_predl_info_desc)
router.post('/createKomplexpredlinfodesc', deviceController.createKomplex_predl_info_desc)
router.delete('/delKomplexpredlinfodesc/:id', deviceController.delKomplex_predl_info_desc)

router.put('/putActii/:id', deviceController.putActii)
router.get('/getActii/:id', deviceController.getActii)
router.post('/putActii_info', deviceController.putActii_info)
router.post('/putActii_img', deviceController.putActii_img)
router.get('/getActii_info/:id', deviceController.getActii_info)
router.post('/createActiiinfo', deviceController.createActii_info)
router.delete('/delActiiinfo/:id', deviceController.delActii_info)


router.put('/putOtzivi/:id', deviceController.putOtzivi)
router.get('/getOtzivi/:id', deviceController.getOtzivi)

router.post('/putOtzivi_info', deviceController.putOtzivi_info)
router.post('/putOtzivi_info1', deviceController.putOtzivi_info1)

router.get('/getOtzivi_info/:id', deviceController.getOtzivi_info)
router.post('/createOtziviinfo', deviceController.createOtzivi_info)
router.delete('/delOtziviinfo/:id', deviceController.delOtzivi_info)



router.post('/putVizit', deviceController.putVizit)
router.post('/putVizit1', deviceController.putVizit1)
router.get('/getVizit/:id', deviceController.getVizit)


router.put('/putSertificats/:id', deviceController.putSertificats)
router.get('/getSertificats/:id', deviceController.getSertificats)

router.post('/putSertificatsinfo', deviceController.putSertificats_info)

router.get('/getSertificats_info/:id', deviceController.getSertificats_info)
router.post('/createSertificatsinfo', deviceController.createSertificats_info)
router.delete('/delSertificatsinfo/:id', deviceController.delSertificats_info)


router.put('/putKontacts/:id', deviceController.putKontacts)
router.get('/getKontacts/:id', deviceController.getKontacts)
router.put('/putKontacts_phone/:id', deviceController.putKontacts_phone)
router.get('/getKontacts_phone/:id', deviceController.getKontacts_phone)
router.post('/createKontactsphone', deviceController.createKontacts_phone)
router.delete('/delKontactsphone/:id', deviceController.delKontacts_phone)

module.exports = router