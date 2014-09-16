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
