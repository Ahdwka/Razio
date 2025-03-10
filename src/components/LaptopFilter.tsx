import { useState } from "react";

interface Laptop {
  id: number;
  name: string;
  brand: string;
  description: string;
  image: string;
  specs?: string; // Optional field for specifications
}

const laptops: Laptop[] = [
  { 
    id: 1, 
    name: "Lenovo ThinkPad X1", 
    brand: "Lenovo", 
    description: "Powerful business laptop.", 
    image: "https://via.placeholder.com/150",
    specs: "i7-11800H, 16GB RAM, 512GB SSD, 14\" FHD"
  },
  { 
    id: 2, 
    name: "ASUS ROG Strix", 
    brand: "ASUS", 
    description: "High-performance gaming laptop.", 
    image: "https://via.placeholder.com/150",
    specs: "i9-13900H, 32GB RAM, 1TB SSD, 15.6\" FHD 144Hz"
  },
  { 
    id: 3, 
    name: "Dell XPS 13", 
    brand: "Dell", 
    description: "Sleek ultrabook with great battery life.", 
    image: "https://via.placeholder.com/150",
    specs: "i5-1135G7, 8GB RAM, 256GB SSD, 13.4\" FHD"
  },
  { 
    id: 4, 
    name: "Vivo book pro", 
    brand: "ASUS", 
    description: "Sleek ultrabook with great battery life.", 
    image: "https://via.placeholder.com/150",
    specs: "i5-1435G7, 32GB RAM, 256GB SSD, 14\" FHD"
  }
];

const brands = ["All Laptops", "Lenovo", "ASUS", "Dell"];

export default function LaptopShop() {
  const [selectedBrand, setSelectedBrand] = useState("All Laptops");

  const filteredLaptops = selectedBrand === "All Laptops" ? laptops : laptops.filter(l => l.brand === selectedBrand);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Laptops</h1>

      {/* Filter Section */}
      <div className="flex space-x-4 mb-6">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedBrand === brand
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Laptop Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredLaptops.map((laptop) => (
          <div key={laptop.id} className="p-4 border rounded-lg shadow-md">
            <img src={laptop.image} alt={laptop.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold">{laptop.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{laptop.description}</p>
            {laptop.specs && (
              <div className="text-sm text-gray-700 mb-4">
                <p>{laptop.specs}</p>
              </div>
            )}
            <button className="w-full bg-blue-500 text-title py-2 rounded-lg hover:bg-blue-600 transition">
              BOOK NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}