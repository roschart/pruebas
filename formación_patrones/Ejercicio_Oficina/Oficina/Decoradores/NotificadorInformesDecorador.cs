using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Decoradores
{
    public class NotificadorInformesDecorador : ITrabajador, IObservable
    {

        public NotificadorInformesDecorador(ITrabajador decorado)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Decora el método hacer informe provocando la notificación
        /// </summary>
        /// <returns></returns>
        public string HacerInforme()
        {
            throw new NotImplementedException();
        }

        public void agregarObservador(IObservador observador)
        {
            throw new NotImplementedException();
        }
    }

}
