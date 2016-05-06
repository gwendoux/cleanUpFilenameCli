var must = require('must');
var cleanup = require('../modules/cleanup.js').cleanup;

describe("CleanName", function() {
    it("must be a string", function(done) {
        var varTest = "Questionnaire%20de%20synth%c3%a8se%20du%20dossier%20du%20Co-cac%20%c3%a0%20publier";
        var TestResult = "questionnaire-de-synthese-du-dossier-du-co-cac-a-publier";
        var result = cleanup(varTest);

        must(result).not.to.be.null();

        result.must.be.a.string();

        result.must.be(TestResult);

        done();
    });
});
