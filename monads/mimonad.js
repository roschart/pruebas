//funciones simples

var doble=function(x){return 2*x};
var triple=function(x){return 3*x};

console.log(triple(doble(2)));

//Nomad para depurar
//Función que hace el wrap
var m_result=function(x){return [x,'']};

console.log(m_result(2)); //-> [2,'']

var m_bind=function(f,x){
	r=f(x[0]);
	s=x[1]+ ' ' + f;
	return [r,s];
}

d=m_bind(triple,m_bind(doble,m_result(2)));
console.log(d);
