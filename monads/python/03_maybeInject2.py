# -*- coding: latin-1 -*-
'''Esta parte serían las librerias)'''
def sumar(self,x):
	return self.valor+x

def dividir(self,x):
	return self.valor/x

def negar(self):
	return -self.valor


'''Esto es las tripas del sistema que solo se desarrollan una vez'''
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

def lifting(fun):
	def inner (*v,**k):
		self=v[0]
		if self.valor==None:
			c=Contexto(None)
			c.states=self.states+["%s(Nothing)->Nothing" % (fun.__name__)]
			return c
		try:
			c=Contexto(fun(*v,**k))
			c.states=self.states+["%s (%s,%s)->%s" % (fun.__name__,v[1:],k,c.valor)]
			return c

		except:
			'''Esto es una práctica peligrosa ya que se captura cualquier error'''
			c=Contexto(None)
			c.states=self.states+["%s(Nothing)->Exception" % (fun.__name__)]
			return c
	return inner


def injectar (clase,funciones):
	for f in funciones:
		setattr(clase,f.__name__,lifting(f))

injectar(Contexto,[sumar,dividir,negar])


'''Ejemplo de como usarlo'''

x=Contexto(16).sumar(2).dividir(3).sumar(4).negar()
print(x)
print(x.detalle())
x=Contexto(16).sumar(2).dividir(0).sumar(5)
print(x)
print(x.detalle())
