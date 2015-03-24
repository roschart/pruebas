using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Decoradores
{
    public class CifradorInformesDecorador : ITrabajador
    {
        public CifradorInformesDecorador(ITrabajador decorado) {
            throw new NotImplementedException();
        }
        public  string HacerInforme()
        {
            throw new NotImplementedException();
        }
    }
}
