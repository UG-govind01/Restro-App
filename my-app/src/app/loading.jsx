

function LoadingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
        <p className="text-xl font-semibold text-indigo-600">Loading...</p>
        <p className="text-gray-500 text-sm">Please wait while we fetch the data.</p>
      </div>
    </div>
  );
}

export default LoadingPage;