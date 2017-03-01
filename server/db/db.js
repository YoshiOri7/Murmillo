var Sequelize = require('sequelize');

// ========================================================
// Note:
// Make sure database 'murmillo' exists before you run this file
// You create a database by running this sql script in terminal
// '   mysql -u root < server/schema.sql    '
// ========================================================


// ==================================================
// DB config setup
// database = 'murmillo' | username = 'root' | password = ''
// var DBhost = 'localhost';
var DBhost = 'mysql';

var db = new Sequelize('murmillo', 'root', 'murmillo', {
  host: DBhost,
  dialetc: 'mysql'
});


module.exports = db;