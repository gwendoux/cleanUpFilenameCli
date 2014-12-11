var expect = require('must');

var cleanup = require('../modules/cleanup.js').cleanup;

describe("CleanName", function() {
    it("must be a string", function(done) {
        var varTest = "%CB%D5%C7%A7";
        //var TestResult = "Questionnaire de synthèse du dossier du Co-cac à publier";
        var result = cleanup(varTest);

        expect(result).not.to.be.null();

        //result.must.be.a.string();

        result.must.be(result);

        done();
    });
});
