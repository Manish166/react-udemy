import {Model, DataTypes} from 'sequelize'
import sequelize from '../connection'

export class User extends Model{}
    User.init(
        {
            id:{
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID
            },
            firstName:{
                allowNull: false,
                type: DataTypes.STRING
            },
            lastName :{
                allowNull: false,
                type: DataTypes.STRING
            },
            email:{
                allowNull: false,
                unique:true,
                type: DataTypes.STRING
            },
            passwordHash:{
                allowNull: false,
                type: DataTypes.CHAR(64)
            }
        },
        {
        defaultScope: {
            rawAttributes : {
                exclude : ["passwordHash"]
            }
        },
    modelName : "user",
    sequelize
})