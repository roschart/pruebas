# -*- coding: latin-1 -*-
'''Esta parte serían las librerias (Lógica de negocio)
El truco para facilitar la comprensión es que se debe
usar como primer parámetro el self que tendrá el valor en self.valor
estó lo he echo así por que ya se que las funciones se van ha ejecutar
en un conxtexto.
Se podría haber realidado
>def sumar (x,y) return x+y;
pero entonces no quedaría claro por que sumar, tiene un solo parámetro
en el siguiente código
>Contexto(10).sumar(4)
ló único que tienen que cumplir las l
'''
############ Parte Librería (Lógica de negocio) ############
def sumar(self,x):
	return self.valor+x

def dividir(self,x):
	if x==0:
		return None
	return self.valor/x

def negar(self):
	return -self.valor

############ Parte CORE ############
'''Esto es las tripas del sistema que solo se desarrollan una vez
Esta parte se implementaría un ficheros aparte y sería el core del sistema
'''
class Contexto:
	def __init__(self,valor):
		self.valor=valor
		self.states=["Creando %s" % (self.__str__())]
	def __str__(self):
		if (self.valor):
			return "Just(%s)" % self.valor.__str__()
		return "Nothing"
	def detalle(self):
		return "%s->[%s]" %(self.__str__(),self.states) 



''' Este bind es parecido al de haskell pero se cambia un poco
En haskell
   ma -> (a -> mb) ->m b
En esté código
   ma -> (ma -> b) ->m b
'''
def bind(fun):
	def inner(*v,**k):
		return Contexto(fun(*v,**k));
	#Se copia el nombre de la función orignail
        #para que es decorador state funione correctamente'''
	inner.__name__=fun.__name__
	return inner

def mayBeDecorator(fun):
	'''Un bind que no propaga los Nothing'''
	def maybeinner(*v,**k):
		self=v[0]
		if self.valor==None:
			return Contexto(None)
		return fun(*v,**k)
	maybeinner.__name__=fun.__name__
	return maybeinner

def stateDecorator(fun):
	'''Un bind que guarda en Contexto.states los logs de
	las operaciones realizadas'''
	def stateinner(*v,**k):
		self=v[0]
		r=fun(*v,**k)
		mensaje= "%s (%s,%s)->%s" % (fun.__name__,v[1:],k,r.valor)
		if(self.states):
			r.states=self.states+[mensaje]
		else:
			r.states=[mensaje]
		return r
	return stateinner


def injectar2(clase,funciones,decoradores):
	for f in funciones:
		foo=bind(f)
		for d in decoradores:
			foo=d(foo)
		setattr(clase,f.__name__,foo)
#Cambiando el orden de los decoradores también funciona
injectar2(Contexto,[sumar,dividir,negar],[stateDecorator,mayBeDecorator])
		 
############FIN de la parte CORE ############		

'''Ejemplo de como usarlo'''

x=Contexto(20).sumar(4).sumar(10)
print(x)
x=Contexto(None).sumar(4).sumar(10)
print(x)
x=Contexto(20).sumar(4).dividir(0)
print(x)
x=Contexto(20).sumar(4).sumar(10).dividir(10)
print(x)
