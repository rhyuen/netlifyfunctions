const axios = require("axios");

exports.handler = async (evt, ctx) => {
    try {
        const result = await axios.get("https://engadget.com");
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 200,
            body: JSON.stringify({
                data: result.data
            })
        };
    } catch (e) {
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 500,
            message: "Something has gone wrong",
            details: e
        }
    }
}