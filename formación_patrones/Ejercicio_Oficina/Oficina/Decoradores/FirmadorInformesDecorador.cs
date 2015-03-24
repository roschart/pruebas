using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Decoradores
{
    public class FirmadorInformesDecorador : ITrabajador
    {
        public FirmadorInformesDecorador(ITrabajador decorado)
        {
            throw new NotImplementedException();
        }
        public  string HacerInforme()
        {
            throw new NotImplementedException();
        }
    }
}
