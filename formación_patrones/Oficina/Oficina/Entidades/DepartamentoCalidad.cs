using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    public class DepartamentoCalidad:IObservador
    {
        private List<string> _informes;

        public DepartamentoCalidad() {
            this._informes = new List<string>();
        }

        public List<string> Informes { get { return this._informes; } }

        public void onNotificacion(string informe)
        {
            this._informes.Add(informe);
        }
    }
}
