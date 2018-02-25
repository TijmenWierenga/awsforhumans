var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .addEntry('app', './assets/js/app.js')

    // allow sass/scss files to be processed
    .enableSassLoader(function (sassOptions) {}, {
        resolveUrlLoader: false
    })

    .enablePostCssLoader((options) => {
        options.config = {
            path: './postcss.config.js'
        };
    })

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // enable Vue
    .enableVueLoader()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

var config = Encore.getWebpackConfig();

config.watchOptions = { poll: true, ignored: /node_modules/ };

// export the final configuration
module.exports = config;
