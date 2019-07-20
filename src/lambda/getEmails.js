const Email = require("./models/email.js");
const mongoose = require("mongoose");

exports.handler = async (evt, ctx) => {
    try {
        const {
            db
        } = process.env;
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        const clientResponse = await Email.find();
        console.log(clientResponse);

        await mongoose.disconnect();
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Content-Type": "application/json"
            },
            statusCode: 200,
            body: JSON.stringify({
                data: clientResponse,
                message: "Returned all emails."
            })
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