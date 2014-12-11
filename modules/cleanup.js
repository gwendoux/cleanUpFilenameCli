var urlencode = require('urlencode');

module.exports.cleanup = function (val) {
    return urlencode.decode(val);
}