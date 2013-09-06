using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    //TODO:Implementar y cambiar lo necesario
    public class Equipo:ITrabajador
    {
        public Equipo()
        {
            throw new NotImplementedException();
        }

        public Equipo(string p)
        {
             throw new NotImplementedException();
        }

        public Equipo(List<ITrabajador> list)
        {
            throw new NotImplementedException();

        }


        public Equipo(string p, List<ITrabajador> list)
        {
            throw new NotImplementedException();
        }
       
        public void AddTrabajador(ITrabajador trabajador)
        {
            throw new NotImplementedException();
        }
        public string HacerInforme()
        {
            throw new NotImplementedException();
        }


        //TODO: Modificar las propiedades como corresponda
        public int Count { get; set; }

        public ITrabajador this[int index] { get {
            throw new NotImplementedException();
        } }

        public int TotalMiembros { get; set; }
    }
}
