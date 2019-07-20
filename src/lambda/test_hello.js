exports.handler = (evt, ctx) => {
    try {
        //updated for payload json stringify.
        console.log("Just A Simple String Returned.");
        const payload = JSON.stringify({
            data: 'Hello, world! change static value'
        })
        return {
            statusCode: 200,
            body: payload
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: {
                data: "Something has gone wrong",
                details: e
            }
        };
    }
};