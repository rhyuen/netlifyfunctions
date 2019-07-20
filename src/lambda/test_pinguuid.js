const axios = require("axios");

exports.handler = async (evt, ctx) => {
    try {
        const url = "https://royuutil-1665h7tba.now.sh/api/uuid";

        const {
            data
        } = await axios.get(url);
        console.log(data);
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 200,
            body: JSON.stringify({
                data: data.data,
                message: "Success in retriving data from the uuid endpoint."
            })
        };
    } catch (e) {
        console.log(e);
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            statusCode: 500,
            message: "Something has gone wrong",
            details: e
        };
    }
}