const Sentry = require("@sentry/node");


exports.handler = async (evt, ctx) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json"
    };

    return {
        headers,
        statusCode: 200,
        body: "cors get test example."
    };
}