"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Chicken Curry",
    description: "Spicy and flavorful chicken curry recipe.",
    image: "https://i.postimg.cc/PxbdLNgX/chicken.jpg",
    price: "$12"
  },
  {
    id: 2,
    name: "Veggie Pasta",
    description: "Healthy and tasty pasta loaded with veggies.",
    image: "https://i.postimg.cc/h4xdrrBv/Chicken-Vegetable-Pasta-4.webp",
    price: "$10"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with creamy frosting.",
    image: "https://i.postimg.cc/P5mLbrs7/cake.jpg",
    price: "$8"
  },
  {
    id: 4,
    name: "Grilled Salmon",
    description: "Tender salmon fillets grilled to perfection.",
    image: "https://i.postimg.cc/fRw3KQzT/grilled-Salmon.jpg",
    price: "$15"
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with creamy Caesar dressing.",
    image: "https://i.postimg.cc/KcDx5kRB/Caesar-Salad.jpg",
    price: "$9"
  },
  {
    id: 6,
    name: "Beef Steak",
    description: "Juicy and flavorful beef steak cooked to your liking.",
    image: "https://i.postimg.cc/x8JG9DJS/beef-steak.jpg",
    price: "$20"
  },
  {
    id: 7,
    name: "Fruit Smoothie",
    description: "Refreshing smoothie made with fresh fruits.",
    image: "https://i.postimg.cc/brg8FF8c/frut-juice.jpg",
    price: "$6"
  },
  {
    id: 8,
    name: "Pancakes",
    description: "Fluffy pancakes served with syrup and butter.",
    image: "https://i.postimg.cc/KcB5ghcs/pan-cake.jpg",
    price: "$7"
  }
];

export default function ProductHighlights() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">🍲 Our Top Recipes</h2>
        <p className="text-gray-600 mb-10">
          Hand-picked recipes that our food lovers adore the most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="rounded-lg object-cover h-[50%] w-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <p className="font-bold text-orange-500 mb-4">{product.price}</p>
              <button className="btn btn-outline btn-primary">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

