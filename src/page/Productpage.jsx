import React from "react";

export default function Productpage() {
  const product = [
    {
      name: "iPhone 16 pro max",
      image:
        "https://1store.ru/image/cache/catalog/iPhone17prosilver-4-600x315.png",
      badge: "New",
      ratings: 175,
      newPrice: 4000000,
      oldPrice: 45000000,
    },
    {
      name: "Samsung Galaxy s9",
      image:
        "https://avatars.mds.yandex.net/i?id=5b143b7d057c68993cf16ef06cbb69a3d0fc4a55-5273845-images-thumbs&n=13",
      badge: "Old",
      ratings: 100,
      newPrice: 700000,
      oldPrice: 950000,
    },
    {
      name: "Google Pixel 8",
      image:
        "https://avatars.mds.yandex.net/i?id=095999505f0642c4078d69e0c78ba486f3aef2dd-5344940-images-thumbs&n=13",
      badge: "New",
      ratings: 120,
      newPrice: 640000,
      oldPrice: 800000,
    },
  ];
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {product.map((p, index) => (
        <div
          key={index}
          className="bg-white w-80 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              src={p.image}
              alt="Product"
              className="w-full h-56 object-cover"
            />

            {/* Badge */}
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              {p.name}
            </span>
          </div>

          {/* Product Info */}
          <div className="p-5">
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>

            <p className="text-sm text-gray-500 mt-1">256GB • Space Black</p>

            {/* Rating */}
            <div className="flex items-center mt-3 space-x-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-500">{p.ratings}</span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xl font-bold text-gray-900">{p.newPrice}</p>
                <p className="text-sm text-gray-400 line-through">
                  {p.oldPrice}
                </p>
              </div>

              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
