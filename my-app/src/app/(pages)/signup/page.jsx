// "use client";
// import axios from "axios";


// import { useState } from "react";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [passwordMatchError, setPasswordMatchError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setPasswordMatchError("Passwords do not match");
//       return;
//     } else {
//       setPasswordMatchError("");
//     }

//     console.log("Form submitted:", {
//       name,
//       email,
//       password,
//       confirmPassword,
//       mobileNumber,
//     });
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.post ("http://localhost:3000/api/signup");
//         setUser(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//     // Add your API call or logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden">
//         <div className="bg-orange-500 py-4 px-6 text-white text-center font-semibold text-xl tracking-wide">
//           Create Your Account
//         </div>
//         <form onSubmit={handleSubmit} className="py-8 px-6 space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Full Name"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-bold mb-2">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobileNumber"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Mobile Number"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Email Address"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Choose a strong password"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Confirm your password"
//               required
//             />
//             {passwordMatchError && <p className="text-red-500 text-xs italic">{passwordMatchError}</p>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="py-4 px-6 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="text-orange-500 hover:underline font-semibold">
//             Log In
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"; // This is a client component

import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [user, setUser] = useState(null); // <--- Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
      return;
    } else {
      setPasswordMatchError("");
    }

    // It's good practice to create the data object to send
    const userData = {
      name,
      email,
      password,
      // Do not send confirmPassword to the backend
      mobileNumber,
    };

    console.log("Form submitted:", userData);

    // Renamed fetchProducts to a more appropriate name like signUpUser
    const signUpUser = async () => {
      try {
        // Send the userData in the POST request body
        const response = await axios.post("http://localhost:3000/api/signup", userData);
        setUser(response.data); // Now setUser is defined
        console.log("Signup successful:", response.data);
        // Potentially redirect the user or clear the form here
        // e.g., setName(''); setEmail(''); /* ...and so on */
        // window.location.href = '/login'; // Or use Next.js router
      } catch (error) {
        console.error("Error signing up:", error.response ? error.response.data : error.message);
        // You might want to display an error message to the user here
        // setPasswordMatchError(error.response?.data?.message || "Signup failed. Please try again.");
      }
    };

    signUpUser();
  };

  // ... rest of your JSX remains the same
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-orange-500 py-4 px-6 text-white text-center font-semibold text-xl tracking-wide">
          Create Your Account
        </div>
        <form onSubmit={handleSubmit} className="py-8 px-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Choose a strong password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
              required
            />
            {passwordMatchError && <p className="text-red-500 text-xs italic">{passwordMatchError}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="py-4 px-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline font-semibold">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}