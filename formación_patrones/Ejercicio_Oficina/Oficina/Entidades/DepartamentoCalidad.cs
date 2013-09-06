using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    public class DepartamentoCalidad:IObservador
    {


        public DepartamentoCalidad() {
            throw new NotImplementedException();
        }

        public List<string> Informes { get { throw new NotImplementedException(); } }

        public void onNotificacion(string informe)
        {
            throw new NotImplementedException();
        }
    }
}
