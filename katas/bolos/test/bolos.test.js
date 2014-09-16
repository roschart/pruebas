var bolos = require('../src/bolos');

exports.ComienzoPartida = function(test) {
    test.expect(3);
    var marcador = bolos.Marcador("Jugador1");
    test.equal(marcador.numRondas(), 1 ,"Se debe de estar en la primera ronda");
    test.equal(marcador.tirada(), 1);
    test.equal(marcador.getPuntuacion(), "[ , ()]");
    test.done();
};

exports.PrimeraTirada = function(test) {
    test.expect(3);
    var marcador = bolos.Marcador("Jugador1")
        .bolosDerribados(4);
    test.equal(marcador.numRondas(), 1);
    test.equal(marcador.tirada(), 2);
    test.equal(marcador.getPuntuacion(), "[4, ()]");
    test.done();
};

//exports.SegundaTirada = function(test) {
//    test.expect(3);
//    var marcador = bolos.Marcador("Jugador1")
//        .bolosDerribados(4)
//        .bolosDerribados(2);
//    test.equal(marcador.puntuacion, 6);
//    test.equal(marcador.ronda, 2);
//    test.equal(marcador.tirada, 1);
//    test.done();
//};
//
//exports.SemiPlenoEnLaPrimeraRonda = function(test) {
//    test.expect(3);
//    var marcador = bolos.Marcador("Jugador1")
//        .bolosDerribados(4)
//        .bolosDerribados(6);
//    test.equal(marcador.puntuacion, 0);
//    test.equal(marcador.ronda, 2, "La ronda es dos");
//    test.equal(marcador.tirada, 1);
//    test.done();
//};
//
//exports.PuntacionDespuesDeSemiPleno = function(test) {
//    test.expect(3);
//    var marcador = bolos.Marcador("Jugador1")
//        .bolosDerribados(4)
//        .bolosDerribados(6)
//	.bolosDerribados(3);
//    test.equal(marcador.puntuacion, 16, "La puntuación es 16");
//    test.equal(marcador.ronda, 2, "Estamos en la sugunda ronda");
//    test.equal(marcador.tirada, 2, "Estamos en la segunda tirada");
//    test.done();
//};
