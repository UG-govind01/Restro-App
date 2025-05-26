import SearchBar from "@/app/components/searchbar";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-background.jpg')" }}>
      <h1 className="text-4xl font-bold text-white mt-10">Welcome to [ The Tiffin Trap ]</h1>
      <p className="text-white italic mt-2">Experience exquisite dining in a warm and inviting atmosphere.</p>
      
      <SearchBar />

      <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full font-semibold">Book a Table</button>
    </div>
  );
}
