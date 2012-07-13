//La idea es hacer algo estilo jquery
//unit(2).double().value->4
//

var unit=function(x){
	this.value=x;
	this.double=function(){
		this.value=this.value*2;
		return this;
	}
	return this;
}

console.log(unit(2).value);
console.log(unit(2).double().value);


var foo=function(type){
	return function(){
		console.log("dentro de foo");
		return this;
	};
}

console.log(unit(2)(3));
