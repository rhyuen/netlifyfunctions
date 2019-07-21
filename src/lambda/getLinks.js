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

        const {
            category
        } = evt.queryStringParameters;
        let queryField = ""
        switch (category) {
            case "economics":
                queryField = {
                    tags: "economics"
                };
                break;
            case "environment":
                queryField = {
                    tags: "environment"
                };
                break;
            default:
                queryField = {}
        }

        const result = await Link.find(queryField);

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