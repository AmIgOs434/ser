const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('Субъекты', {
    Код: {type: DataTypes.INTEGER, primaryKey: true},
    Имя: {type: DataTypes.STRING},
    Логин: {type: DataTypes.STRING},
    Пароль: {type: DataTypes.STRING},
    Доступ: {type: DataTypes.BLOB},
    "Контактный телефон": {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    "Рассылать уведомления": {type: DataTypes.BOOLEAN},
},{
    timestamps: false,
    freezeTableName: true,
})


const Scheta = sequelize.define('Счета', {
    Код: {type: DataTypes.INTEGER, primaryKey: true},
    'Код текстовый': {type: DataTypes.STRING},
    Порядок: {type: DataTypes.STRING},
    Наименование: {type: DataTypes.STRING},
    Состояние: {type: DataTypes.INTEGER},
    Владелец: {type: DataTypes.INTEGER},
    'Доступ на чтение': {type: DataTypes.STRING},
    Рассылать: {type: DataTypes.STRING},
    Описание: {type: DataTypes.STRING},
    Уведомлять: {type: DataTypes.BOOLEAN},

},{
    timestamps: false,
    freezeTableName: true,
})

module.exports = {
    User,
    Scheta
}
