const webpack=require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
module.exports={
    mode:'development',
    entry:[
        path.join(__dirname, '/src/index.js')
    ],
    devtool:'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        hot:true,
        port: 9000
    },
    plugins:[
        new HtmlWebpackPlugin({template:'src/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        path: __dirname+'/dist',
        filename :"./bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.(css)$/,
                exclude:/node_modules/,
                use:['style-loader','css-loader']
            }
        ]
    },
}
    