const Link = require("./models/link.js");
const mongoose = require("mongoose");

exports.handler = async (evt, ctx) => {
    try {
        const {
            db
        } = process.env;
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        const result = await Link.find();

        const clientResponse = JSON.stringify({
            message: "Hello, from my article JSON articles server.",
            result: result
        })
        await mongoose.disconnect();
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 200,
            body: clientResponse
        };
    } catch (e) {
        console.log(e);
        return {
            headers: {
                "Access-control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 500,
            message: "Something has gone wrong",
            details: e
        };
    }
};