'use client'; // if using Next.js 13+ app directory

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`);
    // Yahan apni search logic ya navigation dal sakte ho
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Search for dishes or tables..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-80 p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
      />
      <button
        type="submit"
        className="px-4 rounded-r-lg bg-red-500 text-white font-bold p-2 uppercase border-red-500 border-t border-b border-r"
      >
        Search
      </button>
    </form>
  );
}
