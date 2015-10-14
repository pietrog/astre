var env         = process.env.NODE_ENV || 'development',
    jwt = require('jsonwebtoken'),
    express     = require('express'),
    favicon     = require('serve-favicon'),
    logger      = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path        = require('path'),
    
    tools       = require('./app/tools'),
    packageJson = require('./package.json'),
    routes = require('./app/routes/index'),
    config = require('./app/config/config.js');

global.App = {
    app : express(),
    port : tools.normalizePort(process.env.PORT || '4000'),
    version : packageJson.version,
    root : path.join(__dirname, 'public'),
    appPath : function(path){
	return this.root + '/' + path;
    },
    require : function(path){
	return require(this.appPath(path));
    },
    env : env,
    start : function(){
	if (!this.started){
	    this.started = true;
	    this.app.listen(this.port);
	    console.log('Running node server version ' + this.version + ' on port ' + this.port + ' in env ' + this.env); 
	}
    }
}


// uncomment after placing your favicon in /public
App.app.use(express.static(App.root));
App.app.use(favicon(App.appPath('favico.ico')));
App.app.use(logger('dev'));
App.app.use(bodyParser.json());
App.app.use(bodyParser.urlencoded({ extended: false }));


App.app.use('/', routes);

module.exports = App;
