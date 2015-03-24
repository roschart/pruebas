using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    /// <summary>
    /// Clase que representea a un Oficinista
    /// Los becarios se comportan como un trabajador
    /// </summary>
   public class Ofinista:ITrabajador
    {
        public  string HacerInforme()
        {
            return "Informe realizado por Oficinista";
        }
    }
}
