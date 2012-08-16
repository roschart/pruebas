# -*- coding: latin-1 -*-
from deck import Deck

def deckContiene(deck,deckDef):
	''' Devuelve true if si el deck cumple tener las cartas de la lista
	>>> d=Deck({'M':30,'C':30})
	>>> deckContiene(d,{'M':20})
	True
	>>> deckContiene(d,{'M':31})
	False
	'''
	defPrincipal=deck.getDef()
	for tipo, num in deckDef.items():
		defPrincipal.setdefault(tipo,0)
		if(defPrincipal[tipo]<num):
			return False
	return True

def hastaFinOContiene(deck,deckconfig):
	'''Devuelve el número en el que se consiguió obtener el objetivo
	o None
	>>> d=Deck({'M':10})
	>>> hastaFinOContiene(d,{'M':1})
	1
	>>> r=hastaFinOContiene(d,{'X':1})
	>>> r==None
	True
	'''
	deckInicio=Deck()
	for i in range(len(deck)):
		deckInicio.add(deck.take(1))
		if (deckContiene(deckInicio,deckconfig)):
			return i+1
	return None

def printResults(listado):
	d=dict()
	for v in listado:
		d.setdefault(v,0)
		d[v]+=1
	l=sorted(d.items(), key= lambda resultado:resultado[0])
	total=sum(d.values())
	acc=0.0
	for rep,valor in l:
		acc+=valor
		print ("%2d ->%4d -> % 5.2f -> % 5.2f" % (rep,valor,float(valor)/total*100,acc/total*100)) 
	

if __name__ == "__main__":
	import testconfig
	import doctest
	doctest.testmod()
	resultados=[]
	for i in range(testconfig.num_tests):
		deck=Deck(testconfig.deckDef)
		resultados.append(hastaFinOContiene(deck,testconfig.goal))
	printResults (resultados)
