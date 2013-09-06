using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    /// <summary>
    /// Clase que representea a un Becario
    /// Los becarios se comportan como un trabajador
    /// </summary>
   public class Becario:ITrabajador
    {
   
        public string HacerInforme()
        {
            return  "Informe realizado por Becario";

        }

    }
}
