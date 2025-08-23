"use client"; 
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddProductPage() {
 const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Session in AddProductPage:", session, status);
  }, [session, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Redirecting to login...</p>;

  // authenticated হলে form দেখাবে
  return (
    <div>
      <h1 className="text-2xl font-bold">Add Product</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2"
        />
        <textarea
          placeholder="Description"
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Product
        </button>
      </form>
    </div>
  );
}
