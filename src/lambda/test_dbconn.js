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

        const result = await Payload.find({}, null, {
            limit: 10
        });
        console.log(result);

        //Lasted updated for result.length
        const clientResponse = JSON.stringify({
            message: "Arbitrary DB Message",
            result: result,
            count: result.length
        })
        await mongoose.disconnect();
        return {
            statusCode: 200,
            body: clientResponse
        };
    } catch (e) {
        console.log(e);
        cb(e);
    }
};