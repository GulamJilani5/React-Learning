import AttributeBreadcrumb from "./attribute-breadcrumb";
import { useState } from "react";

export default function AttributeHome() {
  const dogsArray = [
    {
      size: "S",
      color: "white",
      image: "/small-white-dog.jpg",
      name: "Gigi",
      age: 1,
    },
    {
      size: "M",
      color: "white",
      image: "/medium-white-dog.jpg",
      name: "Tom",
      age: 2,
    },
    {
      size: "L",
      color: "white",
      image: "/big-white-dog.jpg",
      name: "Jake",
      age: 3,
    },
    {
      size: "S",
      color: "black",
      image: "/small-black-dog.jpg",
      name: "Hill",
      age: 1,
    },
    {
      size: "M",
      color: "black",
      image: "/medium-black-dog.jpg",
      name: "Jack",
      age: 2,
    },
    {
      size: "L",
      color: "black",
      image: "/big-black-dog.jpg",
      name: "Jones",
      age: 3,
    },
    {
      size: "S",
      color: "brown",
      image: "/small-brown-dog.jpg",
      name: "Herbert",
      age: 1,
    },
    {
      size: "M",
      color: "brown",
      image: "/medium-brown-dog.jpg",
      name: "Coco",
      age: 2,
    },
    {
      size: "L",
      color: "brown",
      image: "/big-brown-dog.jpg",
      name: "Benny",
      age: 3,
    },
  ];

  const [sizeFilter, setSizeFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);

  const filteredDogs = dogsArray.filter((dog) => {
    if (sizeFilter && dog.size !== sizeFilter) return false;

    if (colorFilter && dog.color !== colorFilter) return false;

    return true;
  });

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="p-4">Adopt Page</h1>
      <AttributeBreadcrumb sizeFilter={sizeFilter} colorFilter={colorFilter} />
      <main>
        <div className="relative grid grid-cols-4 gap-2">
          {filteredDogs.map((dog) => (
            <div
              key={dog.name}
              className="shadow-md rounded-md border-2 border-gray-300	"
            >
              <div className="h-48 rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={dog.image}
                  alt="dog"
                />
              </div>
              <div className="grid grid-cols-2 justify-items-center gap-2 mt-2">
                <div className="flex gap-2">
                  <span>Name:</span>
                  <p className="text-center">{dog.name}</p>
                </div>
                <div className="flex gap-2">
                  <span>Size:</span>
                  <p className="text-center">{dog.size}</p>
                </div>
                <div className="flex gap-2">
                  <span>  Color:</span>
                  <p className="text-center capitalize">{dog.color}</p>
                </div>
                <div className="flex gap-2">
                  <span>Age:</span>
                  <p className="text-center">
                    {`${dog.age + " " + "year"}${dog.age > 1 ? "s" : ""}`}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-0 left-0 p-1 translate-y-[110%]">
            <h2 className="mb-2">Filter by</h2>
            <div className="flex items-center mb-4">
              <h3 className="w-12">Size:</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setSizeFilter(null)}
                  className={`p-2 text-center  rounded-md ${
                    // Dynamic background color add
                    sizeFilter === null
                      ? "bg-orange-900 text-white"
                      : "bg-white text-black "
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSizeFilter("S")}
                  className={`p-2 text-center  rounded-md ${
                    // Dynamic background color add
                    sizeFilter === "S"
                      ? "bg-orange-900 text-white"
                      : "bg-white text-black "
                  }`}
                >
                  S
                </button>
                <button
                  onClick={() => setSizeFilter("M")}
                  className={`p-2 text-center  rounded-md ${
                    // Dynamic background color add
                    sizeFilter === "M"
                      ? "bg-orange-900 text-white"
                      : "bg-white text-black "
                  }`}
                >
                  M
                </button>
                <button
                  onClick={() => setSizeFilter("L")}
                  className={`p-2 text-center  rounded-md ${
                    // Dynamic background color add
                    sizeFilter === "L"
                      ? "bg-orange-900 text-white"
                      : "bg-white text-black "
                  }`}
                >
                  L
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="w-12">Color:</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setColorFilter(null)}
                  className={`p-2 text-center   rounded-md ${
                    // Dynamic background color add
                    colorFilter === null
                      ? "bg-orange-900 text-white"
                      : "bg-white text-black "
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setColorFilter("white")}
                  className={`p-2 text-center   rounded-md ${
                    // Dynamic background color add
                    colorFilter === "white"
                      ? "bg-orange-900 text-white"
                      : "bg-white text-black "
                  }`}
                >
                  White
                </button>
                <button
                  onClick={() => setColorFilter("brown")}
                  className={`p-2 text-center rounded-md   ${
                    // Dynamic background color add
                    colorFilter === "brown"
                      ? "bg-orange-900 text-white"
                      : " bg-white text-black "
                  }`}
                >
                  Brown
                </button>

                <button
                  onClick={() => setColorFilter("black")}
                  className={`p-2 text-center rounded-md    ${
                    // Dynamic background color add
                    colorFilter === "black"
                      ? "bg-orange-900 text-white"
                      : " bg-white text-black"
                  }`}
                >
                  Black
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
