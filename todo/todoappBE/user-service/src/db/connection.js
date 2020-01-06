import sequelize from 'sequelize'
import accessEnv from "../helpers/accessEnv"

const DB_URI=accessEnv("DB_URI")

const connection = new sequelize(DB_URI, {
    dialectOptions:{
        charset: 'UTF8',
        multipleStatements: true
    },
    logging : false
})

export default connection