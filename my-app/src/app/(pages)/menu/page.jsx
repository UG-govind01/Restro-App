// import MenuItem from "@/app/components/menuItem";

// export default function Menu() {
//     const MenuItems = [
//         { name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes.", price: 250 },
//         { name: "Chicken Biryani", description: "Spicy and flavorful Hyderabadi biryani.", price: 350 },
//         { name: "Veggie Delight Pizza", description: "Loaded with fresh veggies and mozzarella.", price: 350 },
//         { name: "Tandoori Chicken", description: "Perfectly grilled chicken with aromatic spices.", price: 400 },
//         { name: "Gulab Jamun", description: "Soft and juicy sweet dessert, served warm.", price: 100 },
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 sm:px-8 lg:px-12">
//             <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Our Delicious Menu</h1>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {MenuItems.map((item, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
//                                 <p className="text-gray-600 text-sm mb-3">{item.description}</p>
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-indigo-600 font-bold text-lg">₹{item.price}</span>
//                                     <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-12 text-center">
//                         <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300">
//                             View Full Menu
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {/* It seems you have <MenuItem /> here again, which would likely cause an error as it's not receiving props correctly in this context. Removing it. */}
//             {/* <MenuItem /> */}
//         </div>
//     );
// }

// ... (import statements)

"use client";
import { useState } from "react";


export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const MenuItems = [
        { name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes.", price: 250, category: "Main Course" },
        { name: "Chicken Biryani", description: "Spicy and flavorful Hyderabadi biryani.", price: 350, category: "Main Course" },
        { name: "Veggie Delight Pizza", description: "Loaded with fresh veggies and mozzarella.", price: 350, category: "Appetizer" },
        { name: "Tandoori Chicken", description: "Perfectly grilled chicken with aromatic spices.", price: 400, category: "Appetizer" },
        { name: "Gulab Jamun", description: "Soft and juicy sweet dessert, served warm.", price: 100, category: "Dessert" },
        { name: "Masala Chai", description: "Traditional Indian spiced tea.", price: 50, category: "Beverage" },
        // ... aur menu items
    ];

    const categories = ['All', ...new Set(MenuItems.map(item => item.category))];

    const filteredItems = selectedCategory === 'All'
        ? MenuItems
        : MenuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                    <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Our Delicious Menu</h1>

                    <div className="mb-8 flex justify-center space-x-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full font-semibold transition duration-300 focus:outline-none ${
                                    selectedCategory === category
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-indigo-600 font-bold text-lg">₹{item.price}</span>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300">
                            View Full Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}