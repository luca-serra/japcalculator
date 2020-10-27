exports.handler = async function (event, context) {
    if (event.body) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: event.body }),
        };
    }
    return {
        statusCode: 400,
        body: JSON.stringify({ message: "No message was found." }),
    };
};
