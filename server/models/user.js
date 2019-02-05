var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 10},
    last_name: {type: String, required: true, max: 10},
    user_name: {type: String, required: true, max: 10},
    address: {type: String, required: true, max: 100},
    job: {type: String, required: true, max: 25},
    salary: {type: Number, required: true},
    date_of_birth: {type: Date},
    isDeleted : {type: Boolean}
  }
);

// Virtual for author's full name
UserSchema
.virtual('name')
.get(function () {
  return this.first_name + ', ' + this.last_name;
});

// Virtual for author's lifespan
// UserSchema
// .virtual('lifespan')
// .get(function () {
//   return (this.Date.- this.date_of_birth.getYear()).toString();
// });

// Virtual for author's URL
// UserSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });

//Export model
module.exports = mongoose.model('User', UserSchema);