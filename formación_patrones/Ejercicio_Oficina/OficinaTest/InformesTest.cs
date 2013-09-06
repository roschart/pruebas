using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;
using Oficina.Entidades;
using Oficina.Factorias;
using Oficina.Interfaces;
using Oficina.Decoradores;

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
        [Test]
        public void unTrabajadorSePuedeDecorarConUnNotificador() {

            NotificadorInformesDecorador decorador = new NotificadorInformesDecorador(FactoriaOficina.dameTrabajador<Informatico>());
            Assert.IsInstanceOf<ITrabajador>(decorador);
            Assert.IsInstanceOf<IObservable>(decorador);
            Assert.AreEqual("Informe realizado por Informático", decorador.HacerInforme());
        }

        [Test]
        public void unTrabajadorSePuedeDecorarConUnCifradorDeInformes()
        {

            CifradorInformesDecorador decorador = new CifradorInformesDecorador(FactoriaOficina.dameTrabajador<Informatico>());
            Assert.IsInstanceOf<ITrabajador>(decorador);
            Assert.IsNotInstanceOf<IObservable>(decorador);
            Assert.AreEqual("Informe realizado por Informático#Informe cifrado#", decorador.HacerInforme());
        }
        [Test]
        public void unTrabajadorSePuedeDecorarConUnFirmadorDeInformes()
        {

            FirmadorInformesDecorador decorador = new FirmadorInformesDecorador(FactoriaOficina.dameTrabajador<Informatico>());
            Assert.IsInstanceOf<ITrabajador>(decorador);
            Assert.AreEqual("Informe realizado por Informático#Informe firmado#", decorador.HacerInforme());
        }

        [Test]
        public void SePuedenConcatenearDecoradoresDeInformes() {
            ITrabajador trabajador = new FirmadorInformesDecorador(new CifradorInformesDecorador(FactoriaOficina.dameTrabajador<Informatico>()));
            Assert.AreEqual("Informe realizado por Informático#Informe cifrado##Informe firmado#", trabajador.HacerInforme());
        
        }
        [Test]
        public void ElOrdenDeLosDecoradoresImporta() {
            ITrabajador trabajador1 = new FirmadorInformesDecorador(new CifradorInformesDecorador(FactoriaOficina.dameTrabajador<Informatico>()));
            ITrabajador trabajador2 = new CifradorInformesDecorador(new FirmadorInformesDecorador(FactoriaOficina.dameTrabajador<Informatico>()));
            Assert.AreNotEqual(trabajador1.HacerInforme(), trabajador2.HacerInforme());
            Assert.AreEqual("Informe realizado por Informático#Informe cifrado##Informe firmado#", trabajador1.HacerInforme());
            Assert.AreEqual("Informe realizado por Informático#Informe firmado##Informe cifrado#", trabajador2.HacerInforme());
        }
        [Test]
        public void UnEquipoEstaFormadoPorTrabajadores() {
            Equipo unEquipo = new Equipo();
            Becario unBecario = new Becario();
            Informatico unInformatico = new Informatico();
            unEquipo.AddTrabajador(unBecario);
            unEquipo.AddTrabajador(unInformatico);
            Assert.AreEqual(2, unEquipo.Count);
            Assert.AreSame(unBecario, unEquipo[0]);
            Assert.AreSame(unInformatico, unEquipo[1]);
        }

        [Test]
        public void UnEquipoSeComportaComoUnTrabajador() {
            Equipo unEquipo = new Equipo(new List<ITrabajador>() {new Becario(),new Ofinista()});
            Assert.IsInstanceOf<ITrabajador>(unEquipo);
        }

        [Test]
        public void TodosLosMiembrosDeUnEquipoHacenInformes()
        {
            Equipo unEquipo = new Equipo("Equipo Rojo",new List<ITrabajador>() { new Becario(), new Ofinista() });
            Assert.AreEqual("Equipo Rojo\n\tInforme realizado por Becario\n\tInforme realizado por Oficinista",unEquipo.HacerInforme());
        }

        [Test]
        public void ElNombrePorDefectoDeUnEquipoEsAnonimo()
        {
            Equipo unEquipo = new Equipo(new List<ITrabajador>() { new Becario(), new Ofinista() });
            Assert.AreEqual("Anónimo\n\tInforme realizado por Becario\n\tInforme realizado por Oficinista", unEquipo.HacerInforme());
        }
        [Test]
        public void UnEquipoPuedeContenerMasEquiposYTrabajadores() {

            Equipo unEquipo = new Equipo("Equipo pequeño");
            Becario unBecario = new Becario();
            Informatico unInformatico = new Informatico();
            unEquipo.AddTrabajador(unBecario);
            unEquipo.AddTrabajador(unInformatico);
            Equipo unEquipoCompuesto = new Equipo("Equipo Compuesto",new List<ITrabajador>() { unEquipo, new Ofinista() });
            Assert.AreEqual(2, unEquipoCompuesto.Count); //un Equipo y un oficinista
            Assert.AreEqual(3,unEquipoCompuesto.TotalMiembros);
            Assert.AreSame(unEquipoCompuesto[0], unEquipo);
            Assert.AreSame(((Equipo)unEquipoCompuesto[0])[0], unBecario);
            Assert.AreSame(((Equipo)unEquipoCompuesto[0])[1], unInformatico);
            string informe = "" +
                "Equipo Compuesto" +
                "\n\tEquipo pequeño" +
                "\n\t\tInforme realizado por Becario" +      //Una tabulación mas por nivel
                "\n\t\tInforme realizado por Informático" +
                "\n\tInforme realizado por Oficinista";

            Assert.AreEqual(informe, unEquipoCompuesto.HacerInforme());
        
        }
        [Test]
        public void UnEquipoSePuedeDecorarComoCualquierTrabajador() {
            Equipo unEquipo = new Equipo(new List<ITrabajador>() { new Becario(), new Ofinista() });
            Assert.AreEqual("Anónimo\n\tInforme realizado por Becario\n\tInforme realizado por Oficinista#Informe cifrado#",new CifradorInformesDecorador(unEquipo).HacerInforme());
        }
    }
}
