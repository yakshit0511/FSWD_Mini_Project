const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Researcher", "Entrepreneur", "Investor", "IPR Professional", "Government Official"], required: true }
}, {
    collection: "users"
});

module.exports = mongoose.model("User", UserSchema);
