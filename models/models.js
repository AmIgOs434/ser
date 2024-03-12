const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('User', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,defaultValue:'User'},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    status: {type: DataTypes.INTEGER,defaultValue:0},
    image: {type: DataTypes.STRING,defaultValue:'acc.png'},
})


const Sessia = sequelize.define('Sessia', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    kto: {type: DataTypes.STRING},
    professia_name: {type: DataTypes.STRING},
    osebe: {type: DataTypes.STRING},
    opit: {type: DataTypes.STRING},
    zarplata: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING,defaultValue:'acc.png'},
    tags: {type: DataTypes.TEXT},

})
const SessiaTags = sequelize.define('SessiaTags', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})
const Portfolio = sequelize.define('Portfolio', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    opisaniye_kratko: {type: DataTypes.STRING},
    opisaniye_full: {type: DataTypes.STRING},
})

const Portfolios_img = sequelize.define('Portfolios_img', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING},
})
// const Profile = sequelize.define('Profile', {
//     id: {type: DataTypes.INTEGER, primaryKey: true},
//     user_id: {type: DataTypes.STRING},
//     name: {type: DataTypes.STRING},
//     image: {type: DataTypes.STRING},
//     bio: {type: DataTypes.STRING},
// })


// const RandomUsers = sequelize.define('RandomUsers', {
//     id: {type: DataTypes.INTEGER, primaryKey: true},
//     name: {type: DataTypes.STRING},
//     image: {type: DataTypes.STRING},
// })

// const CropperDimensions = sequelize.define('CropperDimensions', {
//     height:  {type: DataTypes.STRING,defaultValue:null},
//     width:  {type: DataTypes.STRING,defaultValue:null} ,
//     left:  {type: DataTypes.STRING,defaultValue:null},
//     top:  {type: DataTypes.STRING,defaultValue:null} 
// })

// const Like = sequelize.define('Like', {
//     id: {type: DataTypes.INTEGER, primaryKey: true},
//     user_id: {type: DataTypes.STRING},
//     post_id: {type: DataTypes.STRING},
// })

const Video = sequelize.define('video', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    videoURL: {type: DataTypes.STRING},
    author: {type: DataTypes.STRING},
    authorLink: {type: DataTypes.STRING},
    prosmotri: {type: DataTypes.INTEGER},
    name: {type: DataTypes.TEXT},
    tags: {type: DataTypes.TEXT},
    sessiaImg: {type: DataTypes.TEXT},
    dostup: {type: DataTypes.INTEGER,defaultValue:0},
    tema: {type: DataTypes.INTEGER},
})



// const Post = sequelize.define('Post', {
//     id: {type: DataTypes.INTEGER, primaryKey: true},
//     user_id: {type: DataTypes.STRING},
//     video_url: {type: DataTypes.STRING},
//     text: {type: DataTypes.STRING},
//     created_at:{type: DataTypes.STRING},
// })



// const PostWithProfile = sequelize.define('PostWithProfile', {
//     id: {type: DataTypes.INTEGER, primaryKey: true},
//     user_id: {type: DataTypes.STRING},
//     video_url: {type: DataTypes.STRING},
//     text: {type: DataTypes.STRING},
//     created_at: {type: DataTypes.STRING},

// })


Sessia.hasMany(SessiaTags, {as: 'sessiaTags'});
SessiaTags.belongsTo(Sessia)

Sessia.hasMany(Video, {as: 'Video'});
Video.belongsTo(Sessia)

User.hasMany(Sessia, {as: 'Sessia'});
Sessia.belongsTo(User)

Portfolio.hasMany(Portfolios_img, {as: 'Portfolios_img'});
Portfolios_img.belongsTo(Portfolio)

Sessia.hasMany(Portfolio, {as: 'Portfolio'});
Portfolio.belongsTo(Sessia)

module.exports = {
    User,
    Sessia,
    SessiaTags,
    Video,
    Portfolio,
    Portfolios_img
}
