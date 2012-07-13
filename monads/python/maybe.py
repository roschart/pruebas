'''
return :: a -> M a
(>>=)  :: M a -> ( a -> M b ) -> M b

'''
class Maybe:
	def __init__(self,valor=None):
		self.valor=valor
	def __str__(self):
		if(self.valor):
			return "Just(%s)" % str(self.valor)
		return "None"
	def bind(self,func):
		if(self.valor):
			return func(self.valor)
		return Maybe(None)
	def suma1(self):
		return Maybe(self.valor+1)
#cambio el return por inject
def inject (a):
	return Maybe(a)

def bind (maybe, func):
	if (maybe.valor==None):
		return Maybe(None)
	return func(maybe.valor)

def maybeSuma1(x):
	return Maybe(x+1)

x=bind(inject(4),maybeSuma1)

print (x) #>>Just(5)

x=inject(6).bind(maybeSuma1)
print (x)
x=inject(1).suma1()
print (x)
x=inject(None).bind(maybeSuma1)
print(x)
'''
El problema desde mi punto de vista de incrustar las funciones en la clase
es que necesitas definir todas las funicones en la clase y que realmente no funciona le None,
así que no es un Monad
'''
x=inject(1).suma1().suma1().suma1()
print (x)
#x=inject(None).suma1()->Crash
