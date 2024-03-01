//Menu Items

const menuItems = {
    //Type
    IcedEspresso: [
        //Menu Item
        { 
            name: "Iced Americano (16oz)", 
            image: "assets/menu/icedEspresso/americano.jpg",
            description: "One shot of espresso diluted in cold water",
            price: "135.00"
        },
        { 
            name: "Iced Café Latte (16oz)", 
            image: "assets/menu/icedEspresso/cafe.jpg",
            description: "Milk + one shot of espresso",
            price: "160.00"
        },
        { 
            name: "Iced Spanish Latte (16oz)", 
            image: "assets/menu/icedEspresso/spanish.jpg",
            description: "Milk + one shot of espresso + right amount of sweetness",
            price: "170.00"
        },
        { 
            name: "Iced Vanilla Latte (16oz)", 
            image: "assets/menu/icedEspresso/vanilla.jpg",
            description: "Milk + Vanilla Syrup + one shot of espresso",
            price: "175.00"
        },
        { 
            name: "Iced Cappucino (16oz)", 
            image: "assets/menu/icedEspresso/cappucino.jpg",
            description: "Milk + one shot of espresso + cinnamon on top",
            price: "170.00"
        },
        { 
            name: "Iced Caramel Macchiato (16oz)", 
            image: "assets/menu/icedEspresso/caramel.jpg",
            description: "Milk + Caramel and Vanilla + one shot of espresso",
            price: "180.00"
        },
        { 
            name: "Iced Salted Caramel (16oz)", 
            image: "assets/menu/icedEspresso/salted.jpg",
            description: "Milk + salted caramel syrup + one shot of espresso",
            price: "180.00"
        },
        { 
            name: "Iced Caramel Mocha (16oz)", 
            image: "assets/menu/icedEspresso/caramelMocha.jpg",
            description: "Milk + Caramel + Premium Dark Chocolate + one shot of espresso",
            price: "180.00"
        },
        { 
            name: "Iced Hazelnut (16oz)", 
            image: "assets/menu/icedEspresso/hazelnut.jpg",
            description: "Milk + Hazelnut syrup + one shot of espresso",
            price: "175.00"
        },
        { 
            name: "Iced Mocha (16oz)", 
            image: "assets/menu/icedEspresso/mocha.jpg",
            description: "Milk + Premium Dark Chocolate + one shot of espresso",
            price: "175.00"
        },
        { 
            name: "Iced White Mocha (16oz)", 
            image: "assets/menu/icedEspresso/whiteMocha.jpg",
            description: "Milk + Premium White Chocolate + one shot of espresso",
            price: "175.00"
        },
        { 
            name: "Iced Sea Salt Latte (16oz)", 
            image: "assets/menu/icedEspresso/seaSalt.jpg",
            description: "Milk + one shot of espresso + sweet milk foam with hint of sea salt",
            price: "200.00"
        },
        { 
            name: "Iced Cookies and Cream (16oz)", 
            image: "assets/menu/icedEspresso/cookiesCream.jpg",
            description: "Sweet milk + oreo bits + dark chocolate + one shot of espresso",
            price: "180.00"
        },
    ],

    IcedBlendedEspresso: [
        { 
            name: "Ice Blended Caramel Macchiato (16oz)", 
            image: "assets/menu/iceBlended/caramel.jpg",
            description: "Blended Milk + Caramel and Vanilla + double shot of espresso",
            price: "230.00"
        },
        { 
            name: "Ice Blended Salted Caramel (16oz)", 
            image: "assets/menu/iceBlended/saltedCaramel.jpg",
            description: "Blended Milk + Home Made Salted Caramel + double shot of espresso",
            price: "230.00"
        },
        { 
            name: "Ice Blended Caramel Mocha (16oz)", 
            image: "assets/menu/iceBlended/caramelMocha.jpg",
            description: "Blended Milk + Caramel and Premium Dark Chocolate + double shot of espresso",
            price: "230.00"
        },
        { 
            name: "Ice Blended Mocha (16oz)", 
            image: "assets/menu/iceBlended/blendedMocha.jpg",
            description: "Blended Milk + Premium Dark Chocolate + double shot of espresso",
            price: "215.00"
        },
    ],

    IcedNonCoffee: [
        { 
            name: "Iced Milky Strawberry (16oz)", 
            image: "assets/menu/iceNonCoffee/strawberry.jpg",
            description: "Milk + real Strawberry jam",
            price: "175.00"
        },
        { 
            name: "Iced Mixed Berries (16oz)", 
            image: "assets/menu/iceNonCoffee/mixed.jpg",
            description: "Milk + real Mixed Berries jam",
            price: "190.00"
        },
        { 
            name: "Iced Milky Mango (16oz)", 
            image: "assets/menu/iceNonCoffee/mango.jpg",
            description: "Milk + real Mango fruit jam",
            price: "175.00"
        },
        { 
            name: "Iced Chocolatey (16oz)", 
            image: "assets/menu/iceNonCoffee/choco.jpg",
            description: "Milk + Premium Dark Chocolate",
            price: "160.00"
        },
        { 
            name: "Iced Cookies and Cream (Non-Coffee)", 
            image: "assets/menu/iceNonCoffee/cookiesCream.jpg",
            description: "Milk + Oreo Bits + Premium Dark chocolate",
            price: "180.00"
        },
    ],

    IcedBlendedNonCoffee: [
        { 
            name: "Ice Blended Milky Strawberry (16oz)", 
            image: "assets/menu/iceBlendedNonCoffee/strawberry.jpg",
            description: "Blended Milk + Strawberry Jam",
            price: "215.00"
        },
        { 
            name: "Ice Blended Mixed Berries (16oz)", 
            image: "assets/menu/iceBlendedNonCoffee/mixed.jpg",
            description: "Blended Milk + Mixed Berry Jam",
            price: "230.00"
        },
        { 
            name: "Ice Blended Milky Mango (16oz)", 
            image: "assets/menu/iceBlendedNonCoffee/mango.jpg",
            description: "Blended Milk + Mango Jam",
            price: "215.00"
        },
        { 
            name: "Ice Blended Cookies & Cream (Non-coffee)", 
            image: "assets/menu/iceBlendedNonCoffee/cookiesCream.jpg",
            description: "Blended Milk + Oreo Bits + Premium Dark Chocolate",
            price: "215.00"
        },
    ],

    Matcha: [
        { 
            name: "Iced Matcha Latte (16oz)", 
            image: "assets/menu/matcha/latte.jpg",
            description: "Milk + Pure Matcha + right amount of sweetness",
            price: "180.00"
        },
        { 
            name: "Iced Matcha Chocolatey (16oz)", 
            image: "assets/menu/matcha/choco.jpg",
            description: "Milk + Pure Matcha + Dark Chocolate",
            price: "190.00"
        },
        { 
            name: "Iced Dirty Matcha (16oz)", 
            image: "assets/menu/matcha/dirty.jpg",
            description: "Milk + Pure Matcha + one shot of espresso",
            price: "200.00"
        },
        { 
            name: "Ice Blended Milky Strawberry (16oz)", 
            image: "assets/menu/matcha/strawberry.jpg",
            description: "Milk + Pure Matcha + Strawberry",
            price: "200.00"
        },
        { 
            name: "Iced Matcha Cloud (16oz)", 
            image: "assets/menu/matcha/cloud.jpg",
            description: "Milk + Pure Matcha + Sweet Milk Foam",
            price: "210.00"
        },
        { 
            name: "Ice Blended Matcha Latte (16oz)", 
            image: "assets/menu/matcha/blend.jpg",
            description: "Blended Milk + Pure Matcha",
            price: "215.00"
        },
        { 
            name: "Frappe Matcha Latte (16oz)", 
            image: "assets/menu/matcha/frappe.jpg",
            description: "Blended Milk + Pure Matcha + Whipped Cream on top",
            price: "250.00"
        },
    ],

    FrappeEspresso: [
        { 
            name: "Frappe Caramel Macchiato (16oz)", 
            image: "assets/menu/frappe/caramel.jpg",
            description: "Blended Milk + Caramel and Vanilla Syrup + double shot of espresso + whipped cream on top",
            price: "260.00"
        },
        { 
            name: "Frappe Salted Caramel (16oz)", 
            image: "assets/menu/frappe/salt.jpg",
            description: "Blended Milk + Home made salted caramel + double shot of espresso + whipped cream on top",
            price: "260.00"
        },
        { 
            name: "Frappe Caramel Mocha (16oz)", 
            image: "assets/menu/frappe/caramelMocha.jpg",
            description: "Blended Milk + Caramel and Premium Dark Chocolate + whipped cream on top",
            price: "260.00"
        },
        { 
            name: "Frappe Mocha (16oz)", 
            image: "assets/menu/frappe/mocha.jpg",
            description: "Blended Milk + Premium Dark Chocolate + double shot of espresso + whipped cream on top",
            price: "250.00"
        },
        { 
            name: "Frappe Cookies and Cream (16oz)", 
            image: "assets/menu/frappe/cookiesCream.jpg",
            description: "Blended Milk + Oreo Bits + Premium Dark Chocolate + double shot of espresso + whipped cream on top",
            price: "260.00"
        },
    ],

    HotEspresso: [
        { 
            name: "Hot Americano (8oz)", 
            image: "assets/menu/hotEspresso/americano.jpg",
            description: "Classic one shot of espresso diluted in hot water",
            price: "110.00"
        },
        { 
            name: "Hot Café Latte (8oz)", 
            image: "assets/menu/hotEspresso/latte.jpg",
            description: "Hot Milk + one shot of espresso",
            price: "135.00"
        },
        { 
            name: "Hot Spanish Latte (8oz)", 
            image: "assets/menu/hotEspresso/spanish.jpg",
            description: "Hot Milk + one shot of espresso + right amount of sweetness",
            price: "140.00"
        },
        { 
            name: "Hot Vanilla Latte (8oz)", 
            image: "assets/menu/hotEspresso/vanilla.jpg",
            description: "Hot Milk + Pure Vanilla Syrup + one shot of espresso",
            price: "150.00"
        },
        { 
            name: "Hot Cappucino (8oz)", 
            image: "assets/menu/hotEspresso/cappucino.jpg",
            description: "Hot milk + one shot of espresso + cinnamon on top",
            price: "140.00"
        },
        { 
            name: "Hot Caramel Macchiato (8oz)", 
            image: "assets/menu/hotEspresso/caramelMacchiato.jpg",
            description: "Hot Milk + Caramel and Vanilla + one shot of espresso",
            price: "150.00"
        },
        { 
            name: "Hot Salted Caramel (8oz)", 
            image: "assets/menu/hotEspresso/saltedCaramel.jpg",
            description: "Hot Milk + Home Made Salted Caramel + one shot of espresso",
            price: "150.00"
        },
        { 
            name: "Hot Caramel Mocha (8oz)", 
            image: "assets/menu/hotEspresso/caramelMocha.jpg",
            description: "Hot Milk + Caramel and Dark Chocolate + one shot of espresso",
            price: "140.00"
        },
        { 
            name: "Hot Hazelnut (8oz)", 
            image: "assets/menu/hotEspresso/hazelnut.jpg",
            description: "Hot Milk + Hazelnut Syrup + one shot of espresso",
            price: "140.00"
        },
        { 
            name: "Hot Mocha (8oz)", 
            image: "assets/menu/hotEspresso/mocha.jpg",
            description: "Hot Milk + Premium dark chocolate + one shot of espresso",
            price: "140.00"
        },
        { 
            name: "Hot White Mocha (8oz)", 
            image: "assets/menu/hotEspresso/whiteMocha.jpg",
            description: "Hot milk + Premium White Chocolate + one shot of espresso",
            price: "140.00"
        },
    ],

    HotNonCoffee: [
        { 
            name: "Hot Chocolatey (8oz)", 
            image: "assets/menu/hotNonCoffee/choco.jpg",
            description: "Hot Milk + Premium Cocoa",
            price: "110.00"
        },
        { 
            name: "Hot Matcha Latte (8oz)", 
            image: "assets/menu/hotNonCoffee/macha.jpg",
            description: "Hot Milk + Pure Matcha + right amount of sweetness",
            price: "150.00"
        },
    ],

    FrappeNonCoffee: [
        { 
            name: "Frappe Milky Strawberry (16oz)", 
            image: "assets/menu/frappeNonCoffee/berry.jpg",
            description: "Blended Milk + real Strawberry jam + whipped cream on top",
            price: "250.00"
        },
        { 
            name: "Frappe Milky Mango (16oz)", 
            image: "assets/menu/frappeNonCoffee/mango.jpg",
            description: "Blended Milk + real Mango jam + whipped cream on top",
            price: "250.00"
        },
        { 
            name: "Frappe Chocolatey (16oz)", 
            image: "assets/menu/frappeNonCoffee/choco.jpg",
            description: "Blended Milk + Premium Dark Chocolate + whipped cream on top",
            price: "235.00"
        },
        { 
            name: "Frappe Cookies and Cream (Non-coffee)", 
            image: "assets/menu/frappeNonCoffee/cookie.jpg",
            description: "Blended Milk + Oreo Bits + Premium Dark Chocolate + whipped cream on top",
            price: "255.00"
        },
    ],

    PremiumCoffee:[
        { 
            name: "Fuji (16oz)", 
            image: "assets/menu/premium/fuji.jpg",
            description: "Premium Coffee with coffee jelly and vanilla syrup, topped generously with scooped vanilla ice cream, drizzled with dark chocolate and salted caramel sauce.",
            price: "240.00"
        },
        { 
            name: "Hokkaido (16oz)", 
            image: "assets/menu/premium/hokkaido.jpg",
            description: "Premium Iced Coffee crumble with hazelnut syrup, drizzled with dark chocolate and cookies and cream on top.",
            price: "230.00"
        },
        { 
            name: "Kyoto (16oz)", 
            image: "assets/menu/premium/kyoto.jpg",
            description: "Premium Iced Coffee with a single shot of coffee espresso with coffee jelly, drizzled with brown sugar sauce and topped with whipped cream.",
            price: "230.00"
        }
    ],

    ThaiMilktea: [
        { 
            name: "Two Tone Matcha Thai Milktea (16oz)", 
            image: "assets/menu/thaiMilkTea/matcha.jpg",
            description: "Rich and authentic thai tea sweetened with milk topped with matcha milk foam.",
            price: "215.00"
        },
        { 
            name: "Thai Milktea with Milk Foam (16oz)", 
            image: "assets/menu/thaiMilkTea/foam.jpg",
            description: "Rich and authentic thai tea sweetened with milk topped with milk foam.",
            price: "185.00"
        },
        { 
            name: "Classic Thai Milktea (16oz)", 
            image: "assets/menu/thaiMilkTea/classic.jpg",
            description: "Rich and authentic thai tea sweetened with milk.",
            price: "160.00"
        }
    ],

    FruitSoda: [
        { 
            name: "Green Apple Lemon Soda (16oz)", 
            image: "assets/menu/fruitSoda/green.jpg",
            description: "Refreshing soda with Green Apple and a hint of Lemon",
            price: "120.00"
        },
        { 
            name: "Strawberry Lemon Soda (16oz)", 
            image: "assets/menu/fruitSoda/strawberry.jpg",
            description: "Refreshing soda with Strawberry and a hint of Lemon",
            price: "120.00"
        },
        { 
            name: "Passionfruit Lemon Soda (16oz)", 
            image: "assets/menu/fruitSoda/lemon.jpg",
            description: "Refreshing soda with Passionfruit and a hint of Lemon",
            price: "120.00"
        },
        { 
            name: "Blueberry Lemon Soda (16oz)", 
            image: "assets/menu/fruitSoda/blueberry.jpg",
            description: "Refreshing soda with Blueberry and a hint of Lemon",
            price: "120.00"
        },
        { 
            name: "Hibiscus Lemon Soda (16oz)", 
            image: "assets/menu/fruitSoda/hibiscus.jpg",
            description: "Refreshing soda with Hibiscus and a hint of Lemon",
            price: "120.00"
        },
    ],

    FruitTea: [
        { 
            name: "Hibiscus Lemon Fruit Tea (16oz)", 
            image: "assets/menu/fruitTea/hibiscus.jpg",
            description: "Refreshing premium Hibiscus Tea with a hint of Lemon",
            price: "120.00"
        },
        { 
            name: "Green Apple Lemon Fruit Tea (16oz)", 
            image: "assets/menu/fruitTea/green.jpg",
            description: "Refreshing premium Jasmine Green Tea with Green Apple and hint of Lemon",
            price: "120.00"
        }
    ],

    RiceMeal: [
        { 
            name: "Buffalo Wings Rice Meal", 
            image: "assets/menu/riceMeal/buffalo.jpg",
            description: "2pcs of chicken wings (4pcs of wingette and drumette) + 1 cup of rice",
            price: "230.00"
        },
        { 
            name: "Garlic Parmesan Wings Rice Meal", 
            image: "assets/menu/riceMeal/garlic.jpg",
            description: "2pcs of chicken wings (4pcs of wingette and drumette) + 1 cup of rice",
            price: "230.00"
        },
        { 
            name: "Honey Glazed Wings Rice Meal", 
            image: "assets/menu/riceMeal/honey.jpg",
            description: "2pcs of chicken wings (4pcs of wingette and drumette) + 1 cup of rice",
            price: "230.00"
        },
        { 
            name: "Buttered Garlic Tuna", 
            image: "assets/menu/riceMeal/butter.jpg",
            description: "Tuna Belly cuts seared in butter, herbs and aromatics + 1 cup of rice",
            price: "230.00"
        },
        { 
            name: "Sweet and Sour Tuna", 
            image: "assets/menu/riceMeal/sweet.jpg",
            description: "Classic sweet and sour tuna + 1 cup of rice",
            price: "230.00"
        },
    ],

    ChickenWings: [
        { 
            name: "2 pcs Chicken Wings Bucket", 
            image: "assets/menu/chickenWings/wings.jpg",
            description: "2 pcs of chicken wings (4pcs of wingette and drumette)",
            price: "200.00"
        },
        { 
            name: "4 pcs Chicken Wings Bucket", 
            image: "assets/menu/chickenWings/wings.jpg",
            description: "4 pcs of chicken wings (8pcs of wingette and drumette)",
            price: "380.00"
        },
        { 
            name: "6 pcs Chicken Wings Bucket Meal", 
            image: "assets/menu/chickenWings/wings.jpg",
            description: "6 pcs of chicken wings (12pcs of wingette and drumette)",
            price: "520.00"
        },
        { 
            name: "8 pcs Chicken Wings Bucket", 
            image: "assets/menu/chickenWings/wings.jpg",
            description: "8 pcs of chicken wings (16pcs of wingette and drumette)",
            price: "670.00"
        },
        { 
            name: "Party Tray Chicken Wings", 
            image: "assets/menu/chickenWings/party.jpg",
            description: "16 pcs of chicken wings (32pcs of wingette and drumette)",
            price: "1,275.00"
        }
    ],

    Pasta: [
        { 
            name: "Shrimp Pesto", 
            image: "assets/menu/pasta/shrimp.jpg",
            description: "Sautéed Shrimp in herbs, aromatics and pesto sauce",
            price: "230.00"
        },
        { 
            name: "Creamy Pasta", 
            image: "assets/menu/pasta/cream.jpg",
            description: "Bite size chicken meat in creamy white sauce",
            price: "230.00"
        },
        { 
            name: "Cajun Shrimp and Hungarian Pasta", 
            image: "assets/menu/pasta/cajun.jpg",
            description: "Sauteéd Shrimp and Hungarian in special Cajun sauce",
            price: "230.00"
        },
        { 
            name: "Shrimp Aglio E Olio", 
            image: "assets/menu/pasta/aglio.jpg",
            description: "Sautéed shrimp in olive oil, garlic, chili flakes and herbs with a hint of lemon",
            price: "230.00"
        },
        { 
            name: "Kyo Spaghetti", 
            image: "assets/menu/pasta/spag.jpg",
            description: "Classic Pinoy Style Spaghetti with ground beef, hotdogs and mushrooms.",
            price: "230.00"
        },
    ],

    Sweets: [
        { 
            name: "Chocolate Walnut Cookies", 
            image: "assets/menu/sweet/choco.jpg",
            description: "",
            price: "60.00"
        },
        { 
            name: "Red Velvet Cream Cheese Cookies", 
            image: "assets/menu/sweet/redVelvet.jpg",
            description: "",
            price: "60.00"
        },
        { 
            name: "Brownies", 
            image: "assets/menu/sweet/brownie.jpg",
            description: "",
            price: "50.00"
        },
        { 
            name: "Almond Triple Chocolate Cookies", 
            image: "assets/menu/sweet/almondTriple.jpg",
            description: "",
            price: "60.00"
        },
        { 
            name: "Rocky Road Chocolate Cookies", 
            image: "assets/menu/sweet/rockyRoad.jpg",
            description: "",
            price: "60.00"
        },
    ],

    SnacksSandwiches: [
        { 
            name: "French Fries (Regular)", 
            image: "assets/menu/sandwiches/fries.jpg",
            description: "",
            price: "110.00"
        },
        { 
            name: "French Fries (Large)", 
            image: "assets/menu/sandwiches/fries.jpg",
            description: "",
            price: "160.00"
        },
        { 
            name: "Nachos", 
            image: "assets/menu/sandwiches/nachos.jpg",
            description: "Crispy Nacho chips topped with home-made salsa sauce",
            price: "135.00"
        },
        { 
            name: "Three Cheese Quesadilla", 
            image: "assets/menu/sandwiches/cheese.jpg",
            description: "Quesadilla in Three kinds of Cheese on the center (cheddar, mozarella and parmesan chesse) with home-made garlic sauce on sides.",
            price: "175.00"
        },
        { 
            name: "Chicken Cheese Quesadilla", 
            image: "assets/menu/sandwiches/chicken.jpg",
            description: "Quesadilla in mozarella and cheddar cheese and real chicken meat on center with home-made garlic sauce on sides.",
            price: "200.00"
        },
        { 
            name: "Egg Cheese Sandwich", 
            image: "assets/menu/sandwiches/eggCheese.jpg",
            description: "Korean-style sandwiches with lettuce, tomato, egg, cheese and special home-made sauce.",
            price: "160.00"
        },
        { 
            name: "Tuna Egg Cheese Sandwich", 
            image: "assets/menu/sandwiches/tunaEgg.jpg",
            description: "Korean-style sandwiches with lettuce, tomato, egg, cheese, special home-made sauce and shredded tuna meat.",
            price: "200.00"
        },
        { 
            name: "Chicken Egg Cheese Sandwich", 
            image: "assets/menu/sandwiches/eggCheese.jpg",
            description: "Korean-style sandwiches with lettuce, tomato, egg, cheese, special home-made sauce and chicken meat.",
            price: "200.00"
        },
    ],

    Croffles: [
        { 
            name: "Almond Nutella Croffle", 
            image: "assets/menu/croffles/almond.jpg",
            description: "Soft Croffle topped with whipped cream, nutella and almonds",
            price: "240.00"
        },
        { 
            name: "Mango Graham Nutella Croffle", 
            image: "assets/menu/croffles/mango.jpg",
            description: "Soft Croffle topped with whipped cream, mango and nutella",
            price: "240.00"
        }
    ]
};

