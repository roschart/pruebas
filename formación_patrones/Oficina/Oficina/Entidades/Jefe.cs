using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    public class Jefe
    {
        private ITrabajador trabajador;
        public Jefe(ITrabajador trabajador) {
            this.trabajador = trabajador;
        }

        public string pedirInforme() {
            return this.trabajador.HacerInforme();
        }
        
    }
}
