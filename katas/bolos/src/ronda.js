exports.CrearRonda = function() {
    this.tiradas = [];

    this.bolosDerribados = function(num_bolos) {
        this.tiradas.push(num_bolos);
        return this;
    };

    return this;
};


exports.puntuacionATexto = function(ronda) {
    return "[ , ()]";
};
