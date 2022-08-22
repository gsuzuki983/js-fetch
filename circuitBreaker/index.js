const fetch = require('node-fetch');

async function getHttp(context) {

    context.log('calling HTTP service')

    return fetch('https://red-flower-0e519b900.1.azurestaticapps.net/api/todos')

        .then(res => res.json());
}

// excerpt from index.js
module.exports = async function (context, req) {

    const json = await getHttp(context);
    context.log(json);

    // rest of the function down here
}