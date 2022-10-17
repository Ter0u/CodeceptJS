const { teardown } = require("mocha")

module.exports = {
    start: function() {
        //Ação onde vai executar antes de todo projeto
        console.log('Server.js')
    },

    stop: function() {
        //Ação onde vai executar depois de todo projeto
        console.log('Server.js')
    }
}