const mongoose = require("mongoose");
const payloadSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Empty Name"
    },
    balance: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Payload", payloadSchema);