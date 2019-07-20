const Email = require("./models/email.js");
const validator = require("validator");
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
            email
        } = JSON.parse(evt.body);
        if (!validator.isEmail(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Invalid email: "${email}" sent in request.`
                })
            };
        }

        const latestEmail = new Email({
            email: email
        });
        console.log(email);
        const result = await latestEmail.save();

        await mongoose.disconnect();

        //Need Content-Type for ACAH: Nope
        //Testing Authorization for ACAH: Nope
        const headers = JSON.stringify({
            "Access-Control-Allow-Origin": "https://royucount.netlify.com/, *",
            "Access-Control-Allow-Headers": "X-Requested-With, Authorization, Content-Type, Origin, Accept",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Credentials": "true"
        });

        return {
            headers,
            statusCode: 200,
            body: JSON.stringify({
                data: result,
                message: `${result} saved to data store.`
            })
        };

    } catch (e) {
        console.log(e);
        return {
            headers,
            statusCode: 500,
            body: JSON.stringify({
                message: "Something has gone wrong",
                details: e
            })
        };
    }
}