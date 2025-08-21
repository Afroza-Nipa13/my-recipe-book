export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Delicious Recipes 🍴
          </h1>
          <p className="mb-5 text-lg">
            Explore a world of flavors with our curated food recipes. Easy to
            cook, fun to share, and always tasty!
          </p>
          <button className="btn btn-primary">Explore Recipes</button>
        </div>
      </div>
    </div>
  );
}
