# -*- coding: latin-1 -*-
'''Esta parte serían las librerias)'''
def sumar(self,x):
	return self.valor+x

def dividir(self,x):
	if x==0:
		return None
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

def bind(fun):
	def inner(*v,**k):
		return Contexto(fun(*v,**k));
	inner.__name__=fun.__name__
	return inner

#def lifting(fun):
#	def inner (*v,**k):
#		self=v[0]
#		if self.valor==None:
#			c=Contexto(None)
#			c.states=self.states+["%s(Nothing)->Nothing" % (fun.__name__)]
#			return c
#		try:
#			c=Contexto(fun(*v,**k))
#			c.states=self.states+["%s (%s,%s)->%s" % (fun.__name__,v[1:],k,c.valor)]
#			return c
#
#		except:
#			'''Esto es una práctica peligrosa ya que se captura cualquier error'''
#			c=Contexto(None)
#			c.states=self.states+["%s(Nothing)->Exception" % (fun.__name__)]
#			return c
#	return inner


def mayBe(fun):
	def maybeinner(*v,**k):
		self=v[0]
		if self.valor==None:
			return Contexto(None)
		return fun(*v,**k)
	maybeinner.__name__=fun.__name__
	return maybeinner

def state(fun):
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
injectar2(Contexto,[sumar,dividir,negar],[state,mayBe])
		 
		

'''Ejemplo de como usarlo'''

x=Contexto(20).sumar(4).sumar(10)
print(x)
x=Contexto(None).sumar(4).sumar(10)
print(x)
x=Contexto(20).sumar(4).dividir(0)
print(x)
