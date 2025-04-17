import React, { useState } from "react";

const Home = () => {
  const [active, setActive] = useState(null);
  const categories = [
    { name: "Data Science" },
    { name: "Data Science" },
    { name: "Data Science" },
    { name: "Data Science" },
    { name: "Data Science" },
    { name: "Data Science" },
    { name: "Data Science" },
  ];
  return (
    <div className="mx-2 sm:mx-20 my-10">
      <h1 className="text-2xl font-semibold">All you need in one place</h1>
      <div className="mt-10">
        <ul className="flex flex-wrap sm:flex-row mb-5  justify-start">
          {categories.map((category, index) => (
            <li key={index}>
              <div
                className="hover:bg-violet-400 hover:text-white p-4 rounded-full"
                onClick={() => setActive(category.name)}
              >
                {category.name}
              </div>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Home;
