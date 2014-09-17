var Ronda = require('./ronda');
exports.Marcador = function(nombre) {
    this.nombre = nombre;
    var rondas = [new Ronda.CrearRonda()];

    //Fuciones 'Privadas'
    var ronda = function ronda() {
        return rondas.slice(-1).pop();
    };

    //Fuciones públicas
    this.getPuntuacion = function() {
        var r = rondas.map(function(unaRonda) {
            return Ronda.puntuacionATexto(unaRonda);
        });
        return r.join(' ');
    };

    this.numRondas = function() {
        return rondas.length;
    };

    this.tirada = function() {
        //Se obtiene el último elemento del array de rondas
        return ronda().numTirada();
    };


    this.bolosDerribados = function(number) {
        ronda().bolosDerribados(number, function finRonda(fin) {
            rondas.push(new Ronda.CrearRonda());
        });
        return this;
    };


    return this;
};
