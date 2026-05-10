// const mongoose = require('mongoose');

// const connectDB = async () => {

//   try {

//     const conn = await mongoose.connect(process.env.MONGO_URI);

//     console.log(`MongoDB Connected: ${conn.connection.host}`);

//   } catch (error) {

//     console.log(error);
//     process.exit(1);

//   }
// }

// module.exports = connectDB;













// connect/database.js
//ock data inserted into MongoDB

const mongoose = require('mongoose');

const User = require('../models/Model');

const users = require('../MOCK_DATA.json');


const connectDB = async () => {

   try {

      // CONNECT MONGODB

      const conn = await mongoose.connect(process.env.MONGO_URI);

      console.log(`MongoDB Connected: ${conn.connection.host}`);


      // CHECK IF DATA ALREADY EXISTS

      const existingUsers = await User.countDocuments();


      // INSERT MOCK DATA ONLY IF COLLECTION IS EMPTY

      if(existingUsers === 0){

         await User.insertMany(users);

         console.log('Mock data inserted into MongoDB');
      }

   } catch (error) {

      console.log(error)

      process.exit(1);
   }
}

module.exports = connectDB;