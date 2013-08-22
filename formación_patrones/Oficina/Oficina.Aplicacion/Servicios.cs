using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Entidades;
using Oficina.Interfaces;

namespace Oficina.Aplicacion
{
    /// <summary>
    /// Estos son los servicios que se ofrecen al exterior.
    /// En este ejemplo se configurar multiples servicios para hacer lo mismo
    /// </summary>
    public static class Servicios
    {
        /// <summary>
        /// Este método da los informes por defecto, que en nuetra lógica de negocio se encarga el becario
        /// </summary>
        /// <returns></returns>
        public static String DameInforme()
        {
            return Factorias.FactoriaOficina.dameJefe().pedirInforme();
        }
        /// <summary>
        /// El informe avanzado lo realizará un trabajador, aunque esto queda oculto a la capa exterior
        /// </summary>
        /// <returns></returns>
        public static String DameInformeAvanzado()
        {
            return Factorias.FactoriaOficina.dameJefe<Informatico>().pedirInforme();
        }
        /// <summary>
        /// Un ejemplo de comos sería un API para una capa externa que queramos que conozca algo del interior
        /// Esto permite que usar un tipo de trabajador determinado.
        /// </summary>
        /// <typeparam name="T1"></typeparam>
        /// <returns></returns>
        public static string DameInforme<T1>() where T1:ITrabajador
        {
            return Factorias.FactoriaOficina.dameJefe<T1>().pedirInforme();
        }
    }

}
