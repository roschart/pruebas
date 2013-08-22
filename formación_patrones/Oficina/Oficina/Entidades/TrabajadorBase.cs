using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    public abstract class TrabajadorBase:IObservable,ITrabajador
    {
        private List<IObservador> observadores;

        protected TrabajadorBase(){
            this.observadores = new List<IObservador>();
        }

       

        public void agregarObservador(IObservador observador)
        {
            this.observadores.Add(observador);
        }

        public void notificar(string informe)
        {
            foreach (IObservador obj in this.observadores) {
                obj.onNotificacion(informe);
            }
        }

        public abstract string HacerInforme();
    }
}
