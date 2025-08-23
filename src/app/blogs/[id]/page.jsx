import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetailsPage({ params }) {
  // Access params here, not in the function signature
  const id = params.id;
  console.log(id)

  if (!id) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Blog Post Not Found.</h1>
        <p className="mt-4">Please go back and select a blog post.</p>
      </div>
    );
  }

  let data = null;
  try {
    const blogsCollection = await dbConnect(collectionNamesObj.blogsCollection);
    // Find the document using the numeric ID from the URL.
    // Ensure the ID is converted to a number.
    data = await blogsCollection.findOne({ id: Number(id) });
  } catch (error) {
    console.error("Database query failed:", error);
  }

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4">The blog post you are looking for does not exist.</p>
        <Link href="/blogs">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
            Go Back to Blogs
          </button>
        </Link>
      </div>
    );
  }

  // Destructure the data based on your new data structure
  const { title, image, description, fullDescription, author, createdAt } = data;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Blog Hero Section with Title and Image */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
          className="rounded-b-lg"
        />
        <div className="absolute inset-0 bg-opacity-60 flex items-center p-6 md:p-10">
          <div className="container mx-auto text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 -mt-20 relative z-10">
          {/* Author Section */}
          <div className="flex items-center gap-4 mb-8 border-b pb-4">
            <Image
              src={author.image}
              alt={author.name}
              width={64}
              height={64}
              className="object-cover rounded-b-lg"
            />
            <div>
              <p className="font-semibold text-gray-800 text-lg">By {author.name}</p>
              <p className="text-gray-500 text-sm">Published on {new Date(createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Description */}
          <article className="prose max-w-none text-gray-700 leading-relaxed text-lg">
            <p className="mb-6">{description}</p>
            <p>{fullDescription}</p>
          </article>

        </div>
      </div>
    </div>
  );
}