package balirac.videoStore;

import static org.junit.Assert.*;

import org.junit.Test;

public class CustomerTest {

	@Test
	public void AlquilerDeUnaPeliculaInfantil() {
		Customer customer=new Customer("Jose");
		customer.addRental(new Rental(new Movie("Buscando a Nemo",Movie.CHILDRENS),3));
		String result=customer.statement();
		String expected="Rental Record for Jose\n"
				+"\tBuscando a Nemo\t1.5\n"
				    
				+"Amount owed is 1.5\n"
				+"You earned 1 frequent renter points";
		assertEquals(expected,result);
	}
	
	@Test
	public void AlquilerDeDosPeliculasDistintoTipo() {
		Customer customer=new Customer("Jose");
		customer.addRental(new Rental(new Movie("Buscando a Nemo",Movie.CHILDRENS),3));
		customer.addRental(new Rental(new Movie("Birdman",Movie.NEW_RELEASE),5));
		String result=customer.statement();
		String expected="Rental Record for Jose\n"
				+"\tBuscando a Nemo\t1.5\n"
				+"\tBirdman\t15.0\n"
				+"Amount owed is 16.5\n"
				+"You earned 3 frequent renter points";
		assertEquals(expected,result);
	}

}
