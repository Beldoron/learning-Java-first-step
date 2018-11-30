
public class Main {

    public static void main(String[] args){

        Product p1 = new Product("vacuum cleaner", 100);
        Product p2 = new Product("pencil", 3);
        Product p3 = new Product("bike", 300);
        Product p4 = new Product("water", 1000);
        Product p5 = new Product("air", 10);

        ShoppingCart card1 = new ShoppingCart();

        // you can add Products to the new shopping card with card1.add(pX)

        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p1);
        card1.add(p2);
        card1.add(p2);
        card1.add(p2);
        card1.add(p2);
        card1.add(p2);
        card1.add(p3);
        card1.add(p3);
        card1.add(p3);
        card1.add(p4);
        card1.add(p5);
        card1.add(p5);
        card1.add(p5);
        card1.add(p5);


        // you print the card in the consol with card1.print()
        card1.print();
        // you can replace a product that is sold out with card1.replace(numberOfProduct, newProductName, newPrice, numberOfNewItems)

        card1.replace(p5, "dogs", 100, 4);

    }


}



