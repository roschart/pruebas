using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Oficina.Interfaces
{
   public interface IObservador
    {
        void onNotificacion(string informe);
    }
}
