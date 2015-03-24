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
            throw new NotImplementedException();
    }
        public static Jefe dameJefe(){
            throw new NotImplementedException();
        }
        public static Jefe dameJefe(IObservador observador)
        {

            throw new NotImplementedException();
        }


        public static Jefe dameJefe<T>() where T : ITrabajador
        {
            return new Jefe(dameTrabajador<T>());
        }




        public static Jefe dameJefe<T>(IObservador observador) where T : ITrabajador
        {
            //TODO: Usar un NotificadorInformes
            throw new NotImplementedException();
        }

        public static DepartamentoCalidad dameDepartamentoCalidad()
        {
            throw new NotImplementedException();
        }

    }
}
