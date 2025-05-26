
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md px-8 py-12 text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
        <p className="text-2xl text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          This page is not available.this URL is not available in our library.
          <br />plase check the URL and try again.
        </p>
        <Link href="/" className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;