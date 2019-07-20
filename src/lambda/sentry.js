const Sentry = require("@sentry/node");


exports.handler = async (evt, ctx) => {
    const {
        sentry_key
    } = process.env;
    Sentry.init({
        dsn: sentry_key
    });

    const payload = JSON.stringify({
        message: "Cats are totes awesome!"
    });
    return {
        statusCode: 200,
        body: payload
    };
}