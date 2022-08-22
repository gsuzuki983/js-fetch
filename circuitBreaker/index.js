const getHttp = require('./fetch');

// excerpt from index.js
module.exports = async function (context, req) {

    const json = await getHttp(context);
    context.log(json);

    // rest of the function down here
}