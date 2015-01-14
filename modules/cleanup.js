
var urlencode = require('urlencode'),
    removeDiacritics = require('diacritics').remove,
    lowerCase = require('lower-case');

module.exports.cleanup = function (val) {
    val = urlencode.decode(val, 'utf-8');
    // remove doubling spaces
    val = val.replace(/\s{2,}/g, ' ');
    // replace spaces with dashes
    val = val.replace(/\s/g, "-");
    // remove multidashes
    val = val.replace(/-+$|(-)+/g, '$1');
    val = removeDiacritics(val);
    val = lowerCase(val);
    return val;
};
