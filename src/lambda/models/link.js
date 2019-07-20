const mongoose = require("mongoose");
const linkSchema = mongoose.Schema({
    title: {
        type: String,
        default: "No Title"
    },
    subtitle: {
        type: String,
        default: "No Subtitle"
    },
    link: {
        type: String,
        default: "No Url"
    },
    source: {
        type: String,
        default: "No Source"
    },
    tags: [String],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Link", linkSchema);