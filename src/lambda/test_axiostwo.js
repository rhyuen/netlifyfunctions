const axios = require("axios");

exports.handler = async (evt, ctx) => {

    axios.get("https://engadget.com").then(res => {
        console.log(res.data);
        const payload = JSON.stringify({
            data: res.data,
            message: "Netlify functions behave oddly."
        })

        console.log("Data from a Website");
        console.log("With CORS * Enabled.");

        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
        return {
            headers,
            statusCode: 200,
            body: payload
        };
    }).catch(e => {
        console.log(e)
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 500,
            message: "Something has gone wrong",
            details: e
        };
    });
}