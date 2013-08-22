using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;
using Oficina.Entidades;
using Oficina.Factorias;
using Oficina.Interfaces;

namespace OficinaTest
{
    [TestFixture]
    public class InformesTest
    {
        [Test]
        public void CuandoUnJefePideUnInofeLoHaceUnBecario() {
            Assert.AreEqual("Informe realizado por Becario", FactoriaOficina.dameJefe().pedirInforme());
        
           }
        [Test]
        public void AUnJefeSeLePuedeInyectarCualquuierClaseImplementeITrabajador()
        {
            Assert.AreEqual("Informe realizado por Informático", FactoriaOficina.dameJefe<Informatico>().pedirInforme());
            Assert.AreEqual("Informe realizado por Oficinista", FactoriaOficina.dameJefe<Ofinista>().pedirInforme());
        }
        [Test]
        public void SePuedeCrearUnJefeConUnDepartamentoDeCalidadQueObserveLosInformes() {
            DepartamentoCalidad calidad = FactoriaOficina.dameDepartamentoCalidad();
            Assert.AreEqual(0, calidad.Informes.Count);
            FactoriaOficina.dameJefe((IObservador)calidad).pedirInforme();
            Assert.AreEqual(1, calidad.Informes.Count);
            Assert.AreEqual("Informe realizado por Becario", calidad.Informes[0]);
        }

        [Test]
        public void SePuedeCrearUnJefeConUnDepartamentoDeCalidadQueObserveLosInformesDeCualquierITrabajador()
        {
            DepartamentoCalidad calidad = FactoriaOficina.dameDepartamentoCalidad();
            Assert.AreEqual(0, calidad.Informes.Count);
            FactoriaOficina.dameJefe<Informatico>((IObservador)calidad).pedirInforme();
            Assert.AreEqual(1, calidad.Informes.Count);
            Assert.AreEqual("Informe realizado por Informático", calidad.Informes[0]);
            FactoriaOficina.dameJefe<Ofinista>((IObservador)calidad).pedirInforme();
            Assert.AreEqual(2, calidad.Informes.Count);
            Assert.AreEqual("Informe realizado por Oficinista", calidad.Informes[1]);
        }

        [Test]
        public void SiNoSeEspecificaNoSeMonitorizanLosInformes()
        {
            DepartamentoCalidad calidad = FactoriaOficina.dameDepartamentoCalidad();
            Assert.AreEqual(0, calidad.Informes.Count);
            FactoriaOficina.dameJefe().pedirInforme();
            Assert.AreEqual(0, calidad.Informes.Count);
        }
        [Test]
        public void SiNoSeEspecificaNoSeMonitorizanLosInformesDeInformatico()
        {
            DepartamentoCalidad calidad = FactoriaOficina.dameDepartamentoCalidad();
            Assert.AreEqual(0, calidad.Informes.Count);
            FactoriaOficina.dameJefe<Informatico>().pedirInforme();
            Assert.AreEqual(0, calidad.Informes.Count);
        }
        [Test]
        public void SiNoSeEspecificaNoSeMonitorizanLosInformesDeOficinista()
        {
            DepartamentoCalidad calidad = FactoriaOficina.dameDepartamentoCalidad();
            Assert.AreEqual(0, calidad.Informes.Count);
            FactoriaOficina.dameJefe<Informatico>().pedirInforme();
            Assert.AreEqual(0, calidad.Informes.Count);
        }
    }
}
