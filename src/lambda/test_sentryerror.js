const Sentry = require("@sentry/node");


exports.handler = async (evt, ctx) => {
    const {
        sentry_key
    } = process.env;
    Sentry.init({
        dsn: sentry_key
    });
    if (Math.floor(Math.random() * 100) % 2 === 0) {
        throw new Error("Oh dear, an inconsistent, intentional failure!");
    }
    const payload = JSON.stringify({
        message: "Cats are totes awesome!"
    });
    return {
        statusCode: 200,
        body: payload
    };
}