import React from "react";

// Component for the project filter buttons
const FilterButtons = ({ currentCategory, setCurrentCategory }) => {
  // Array of categories to display. Using "all" as the canonical filter for all projects.
  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Javascript", value: "Javascript" },
    { label: "React", value: "React" },
  ];

  // Helper function to handle button click and set category
  const handleFilterClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <section className="flex left-section">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleFilterClick(cat.value)}
          // Use 'active' class when the value matches the current category
          className={currentCategory === cat.value ? "active" : ""}
        >
          {cat.label}
        </button>
      ))}
    </section>
  );
};

export default FilterButtons;