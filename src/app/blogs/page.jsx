
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';


export default async function BlogPage() {
    // Get the session on the server
    const session = await getServerSession(authOptions);
    const isAuthenticated = !!session?.user;

    // Fetch blog posts from the database
    let blogPosts = [];
    try {
        const blogsCollection = await dbConnect(collectionNamesObj.blogsCollection);
        // Find all blog posts and convert them to an array
        blogPosts = await blogsCollection.find({}).toArray();
        console.log(blogPosts)
    } catch (error) {
        console.error("Failed to fetch blog posts from database:", error);
    }
    
    // Now render the page with the fetched data
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Our Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                        <div key={post._id.toString()} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48">
                                
                                <Image 
                                    src={post.image} 
                                    alt={post.title} 
                                    fill 
                                    className="object-cover" 
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-gray-700 text-sm mb-4">{post.description}...</p>
                                {isAuthenticated ? (
                                    <Link href={`/blogs/${post.id}`} className="inline-flex items-center text-orange-500 hover:text-orange-700 font-semibold">
                                        Read More <FiArrowRight className="ml-2" />
                                    </Link>
                                ) : (
                                    <Link href={`/login?redirect=/blogs/${post.id}`}>
                                        <span className="text-gray-500 italic hover:underline">
                                            Login to read more
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-4 text-center text-gray-500">No blog posts found.</p>
                )}
            </div>
        </div>
    );
}