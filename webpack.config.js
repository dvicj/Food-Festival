const path = require('path');

//19.2.4 - entry property, the root of the bundle and beginning of dependency graph
//output - where the bundled code will be sent 
//mode - the mode in which we want to webpack to run, default is production


module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
};
