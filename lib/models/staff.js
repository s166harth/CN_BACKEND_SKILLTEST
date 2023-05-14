const mongoose = require("mongoose");
const {
  Schema
} = mongoose;
const bcrypt = require("bcryptjs");
const staffSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
staffSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    return next();
  } catch (err) {
    return next(err);
  }
});
staffSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;