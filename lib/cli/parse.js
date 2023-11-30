const { config } = require("process");

function parse(argv) {
    if (typeof argv === 'string') {
        argv = argv.split(' ');
    }
    return argv.slice(2)
}

module.exports = parse

