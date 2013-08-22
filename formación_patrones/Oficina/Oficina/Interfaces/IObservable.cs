using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Oficina.Interfaces
{
    public interface IObservable
    {
         void agregarObservador(IObservador observador);
         void notificar(string informe);
    }
}
