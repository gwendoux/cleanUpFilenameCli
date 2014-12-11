var expect = require('must');

var decode = require('../modules/decode.js').decode;

describe("CleanName", function() {
    it("must be a string", function(done) {
        var varTest = "Questionnaire%20de%20synth%c3%a8se%20du%20dossier%20du%20Co-cac%20%20%c3%a0%20publier";
        var TestResult = "Questionnaire de synth%c3%a8se du dossier du Co-cac  %c3%a0 publier";
        var result = decode(varTest);

        expect(result).not.to.be.null();

        result.must.be.a.string();

        result.must.be(TestResult);

        done();
    });
});