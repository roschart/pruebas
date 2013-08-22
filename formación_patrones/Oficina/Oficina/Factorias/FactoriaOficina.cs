using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Entidades;
using Oficina.Interfaces;
using Oficina.Decoradores;

namespace Oficina.Factorias
{
    public static class  FactoriaOficina
    {
        public static ITrabajador dameTrabajador<T>() where T:ITrabajador{
            return Activator.CreateInstance<T>();
    }
        public static Jefe dameJefe(){
            return dameJefe<Becario>();
        }
        public static Jefe dameJefe(IObservador observador)
        {

            return dameJefe<Becario>(observador);
        }


        public static Jefe dameJefe<T>() where T : ITrabajador
        {
            return new Jefe(dameTrabajador<T>());
        }




        public static Jefe dameJefe<T>(IObservador observador) where T : ITrabajador
        {
            NotificadorInformesDecorador decorador = new NotificadorInformesDecorador(dameTrabajador<T>());
            decorador.agregarObservador(observador);
            return new Jefe(decorador);
        }

        public static DepartamentoCalidad dameDepartamentoCalidad()
        {
            return new DepartamentoCalidad();
        }

    }
}
