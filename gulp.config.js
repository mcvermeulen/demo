module.exports = function() {
    var client = './src/client/';
    var server = './src/server';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var root = './';

    var config = {
        /**
         * File paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        index: client + 'index.html',
        css: temp + 'app.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        js: [
            client + '**/*.module.js',
            client + '**/*.js',
            '!' + client + '**/*.spec.js'
        ],
        less: client + 'styles/app.less',
        root: root,
        server: server,
        temp: temp,

        /**
         * optimized files
         */
        optimized: {
            app: 'js/app.js',
            lib: 'js/lib.js'
        },

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'meetingsapp',
                standAlone: false,
                root: 'app/'
            }
        },
        /**
         * Browser sync
         */
        browserReloadDelay: 1000,
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],
        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
