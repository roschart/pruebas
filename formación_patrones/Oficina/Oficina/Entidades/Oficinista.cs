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
   public class Ofinista:TrabajadorBase
    {
        public override string HacerInforme()
        {
            string informe="Informe realizado por Oficinista";
            this.notificar(informe);
            return informe;
        }
    }
}
