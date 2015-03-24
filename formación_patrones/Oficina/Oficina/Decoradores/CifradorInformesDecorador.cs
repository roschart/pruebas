using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Decoradores
{
    public class CifradorInformesDecorador : ITrabajador
    {
        private readonly ITrabajador _decorado;
        public CifradorInformesDecorador(ITrabajador decorado) { 
            this._decorado=decorado;
        }
        public  string HacerInforme()
        {
            return this._decorado.HacerInforme() + "#Informe cifrado#";
        }
    }
}
