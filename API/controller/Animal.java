
//static
import java.util.Scanner;
import java.util.*;

public class Animal {
	public static final double FAVNUMBER = 1.618;

	private String name;
	private int weight;
	private boolean hasOwner = false;
	private byte age;
	private long uniqueID;
	private char favoriteChar;
	private double speed;
	private float height;
	protected static int numberOfAnimals = 0;
	static Scanner userinput = new Scanner(System.in);

	public Animal() {
		numberOfAnimals++;
		int sumOfNumbers = 5+1;
		System.out.println("testing" + sumOfNumbers);
		int diffOfNumbers = 5+1;
		System.out.println("testing" + diffOfNumbers);
	}

	public static void main(String[] args) {

		Animal theAnimal = new Animal();
	}

}
