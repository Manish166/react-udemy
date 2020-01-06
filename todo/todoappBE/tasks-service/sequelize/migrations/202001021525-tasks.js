module.exports.up=(queryInterface, DataTypes)=>{
    queryInterface.createTable("tasks", 
    {
        id:{
            allowNull : false,
            primaryKey : true,
            type: DataTypes.INTEGER
        },
        name:{
            type: DataTypes.STRING
        },
        
    })
}