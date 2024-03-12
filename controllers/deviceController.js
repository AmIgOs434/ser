const uuid = require('uuid')
const path = require('path');
const { User, Scheta, Provodki, Video, Sessia, SessiaTags, Portfolio, Portfolios_img } = require('../models/models')
const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize');


const generateJwt = (id) => {
  return jwt.sign(
      {id},
      process.env.SECRET_KEY,
      {expiresIn: "24h"}
  )
}



class deviceController {


  async registration_0(req, res, next) {
    const {email} = req.body
    const user_0 = await User.create({email})

    const token = generateJwt(user_0.id)
    return res.json({token})
}


async login(req, res, next) {
  const {email} = req.body
  const user = await User.findOne({where: {email:email}})

  if (user===null) {
    return res.json('Пользователь не найден')
  }

  // let comparePassword = password==user.Пароль
  // if (!comparePassword) {
  //     return   res.json('Указан неверный пароль')
  // }

  const token = generateJwt(user.id)
  return res.json({token})
}


  async getUser(req, res) {
    const {id} = req.params
    const user = await User.findOne(
        {
            where: {id:id},
            include: [{model: Sessia, as: 'Sessia'}],

        },
    )
    return res.json(user)
}

async getSessia(req, res) {
  const {id} = req.params
  const user = await Sessia.findOne(

      {
          where: {id:id},
          include: [{model: Portfolio, as: 'Portfolio' ,include: [{model: Portfolios_img, as: 'Portfolios_img'}] },{model: Video, as: 'Video'}]
      }
  )
  return res.json(user)
}

async getVideo(req, res) {
  const video = await Video.findAll({
    limit: 5,
    where: {
      id: {
        [Op.not]: [5,4]
      }
    }

  });
  return res.json(video)
}



async createVideo(req, res, next) {
  try {
      let { author, authorLink,SessiumId,name,sessiaImg,tags,tema} = req.body
      const prosmotri = 0
      const dostup = 0
      const {video} = req.files
      let fileName = uuid.v4() + ".mp4"
      video.mv(path.resolve(__dirname, '..', 'static', fileName))
     
      const device = await Video.create({prosmotri, author, authorLink, videoURL: fileName,SessiumId,name,sessiaImg,tags,tema,dostup});
      return res.json(device)
  } catch (e) {
      next(ApiError.badRequest(e.message))
  }
}

  async createSessia(req, res, next) {
    const {name,kto,professia_name,osebe,opit,zarplata,UserId,tags} = req.body
    const sessia = await Sessia.create({name,kto,professia_name,osebe,opit,zarplata,UserId,tags})
    return res.json({sessia})
}

async createSessiaTags(req, res, next) {
  const {name,SessiumId} = req.body
  const sessia = await SessiaTags.create({name,SessiumId})
  return res.json({sessia})
}


async createPortfolio(req, res, next) {
  const {name,opisaniye_kratko,opisaniye_full,SessiumId} = req.body
  const Portfolio1 = await Portfolio.create({name,opisaniye_kratko,opisaniye_full,SessiumId})
  return res.json({Portfolio1})
}

// async create(i) {
//   const fileName = uuid.v4() + ".mp4"
//   i.mv(path.resolve(__dirname, '..', 'static', fileName))
//   await Portfolios_img.create({fileName,id})
// }
async createPortfolioImg(req, res, next) {
  // const {img,PortfolioId} = 
  // const PortfolioImg = await Portfolio.create({img,PortfolioId})
  const create = async (i) => { 
    const fileName = uuid.v4() + ".mp4"
    i.mv(path.resolve(__dirname, '..', 'static', fileName))
    await Portfolios_img.create({img:fileName,PortfolioId:id})
  }
  const {img} = req.files
  const {id} = req.body
img.map(i => 
  create(i)
  )
  // let fileName = uuid.v4() + ".mp4"
  // video.mv(path.resolve(__dirname, '..', 'static', fileName))


  return res.json('2')
}

}

module.exports = new deviceController()