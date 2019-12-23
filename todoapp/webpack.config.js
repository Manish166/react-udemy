var webpack=require('webpack')
module.exports={
    entry:"./index.js",
    output:{filename :"./bundle.js"},
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js?/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{presets:['env']}
            }
        ]
    }
}
    