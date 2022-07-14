const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /^.{8,}$/;
const WORK_FACTOR = 10;

const userSchema = new Schema({
  name: {
    type: String,
    required: "User name is required",
    maxLength: [20, "User name max allowed chars are 20"],
    trim: true,
  },
  email: {
    type: String,
    required: "User email is required",
    trim: true,
    lowercase: true,
    unique: true,
    match: [EMAIL_PATTERN, "Invalid email"],
  },
  password: {
    type: String,
    required: "User password is required",
    match: [PW_PATTERN, "Password needs at least 8 chars"],
  },
  admin: {
    type: Boolean,
  },
});

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
      .hash(this.password, WORK_FACTOR)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
