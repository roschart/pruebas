# -*- coding: latin-1 -*-

import random
class Deck:
	def __init__(self,defDeck={}):
		''' Un Deck se confoma de un número de cartas determinado que se pasan por configuración
		(num, 'descripcion') o directamente una lista de cartas ['M','C']
		>>> d=Deck({'M':24,'C':32,'O':4})
        >>> d is None
        False
        >>> len(d)
        60
        '''
		self.cards=list()
		if(type(defDeck) is dict):
			for t,num in defDeck.items():
				self.cards+=[t]*num
		else:
			self.cards=defDeck
		self.shuffle()
	def __len__(self):
		return len(self.cards)
	def shuffle(self):
		random.shuffle(self.cards)
	def take(self,num):
		'''Devuelve un nuevo Deck con un num cartas extraidas del Deck actual de forma
		aleatoria
		>>> d=Deck({'M':24,'C':32,'O':4})
		>>> p=d.take(7)
		>>> type(p) is Deck
		True
		>>> len(p)
		7
		>>> len(d)
		53
		'''
		r=Deck()
		if num<=0:
			return r;
		r=Deck(self.cards[:num])
		#Truco para eliminar posiciones seguidas de una lista
		self.cards[:num]=[]
		return r;
	def add(self,deck):
		'''Suma cartas al deck actual
		>>> d=Deck({'M':24,'C':32,'O':4})
		>>> p=d.take(7)
		>>> p.add(d.take(1))
		>>> len(p)
		8
		>>> len (d)
		52
		'''
		self.cards+=deck.cards

	def getDef(self):
		'''Devuelve al definición del deck actual
		>>> d= Deck({'M':60})
		>>> d.getDef()=={'M':60}
		True
		>>> x=d.take(1)
		>>> d.getDef()=={'M':59}
		True
		'''
		defDeck=dict()
		for card in self.cards:
			defDeck.setdefault(card,0)
			defDeck[card]+=1
		return defDeck
		


if __name__ == "__main__":
    import doctest
    doctest.testmod()
