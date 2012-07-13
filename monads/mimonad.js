//funciones simples

var doble=function(x){return 2*x};
var triple=function(x){return 3*x};

console.log(triple(doble(2)));

//Nomad para depurar
//FunciÃ³n que hace el wrap
var m_result=function(x){return [x,'']};

console.log(m_result(2)); //-> [2,'']

var m_bind=function(f,x){
	r=f(x[0]);
	s=x[1]+ ' ' + f;
	return [r,s];
}

d=m_bind(triple,m_bind(doble,m_result(2)));
console.log(d);
//Otra forma
console.log("Ejemplo usando decoración \n Esta técnica se denomina lifting");
function deco_bind(f){
	var deco=function()	{
		r=f(arguments[0][0]);
		s=arguments[0][1] + ' ' + f;
		return [r,s];
	}
	return deco;
}

doble=deco_bind(doble);
triple=deco_bind(triple);
b=doble(triple(m_result(3)));
console.log(b);

// Otra idea parar implementar
//  unit(2).doble().triple().value()
