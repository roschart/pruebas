# -*- coding: latin-1 -*-
'''
return :: a -> M a
(>>=)  :: M a -> ( a -> M b ) -> M b

'''

def innerBind(func):
	def bind(self):
		if(self.valor==None):
			return Maybe(None)
		return func(self)
	return bind

class Maybe:
	def __init__(self,valor=None):
		self.valor=valor
	def __str__(self):
		if(self.valor):
			return "Just(%s)" % str(self.valor)
		return "Nothing"
	def bind(self,func):
		if(self.valor):
			return func(self.valor)
		return Maybe(None)
	@innerBind
	def suma1(self):
		return Maybe(self.valor+1)

	def suma(self,adicion):
		@innerBind
		def inner(self):
			return Maybe(self.valor+adicion)
		return inner(self)
	
#cambio el return por contextualizar
def contextualizar (a):
	return Maybe(a)

def bindMaybe (maybe, func):
	if (maybe.valor==None):
		return Maybe(None)
	return func(maybe.valor)

def maybeSuma1(x):
	return Maybe(x+1)
print("Primer ejemplo")
x=bindMaybe(contextualizar(4),maybeSuma1)
print (x) #>>Just(5)
x=bindMaybe(bindMaybe(contextualizar(4),maybeSuma1),maybeSuma1)
print (x) #>>Just(6)
x=bindMaybe(bindMaybe(contextualizar(None),maybeSuma1),maybeSuma1)
print (x) #>>Nothing

x=contextualizar(6).bind(maybeSuma1) 
print (x)#>>Just(7)

x=contextualizar(1).suma1()
print (x)
x=contextualizar(None).bind(maybeSuma1)
print(x) #>>Just(2=
x=contextualizar(1).suma1().suma1().suma1()
print (x)#>>Just(4)
x=contextualizar(None).suma1()
print (x)#>>None

def secuencia(*arg):
	"""
	arg[0]= dato
	arg[1]= inject
	arg[2:]=funciones monodicas
	"""
	inject=arg[1](arg[0])
	for v in arg[2:]:
		inject=bindMaybe(inject,v)
	return inject

x=secuencia(5,contextualizar,maybeSuma1,maybeSuma1,maybeSuma1,maybeSuma1,maybeSuma1)
print(x) #>>10
x=secuencia(None,contextualizar,maybeSuma1,maybeSuma1,maybeSuma1,maybeSuma1,maybeSuma1)
print(x) #>>None

x=contextualizar(4).suma(10);
print (x) #>14
x=contextualizar(None).suma(10);
print (x) #>None
x=contextualizar(4).suma(10).suma1();
print (x) #>15
