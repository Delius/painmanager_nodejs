var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'pawel:painmanagerdev@ds049150.mongolab.com:49150/painmanage_dev',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'pawel:painmanager@ds049150.mongolab.com:49150/painmanager',
        port: process.env.PORT || 80
    }
}