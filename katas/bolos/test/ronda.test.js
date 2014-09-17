var Ronda = require('../src/ronda.js');

exports.SeCreaUnaRonda = function(test) {
    test.expect(1);
    var ronda = Ronda.CrearRonda();
    test.deepEqual(ronda.tiradas, [], "Las tiradas deben de estar vacias");
    test.done();
};

exports.SeApuntaUnaTiradaNormal = function(test) {
    test.expect(1);
    var ronda = Ronda.CrearRonda()
        .bolosDerribados(4);
    test.deepEqual(ronda.tiradas, [4], "Debe de existir un elemento con 4 bolos");
    test.done();
};

exports.puntuacionATextoIncio = function(test) {
    test.expect(1);
    var rondaFake = {
        tiradas: []
    };
    test.equal(Ronda.puntuacionATexto(rondaFake), "[ , ()]");
    test.done();
};

exports.puntuacionATextoSeMarcaUnTanto = function(test) {
    test.expect(1);
    var rondaFake = {
        tiradas: [5]
    };
    test.equal(Ronda.puntuacionATexto(rondaFake), "[5, ()]");
    test.done();
};

exports.puntuacionATextoSeMarcaOtroTanto = function(test) {
    test.expect(1);
    var rondaFake = {
        tiradas: [5,3]
    };
    test.equal(Ronda.puntuacionATexto(rondaFake), "[5,3(8)]");
    test.done();
};
