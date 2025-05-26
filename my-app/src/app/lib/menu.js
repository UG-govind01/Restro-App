const MenuItems =[
    {
        id:1,
        name:"scramled eggs & toast",
        description:"scrambled eggs on toast with a side of bacon",
        price: 5.99,
        category:"breakfast",
        
    },
    {
        id:2,
        name:"pancakes",
        description:"fluffy pancakes with maple syrup",
        price: 7.99,
        category:"breakfast",
    },
    {
        id:3,
        name:"cheeseburger",
        description:"juicy cheeseburger with lettuce and tomato",
        price: 10.99,
        category:"lunch",
    },
    {
        id:4,
        name:"grilled chicken salad",
        description:"grilled chicken on a bed of mixed greens",
        price: 9.99,
        category:"lunch",
    },
    {
        id:5,
        name:"spaghetti bolognese",
        description:"spaghetti with a rich meat sauce",
        price: 12.99,
        category:"dinner",
    },
    {
        id:6,
        name:"steak and potatoes",
        description:"grilled steak with roasted potatoes",
        price: 19.99,
        category:"dinner",
    },
    {
        id:7,
        name:"chocolate cake",
        description:"rich chocolate cake with frosting",
        price: 4.99,
        category:"dessert",
    },
    {
        id:8,
        name:"ice cream sundae",
        description:"vanilla ice cream with chocolate sauce",
        price: 3.99,
        category:"dessert",
    },
    {
        id:9,
        name:"caesar salad",
        description:"romaine lettuce with caesar dressing",
        price: 8.99,
        category:"salad",
    },
    {
        id:10,
        name:"caprese salad",
        description:"fresh mozzarella, tomatoes, and basil",
        price: 7.99,
        category:"salad",
    },
    {
        id:11,
        name:"vegetable stir-fry",
        description:"mixed vegetables stir-fried with soy sauce",
        price: 10.99,
        category:"vegan",
    },
    {
        id:12,
        name:"chickpea curry",
        description:"spicy chickpea curry with rice",
        price: 11.99,
        category:"vegan",
    }

];

const getCategories = () => {
    const categoryOrder=["Breakfast","Lunch","Dinner","Dessert","Salad","Vegan"];
    const categories = MenuItems.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
}

const getMenuItems = (category) => {
    const menuItems = MenuItems.filter((item) => item.category === category);
    return menuItems;
}
const getMenuItemById = (id) => {
    const menuItem = MenuItems.find((item) => item.id === id);
    return menuItem;
}