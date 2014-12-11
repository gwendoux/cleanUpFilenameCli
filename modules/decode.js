var urlencode = require('urlencode');

module.exports.decode = function (val) {
    return urlencode.decode(val);
}