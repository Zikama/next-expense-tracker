// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     console.log(process.env.MONGO_URI);
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//   } catch (err) {
//     console.log(`Error: ${err.message}`.red);
//     // process.exit(1);
//   } 
// }

// module.exports = connectDB;

const mongoose = require("mongoose"),
  db = require("./keys").mongoURI,
  // Connect to mongodb
  conn = () =>
    mongoose
      .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then((e) => {
        // e.connections[0].dropDatabase(err => { if (err) throw err; });
        console.log("mongoDB connected...");
        return e;
      });
module.exports = conn;
