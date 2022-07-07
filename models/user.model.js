const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /.*{8,}/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: 'User name is required',
      maxLength: [20, 'User name max allowed chars are 20'],
      trim: true
    },
    email: {
      type: String,
      required: 'User email is required',
      trim: true,
      lowercase: true,
      unique: true,
      match: [EMAIL_PATTERN, 'Invalid email']
    },
    password: {
      type: String,
      required: 'User password is required',
      match: [PW_PATTERN, 'Password needs at least 8 chars']
    }
  }
)

const User = mongoose.model("User", userSchema);

module.exports = User;
