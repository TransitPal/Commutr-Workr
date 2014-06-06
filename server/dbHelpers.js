var db = require('mongoose');

exports.getUsersList = function(){
  return db.models.User.find().select('email').exec();
};

exports.getUser = function(email) {
  return db.models.User.findOne({email: email}).select('locations routine').exec();
};
