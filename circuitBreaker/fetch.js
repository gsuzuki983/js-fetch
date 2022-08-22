const fetch = require('node-fetch');

module.exports = async function getHttp(context) {

    context.log('calling HTTP service')

    return fetch('https://red-flower-0e519b900.1.azurestaticapps.net/api/todos')

        .then(res => res.json());
}