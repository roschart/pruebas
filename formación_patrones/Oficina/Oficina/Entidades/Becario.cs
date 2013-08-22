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
   public class Becario:TrabajadorBase
    {
   

       public Becario():base() {
   
       }
        public override string HacerInforme()
        {
            string informe = "Informe realizado por Becario";
            this.notificar(informe);
            return informe ;
        }

    }
}
