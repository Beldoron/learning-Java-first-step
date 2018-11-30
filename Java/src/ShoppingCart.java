
import java.util.*;
import java.util.stream.Collectors;

public class ShoppingCart {

    private List<Product> products;
    private List<Product> theList;
    private List<Product> theNewList;
    private List<Product> replaceList;
    private int totalPrice;
    private int totalNewPrice;

    public ShoppingCart() {
        products = new ArrayList<>();

    }

    public void add(Product product) {
        products.add(product);

    }

    public void print() {
// Inventory explanation

        System.out.println("\nINVENTORY:");

        theList = new ArrayList();

        for (int i = 0; i < products.size(); i++) {
            if (!theList.contains(products.get(i))) {
                theList.add(products.get(i));
            }

        }
        theList.forEach(product -> {
            System.out.println("The shopping Inventory contains a " + product.getName()
                    + " with a price of: " + product.getPrice() + " € ");

        });

        System.out.println("\nSHOPPING CARD:");
// calculation shoppingcard

        products.stream().distinct()
                .forEach(product -> {
                    System.out.println(" The shopping Card contains " + countItems(product.getName()) + " " + product.getName()
                            + " which cost together " + price(countItems(product.getName()), product.getPrice()) + " € ");
                });
        System.out.println("\nTOTAL PRICE:");
        System.out.println(" All together " + products.size() + " items for: " + totalPrice() + " € ");

    }

    public double price(int number, int price) {
        double outcome = number * price - Math.floor(number / 4 * price);
        return outcome;

    }

    public double totalPrice() {
        products.stream().distinct()
                .forEach(product -> this.totalPrice += price(countItems(product.getName()), product.getPrice()));
    return this.totalPrice;
    }

    public int countItems(String productName) {
        int size = products.stream().filter(product -> productName == product.getName()).collect(Collectors.toList()).size();
        return size;

    }

    public double totalNewPrice() {
        theNewList.stream().distinct()
                .forEach(product -> this.totalNewPrice += price(countItems(product.getName()), product.getPrice()));
        return this.totalNewPrice;
    }

    public void replace(Product oldProduct, String newPName, int newPPrice, int numberOfNewItems) {
// replacing and old product
        replaceList = new ArrayList();
        replaceList = products;

        for (int i = 0; i < products.size(); i++) {
            if (products.contains(oldProduct)) {
                replaceList.remove(oldProduct);
            }
        }
        Product p = new Product(newPName, newPPrice);


        for (int i = 0; i < numberOfNewItems; i++){
        replaceList.add(p);}
// Inventory explanation

        System.out.println("\nUPDATED SHOPPING CARD AND INVENTORY AFTER REMOVING A SOLD OUT ITEM");
        System.out.println("\nINVENTORY UPDATED:");

        theNewList = new ArrayList();

        for (int i = 0; i < replaceList.size(); i++) {
            if (!theNewList.contains(replaceList.get(i))) {
                theNewList.add(replaceList.get(i));
            }

        }
        theNewList.forEach(product -> {
            System.out.println("The shopping Inventory contains a " + product.getName()
                    + " with a price of: " + product.getPrice() + " € ");

        });

        System.out.println("\nSHOPPING CARD UPDATED:");
// calculation shoppingcard

        replaceList.stream().distinct()
                .forEach(product -> {
                    System.out.println(" The shopping Card contains " + countItems(product.getName()) + " " + product.getName()
                            + " which cost together " + price(countItems(product.getName()), product.getPrice()) + " € ");
                });
        System.out.println("\nTOTAL PRICE:");
        System.out.println(" All together " + replaceList.size() + " items for: " + totalNewPrice() + " € ");

    }

}


// not used
/*



        public void finalCard(int number, double priceTotal) {

            System.out.println(" ");
            System.out.print(" The shopping Card contains " + number + " with a total totalled price of: " + priceTotal );
            System.out.print(" The shopping contains: ");

        }

        public void count() {
        int itemCount = products.size();
        System.out.println(itemCount);
        }

                int bikeItems = card1.countItems("bike");
        int vacuumCleanerItems = card1.countItems("vacuum cleaner");
        int pencilItems = card1.countItems("pencil");


        double priceBikeTotal = card1.price(bikeItems,300);
        double pricevacuumCleanerTotal = card1.price(vacuumCleanerItems,100);
        double pricePencilTotal = card1.price(pencilItems,3);

        //card1.finalCard(bikeItems, priceBikeTotal);
 */







