// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema(

//   {
//   text: {
//     type: String,
//     required:[ true,'Please add a text value']
//   }
  
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Task', taskSchema);    









//from mock data json file

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(

{
   

   first_name: {
      type: String,
      required: [true, 'Please add first name'],
      trim: true
   },

   last_name: {
      type: String,
      required: [true, 'Please add last name'],
      trim: true
   },

   email: {
      type: String,
      required: [true, 'Please add email'],
      unique: true,
      trim: true
   },

   gender: {
      type: String,
      required: [true, 'Please add gender']
   }

   

},
{
   timestamps: true,
   versionKey: false
});

module.exports = mongoose.model('User', userSchema);