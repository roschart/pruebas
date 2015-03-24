using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Decoradores
{
    public class NotificadorInformesDecorador:ITrabajador,IObservable
    {
        private readonly ITrabajador _decorado;
        private readonly List<IObservador> _observadores;

        public NotificadorInformesDecorador(ITrabajador decorado) {
            this._decorado = decorado;
            this._observadores = new List<IObservador>();
        }

        /// <summary>
        /// Decora el método hacer informe provocando la notificación
        /// </summary>
        /// <returns></returns>
        public string HacerInforme()
        {
            string informe = this._decorado.HacerInforme();
            this._observadores.ForEach(x=>x.onNotificacion(informe));
            return informe;
        }

        public void agregarObservador(IObservador observador)
        {
            if (observador != null) {
                this._observadores.Add(observador);
            }
        }

    }
}
