exports.handler = async function (event, context) {
    if (event.body.message) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: event.body.message }),
        };
    }
    return {
        statusCode: 400,
        body: JSON.stringify({ message: "No message was found." }),
    };
};