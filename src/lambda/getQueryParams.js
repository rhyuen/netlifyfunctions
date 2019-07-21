exports.handler = async (evt, ctx) => {
    const {
        category
    } = evt.queryStringParameters;

    let payload = "empty payload";
    switch (category) {
        case "economics":
            payload = {
                data: ["Money", "Greed", "Wealth", "Stock"]
            };
            break;
        case "environment":
            payload = {
                data: ["Climate", "Carbon", "Heating"]
            }
            break;
        default:
            payload = "invalid query param"
    }

    return {
        message: "Query String Parameters",
        body: JSON.stringify(payload)
    };
}