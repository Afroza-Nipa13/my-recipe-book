import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12 text-center">
      <div className="max-w-md mx-auto">
        <Image
          src="https://i.postimg.cc/nhT29X7C/services.png"
          alt="404 Page Not Found"
          width={400}
          height={400}
          fill
          className="rounded-lg shadow-md mb-8"
        />

        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        
        <Link href="/">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-full transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}