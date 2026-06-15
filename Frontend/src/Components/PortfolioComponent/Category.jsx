import React from "react";

function Category() {
  const categories = ["All", "Branding", "UI/UX", "Web Design", "Development"];
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((item) => (
          <button key={item} className="px-6 py-3 rounded-full border">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
