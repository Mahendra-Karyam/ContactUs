const mongoose = require('mongoose');
require('dotenv').config();

const Users_URI = process.env.Users_URI;

const userDBConnection = mongoose.createConnection(Users_URI);

userDBConnection.once('open', () => {
  console.log('✅ Connected to User Database successfully!');
});

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    collegeAddress: {
        type: String,
        required: true
    },
    Branch: {
        type: String,
        required: true
    },
    passedOutYear: {
        type: String,
        required: true
    }
});

const User = userDBConnection.model("User", userSchema);
module.exports = { 
    userDBConnection,
    User
};