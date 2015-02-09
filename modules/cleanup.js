
var urlencode        = require('urlencode'),
    removeDiacritics = require('diacritics').remove,
    lowerCase        = require('lower-case');

exports.cleanup = cleanup;

function cleanup (val) {
    val = urlencode.decode(val, 'utf-8');
    val = removeDiacritics(val); //remove accentued characters
    val = val.replace(/\s{2,}/g, ' ') //
             .replace(/[^\w\s\.\-\_]/g, "") // remove extra characters except. (., _ and -)
             .replace(/\s/g, "-") // replace space with dash
             .replace(/-+$|(-)+/g, '$1'); // remove multidashes
    val = lowerCase(val);
    return val;
}
