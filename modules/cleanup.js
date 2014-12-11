
var urlencode = require('urlencode'),
    removeDiacritics = require('diacritics').remove,
    lowerCase = require('lower-case');

module.exports.cleanup = function (val) {
    val = urlencode.decode(val, 'utf-8');
    val = val.replace(/\s/g, "-");
    val = removeDiacritics(val);
    val = lowerCase(val);
    return val;
};