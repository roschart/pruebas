using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Interfaces;

namespace Oficina.Entidades
{
    public class Equipo:ITrabajador
    {
        private readonly List<ITrabajador> _miembros;
        private readonly string _nombreEquipo;


         public Equipo():this(null,null){
        }

         public Equipo(string nombre):this(nombre,null) {
         }

         public Equipo(List<ITrabajador> list):this(null,list)
         {
         }

         public Equipo(string nombre, List<ITrabajador> list)
         {
             if (nombre == null) {
                 nombre = "Anónimo";
             }
             if (list == null) {
                 list = new List<ITrabajador>();
             }
             this.Separator = "\n\t";
             this._nombreEquipo = nombre;
             this._miembros = list;
         }

        public void AddTrabajador(ITrabajador trabajador)
        {
            this._miembros.Add(trabajador);
        }


        public int Count { get { return this._miembros.Count; } }

        public ITrabajador this[int index]{get{
            return this._miembros[index];
        }}

        public string Separator { get; set; }



        public string HacerInforme()
        {

            List<string> informes = new List<string>() { this._nombreEquipo};
            foreach (ITrabajador trabajador in this._miembros) {
                if (trabajador.GetType() == typeof(Equipo)) {
                    ((Equipo)trabajador).Separator = this.Separator + '\t';
                }
                informes.Add(trabajador.HacerInforme());
                
            }
            
            return String.Join(this.Separator, informes);
        }

        public int TotalMiembros { get {
            int count = 0;
            this._miembros.ForEach(x => {
                if (x.GetType() == typeof(Equipo))
                {
                    count += ((Equipo)x).TotalMiembros;
                }
                else {
                    count++;
                }
            });

            return count;
        } }
    }
}
