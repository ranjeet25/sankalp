const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// ******* MONGOOSED || MONGODB ***********

const mongourl =
  "mongodb+srv://ranjeet25:admin@cluster0.imqkiy6.mongodb.net/sankalp?retryWrites=true&w=majority";

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

// ******* REGISTER ROUTE ***********
const userSchema = new mongoose.Schema({
  role: String,
  name: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("registrations", userSchema);

app.post("/register", (req, res) => {
  User.create({
    role: req.body.role,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.pass,
  }).catch((err) => console.log(err));
});

// UPDATE PROFILE
app.post("/update", (req, res) => {
  var data = req.body;
  console.log(data);

  User.findOneAndUpdate(
    { username: data.oldUsername },
    { username: data.newUsername, password: data.newpassword },
    { new: true }
  )
    .then((res) => {
      if (res == null) {
        res.send({ message: null });
      }
    })
    .catch((err) => console.log(err));
});

// ******* REGISTER ROUTE ENDS ***********

// ******* LOGIN ROUTE ***********

var _username;
var _pass;
var _role;
app.post("/login", (req, res) => {
  var uname = req.body.uname;
  // testname = uname;
  console.log(uname);
  User.find({ username: uname })
    .then((doc) => {
      // console.log(doc);
      _username = doc[0].username;
      _pass = doc[0].password;
      _role = doc[0].role;
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("something went wrong");
    });
});

app.get("/login_data", (req, res) => {
  res.send({ username: _username, password: _pass, role: _role });
});

// ******* LOGIN ROUTE ENDS ***********

// ******* complaints ROUTE ***********

const userComplaint = new mongoose.Schema({
  username: String,
  uid: String,
  incharge_name: String,
  branch: String,
  complaint: String,
  data: Date,
});

var Complaint = mongoose.model("complaints", userComplaint);
var complaintsData;

app.post("/complaints", (req, res) => {
  data = req.body;
  res.send(data);
  // console.log(data);

  Complaint.create({
    username: req.body.username,
    uid: req.body.uid,
    incharge_name: req.body.p_incharge,
    branch: req.body.branch,
    complaint: req.body.complaint,
  }).catch((err) => console.log(err));
});

// Admin complaint delete ROUTE
// Very Dangourus

app.get("/delete", (req, res) => {
  User.deleteMany({ "": "" }).then((data) => res.send(data));
});

app.post("/delete/:id", (req, res) => {
  // User.deleteOne({ "": "" }).then((data) => res.send(data));
  const userid = req.params.id;
  Complaint.deleteOne({ _id: userid }).then((data) => {
    console.log(data);
    // console.log(userId);
  });
});

// ******* ADMIN ROUTE ***********

app.get("/admin", (req, res) => {
  Complaint.find()
    .then((data) => {
      complaintsData = data;

      res.send(complaintsData);
    })
    .catch((err) => console.log(err));
});

// ******* RESOLVER ROUTE ***********

var userId = new Array();
app.post("/resolver/:id", (req, res) => {
  const userid = req.params.id;
  Complaint.find({ _id: userid }).then((data) => {
    userId.push(data[0]);
    // console.log(userId);
  });
});

app.get("/resolver", (req, res) => {
  res.send(userId);
});

// ******* HISTORY ROUTE ***********

app.get("/history", (req, res) => {
  Complaint.find({ uid: 123456 })
    .then((data) => {
      complaintsData = data;
      complaintsData;
      res.send(complaintsData);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
