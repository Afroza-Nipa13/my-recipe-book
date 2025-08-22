import { ObjectId } from "mongodb";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  const { id } =await params;

  if (!id) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Recipe ID not found.</h1>
        <p className="mt-4">Please go back and select a recipe.</p>
      </div>
    );
  }

  const recipeCollection = await dbConnect(collectionNamesObj.recipeCollection);
const data = await recipeCollection.findOne({ _id: id });
  console.log(data)

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Recipe Not Found</h1>
        <p className="mt-4">The recipe you are looking for does not exist.</p>
        <Link href="/">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
            Go Back Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Banner Image */}
      <div className="relative w-full h-96">
        <Image
          src={data.image}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg"
        />
        <div className="absolute inset-6 bg-opacity-50 flex items-end p-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {data.name}
            </h1>
            <p className="mt-2 text-xl text-gray-200">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Details</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {data.details_description}
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ingredients</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {data.ingredients && data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Price and Checkout */}
            <div className="lg:col-span-1 bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-4xl font-bold text-orange-500">
                {data.price}
              </p>
              <Link href={`/checkout/${data._id}`}>
                <button className="mt-6 w-full px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}