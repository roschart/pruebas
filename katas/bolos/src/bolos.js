var Ronda = require('./ronda');
exports.Marcador = function(nombre) {
    var self = this;
    this.nombre = nombre;
    this.rondas = [Ronda.CrearRonda()];

    //Fuciones 'Privadas'
    var ronda = function ronda() {
        return self.rondas.slice(-1).pop();
    };

    //   function estadoPrimeraTirada(number) {
    //       this.tiradas.push(number);
    //       if (this.semipleno) {
    //           this.bonus += number;
    //       }
    //       this.tirada = 2;
    //       this.estadoTirada = estadoSegundaTirada;
    //       return this;
    //   }

    //   function estadoSegundaTirada(number) {
    //       var anterior = this.tiradas[this.tiradas.length - 1];
    //       this.tiradas.push(number);
    //       this.tirada = 1;
    //       this.ronda++;
    //       if (anterior + number < 10) {
    //           this.puntuacion = this.tiradas.reduce(function(acc, x) {
    //               return acc + x;
    //           });
    //       } else {
    //           this.semipleno = true;
    //       }

    //       this.estadoTirada = estadoPrimeraTirada;
    //       return this;
    //   }


    //Fuciones públicas
    this.getPuntuacion = function() {
       return Ronda.puntuacionATexto(ronda());
    };

    this.numRondas = function() {
        return this.rondas.length;
    };

    this.tirada = function() {
        //Se obtiene el último elemento del array de rondas
        return ronda().tiradas.length + 1;
    };


    this.bolosDerribados = function(number) {
        ronda().bolosDerribados(number);
        return this;
    };


    return this;
};
