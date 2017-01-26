const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
	console.log("selamlar");
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};