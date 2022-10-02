const mongoose = require("mongoose");

const PharmacyUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const PharmacyUser = mongoose.model("PharmacyUser", PharmacyUserSchema);

module.exports = PharmacyUser;
