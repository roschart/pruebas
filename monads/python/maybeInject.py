# -*- coding: latin-1 -*-
'''Esta parte serían las librerias)'''
def sumar(self,x):
	return self.valor+x


def dividir(self,x):
	return self.valor/x


'''Esto es las tripas del sistema que solo se desarrollan una vez'''
class Contexto:
	def __init__(self,valor):
		self.valor=valor
	def __str__(self):
		if (self.valor):
			return "Just(%s)" % self.valor.__str__()
		return "Nadita"

def lifting(fun):
	def inner (*v,**k):
		self=v[0]
		if self.valor==None:
			return Contexto(None)
		try:
			return Contexto(fun(*v,**k))

		except:
			return Contexto(None)
	return inner


def injectar (clase,funciones):
	for f in funciones:
		setattr(clase,f.__name__,lifting(f))

injectar(Contexto,[sumar,dividir])


'''Ejemplo de como usarlo'''

x=Contexto(10).sumar(2)
print (x)
x=Contexto(None).sumar(2)
print (x)
x=Contexto(10).sumar(2).dividir(3)
print (x)
x=Contexto(10).sumar(2).dividir(0)
print (x)



