var expect = require('must');

var decode = require('../modules/decode.js').decode;

describe("CleanName", function() {
    it("must be a string", function(done) {
        var varTest = "Questionnaire%20de%20synth%c3%a8se%20du%20dossier%20du%20Co-cac%20%20%c3%a0%20publier";
        var result = decode(varTest);

        result.must.be.a.string();

        done();
    });
});