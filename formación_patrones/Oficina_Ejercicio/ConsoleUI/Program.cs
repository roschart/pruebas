using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Oficina.Aplicacion;
using Oficina.Entidades;

namespace ConsoleUI
{
    
        

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Servicios.DameInforme());
            Console.WriteLine(Servicios.DameInformeAvanzado());
            Console.WriteLine(Servicios.DameInforme<Ofinista>());
            Console.ReadKey();
        }
    }
}
