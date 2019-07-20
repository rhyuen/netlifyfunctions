const mongoose = require("mongoose");
const emailSchema = mongoose.Schema({
    email: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Email", emailSchema);