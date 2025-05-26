// export default function MenuItem({ name, description, price }) {
//     return (
//       <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
//         <h3 className="text-xl font-semibold mb-2">{name}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <p className="text-orange-500 font-bold">₹{price}</p>
//       </div>
//     );
//   }
  
// ... (import statements)

export default function Menu() {
  // ... (state and MenuItems array with image property)

  const MenuItems = [
      { name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes.", price: 250, category: "Main Course", image: "/images/paneer.jpg" },
      { name: "Chicken Biryani", description: "Spicy and flavorful Hyderabadi biryani.", price: 350, category: "Main Course", image: "/images/biryani.jpg" },
      // ...
  ];

  // ... (filteredItems logic)

  return (
      <div className="min-h-screen ...">
          <div className="max-w-7xl ...">
              <div className="px-4 py-5 sm:p-6">
                  <h1 className="...">Our Delicious Menu</h1>

                  {/* Category filters */}

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredItems.map((item, index) => (
                          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                              {item.image && (
                                  <div className="relative w-full h-32 mb-4 overflow-hidden rounded-md">
                                      <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                  </div>
                              )}
                              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                              <div className="flex items-center justify-between">
                                  <span className="text-indigo-600 font-bold text-lg">₹{item.price}</span>
                                  <button className="...">Add to Cart</button>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* View Full Menu button */}
              </div>
          </div>
      </div>
  );
}