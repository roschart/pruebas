exports.Marcador = function(nombre) {
    this.nombre = nombre;
    this.puntuacion = 0;
    this.ronda = 1;
    this.tirada = 1;
    this.tiradas = [];
    this.bonus=0;
    this.estadoTirada = estadoPrimeraTirada;
    this.semipleno=false;
    
    this.getPuntuacion=function(){
   	return "[ , ()]" 
    }

    function estadoPrimeraTirada(number) {
        this.tiradas.push(number);
	if(this.semipleno){
		this.bonus+=number
	}
        this.tirada = 2;
        this.estadoTirada = estadoSegundaTirada;
        return this;
    }

    function estadoSegundaTirada(number) {
        var anterior = this.tiradas[this.tiradas.length - 1];
        this.tiradas.push(number);
        this.tirada = 1;
        this.ronda++;
        if (anterior + number < 10) {
            this.puntuacion = this.tiradas.reduce(function(acc, x) {
                return acc + x;
            });
        }else{
		this.semipleno=true;
	}

        this.estadoTirada = estadoPrimeraTirada;
        return this;
    }

    this.bolosDerribados = function(number) {
        this.estadoTirada(number);
        return this;
    };

    return this;
};
