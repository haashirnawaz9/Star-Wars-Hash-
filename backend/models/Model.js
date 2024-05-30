const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;