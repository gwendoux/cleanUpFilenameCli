
var urlencode = require('urlencode'),
    removeDiacritics = require('diacritics').remove,
    lowerCase = require('lower-case');

exports.cleanup = cleanup;

function cleanup (val) {
    val = urlencode.decode(val, 'utf-8');
    val = removeDiacritics(val);
    val = val.replace(/\s{2,}/g, ' ')
             .replace(/[^\w\s]|_/g, "")
             .replace(/\s/g, "-")
             .replace(/-+$|(-)+/g, '$1');
    val = lowerCase(val);
    return val;
};
