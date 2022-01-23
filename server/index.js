const express = require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./routes/user");
const admintournament = require("./routes/adminTournament")
const adminparticipants = require("./routes/adminparticipants")
const adminmatches = require("./routes/adminMatches")
const cookieParser = require('cookie-parser')
const cors = require("cors");
require('dotenv').config();
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
app.use('/uploads', express.static('uploads'));
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Mongodb running");
  })
  .catch((err) => {
    console.log("There is an error while connecting mongodb", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser())
app.use("/user", user);
app.use("/user",admintournament)
app.use("/user",adminparticipants)
app.use("/user",adminmatches)
app.listen(4000, () => {
  console.log("Server is running");
});
