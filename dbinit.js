require("dotenv").config();
const mongoose = require("mongoose");
const data = require("./data.js");
const Link = require("./src/lambda/models/link.js");

const {
    dbconn
} = process.env;

async function start() {
    await mongoose.connect(dbconn, {
        useNewUrlParser: true
    });
}

async function saveLink(thislink) {

    const latestLink = new Link({
        title: thislink.title,
        subtitle: thislink.subtitle,
        link: thislink.link,
        source: thislink.source,
        tags: thislink.tags.map(tag => tag),
    });
    await latestLink.save();
    console.log(`${thislink.title} saved.`);
}

async function readLinks(links) {
    for (const thislink of links) {
        await saveLink(thislink);
    }
}


(async function () {
    try {
        await start();
        console.log(`[${new Date().toLocaleString()}]: Clearing Collection`);
        await Link.collection.drop();
        console.log(`[${new Date().toLocaleString()}]: Collection cleared.`);
        await readLinks(data);
    } catch (e) {
        console.log(e);
    }
})().catch(e => {
    console.log(`[${new Date().toLocaleString()}]: ${e}`);
}).finally(() => {
    mongoose.disconnect();
    console.log(`[${new Date().toLocaleString()}]: Data loaded; Database disconnected.`);
});