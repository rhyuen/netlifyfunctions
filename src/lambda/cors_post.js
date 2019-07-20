exports.handler = async (evt, ctx) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json"
    };

    const body = JSON.parse(evt.body);
    console.log(body.email);
    console.log(body.password);

    const payload = JSON.stringify({
        email: body.email,
        password: body.password
    });

    return {
        headers,
        statusCode: 200,
        body: payload
    };
}