//Add to cart feature
let cart = [];

//Event listeners for category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('selectedMenuItems').innerHTML = '';
        setTimeout(() => {
            displayMenuItems(button.dataset.category);
        }, 10); 
    });
});

//Function to display menu items based on selected category
function displayMenuItems(category) {
    const selectedMenuItems = document.getElementById('selectedMenuItems');
    selectedMenuItems.innerHTML = ''; 

    if (menuItems[category]) {
        menuItems[category].forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item'); 
            itemElement.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" />
                </div>
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: ₱${item.price}</p>
                    <button class="add-on-button">Add to Cart</button>
                </div>
            `;
            //Apply a staggered animation delay to each item
            itemElement.style.animationDelay = `${index * 0.1}s`;
            selectedMenuItems.appendChild(itemElement);

            //Add event listener to the "Add to Cart" button
            itemElement.querySelector('.add-on-button').addEventListener('click', function() {
                addToCart(item);
            });
        });
    } else {
        selectedMenuItems.innerHTML = `<p>No items available for this category.</p>`;
    }
}

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    alert(`${item.name} added to cart.`);
    updateCartDisplay();
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayMenuItems('IcedEspresso');
    updateCartDisplay();
});


document.querySelector('.cart-icon-container').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const cartDropdown = document.getElementById('cart');

    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    const cartDropdown = document.getElementById('cart');
    if (cartDropdown.style.display === 'block') {
        cartDropdown.style.display = 'none';
    }
});


document.getElementById('cart').addEventListener('click', function(event) {
    event.stopPropagation();
});


function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '<div class="cart-close-btn">&times;</div>';
    let totalPrice = 0;
    if (cart.length > 0) {
        cart.forEach((cartItem, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${cartItem.name} x ${cartItem.quantity} <button class="remove-item-btn" data-index="${index}">Remove</button></p>
                <p>Price: ₱${(parseFloat(cartItem.price) * cartItem.quantity).toFixed(2)}</p>
            `;
            cartElement.appendChild(itemElement);
            totalPrice += parseFloat(cartItem.price) * cartItem.quantity;
        });
        const totalPriceElement = document.createElement('p');
        totalPriceElement.textContent = `Total Price: ₱${totalPrice.toFixed(2)}`;
        cartElement.appendChild(totalPriceElement);
    } else {
        cartElement.innerHTML += `<p>Your cart is empty.</p>`;
    }
    attachEventListenersToCartButtons(); 
}

function attachEventListenersToCartButtons() {
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const itemIndex = parseInt(this.getAttribute('data-index'), 10);
            const item = cart[itemIndex];
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart.splice(itemIndex, 1); 
            }
            updateCartDisplay(); 
        });
    });

    document.querySelector('.cart-close-btn').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('cart').style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems('IcedEspresso');
    updateCartDisplay();
    attachEventListenersToCartButtons();
});