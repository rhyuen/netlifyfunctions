const Sentry = require("@sentry/node");
const {
    sentry_key
} = process.env;

let sentryInitialized = false;

export function initSentry() {
    if (sentry_key) {
        Sentry.init({
            dsn: sentry_key
        });
        sentryInitialized = true;
    }
}

initSentry();


async function reportError(error) {
    console.warn(error);
    if (!sentryInitialized) {
        return;
    }

    if (typeof error === 'string') {
        Sentry.captureMessage(error);
    } else {
        Sentry.captureException(error);
    }

    await Sentry.flush();
}

function catchErrors(handler) {
    return async function (evt, ctx) {
        ctx.callbackWaitsForEmptyEventLoop = false;
        try {
            return await handler.call(this, ...arguments);
        } catch (e) {
            await reportError(e);
            throw e;
        }
    }
}