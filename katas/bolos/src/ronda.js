exports.CrearRonda = function() {
    this.tiradas = [];

    this.bolosDerribados = function(num_bolos) {
        this.tiradas.push(num_bolos);
        return this;
    };

    return this;
};


exports.puntuacionATexto = function(ronda) {
    var tiradas = ronda.tiradas;
    var primeraTirada = tiradas[0] || " ";
    var segundaTirada = tiradas[1] || " ";
    var acumulado = "";
    if (tiradas.length > 0) {
        var bolosDerribados = tiradas.reduce(function(acc, x) {
            return acc + x;
        });
        if (bolosDerribados >= 10 || tiradas.length == 2) {
            acumulado = bolosDerribados;
        }
    }

    var resultado = "[" + primeraTirada + "," + segundaTirada + "(" + acumulado + ")]";

    return resultado;
};
