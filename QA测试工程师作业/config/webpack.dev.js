const path = require('path')

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                option: {
                    'presets': [latest],
                }
            }
       ]
    }
}