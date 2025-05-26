// "use client";

// import { useState } from 'react';

// export default function BookTable() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         date: '',
//         time: '',
//         guests: ''
//     });

//     const handleChange = (e) => {
//         setFormData({...formData, [e.target.name]: e.target.value});
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log(formData);
//         alert ('Table booked successfully!');
//         // yaha backend api se connect hoga
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book a Table</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             onChange={handleChange}
//                             value={formData.name}
//                             name="name"
//                             placeholder="Your Name"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             onChange={handleChange}
//                             value={formData.email}
//                             name="email"
//                             placeholder="Your Email"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
//                         <input
//                             type="date"
//                             id="date"
//                             onChange={handleChange}
//                             value={formData.date}
//                             name="date"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time:</label>
//                         <input
//                             type="time"
//                             id="time"
//                             onChange={handleChange}
//                             value={formData.time}
//                             name="time"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests:</label>
//                         <input
//                             type="number"
//                             id="guests"
//                             onChange={handleChange}
//                             value={formData.guests}
//                             name="guests"
//                             min="1"
//                             placeholder="Number of Guests"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button
//                             type="submit"
//                             className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Book Table
//                         </button>
//                         <button
//                             type="reset"
//                             className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Reset
//                         </button>
//                         {/* You can add more buttons here if needed, styled similarly */}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

"use client";

import { useState } from 'react';

export default function BookTable() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert ('Table booked successfully!');
        // yaha backend api se connect hoga
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: 'prity.jpg' }} 
        >
            <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full bg-opacity-80"> {/* Added background opacity */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book a Table</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                            placeholder="Your Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            placeholder="Your Email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
                        <input
                            type="date"
                            id="date"
                            onChange={handleChange}
                            value={formData.date}
                            name="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time:</label>
                        <input
                            type="time"
                            id="time"
                            onChange={handleChange}
                            value={formData.time}
                            name="time"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests:</label>
                        <input
                            type="number"
                            id="guests"
                            onChange={handleChange}
                            value={formData.guests}
                            name="guests"
                            min="1"
                            placeholder="Number of Guests"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Book Table
                        </button>
                        <button
                            type="reset"
                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Reset
                        </button>
                        {/* You can add more buttons here if needed, styled similarly */}
                    </div>
                </form>
            </div>
        </div>
    );
}