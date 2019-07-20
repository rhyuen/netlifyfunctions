const Payload = require("./models/payload.js");
const mongoose = require("mongoose");

exports.handler = async (evt, ctx) => {
    try {
        const {
            db
        } = process.env;
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log("Accepting HTML Body Content");

        const body = JSON.parse(evt.body);
        const {
            name,
            balance
        } = body;


        const clientResponse = JSON.stringify({
            message: "Arbitrary DB Message",
            result: result
        })

        //You have to remember to do this.
        await mongoose.disconnect();
        return {
            statusCode: 200,
            body: clientResponse
        };
    } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            details: e
        };
    }
};