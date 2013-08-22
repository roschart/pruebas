using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Entidades;
using Oficina.Interfaces;

namespace Oficina.Factorias
{
    public static class  FactoriaOficina
    {
        public static Jefe dameJefe(){
            return new Jefe(new Becario());
        }
        public static Jefe dameJefe(IObservador calidad)
        {
            Becario unBecario = new Becario();
            unBecario.agregarObservador(calidad);
            return new Jefe(unBecario);
        }


        public static Jefe dameJefe<T>() where T : ITrabajador
        {
            return new Jefe(Activator.CreateInstance<T>());
        }

        public static DepartamentoCalidad dameDepartamentoCalidad()
        {
            return new DepartamentoCalidad();
        }



        public static Jefe dameJefe<T1>(IObservador iObservador) where T1 : ITrabajador, IObservable
        {
            T1 unITrabajador = Activator.CreateInstance<T1>();
            unITrabajador.agregarObservador(iObservador);
            return new Jefe(unITrabajador);
        }
    }
}
