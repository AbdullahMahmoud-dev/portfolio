import React, { useState } from "react";
import "./main.css";
import ECommerceImg from "../../assets/Screenshot 2025-11-15 144735.png";
import job_boardimg from "../../assets/Screenshot 2025-11-15 153243.png";
import MenuImg from "../../assets/Screenshot 2025-11-15 154226.png";
import MoveisImg from "../../assets/Screenshot 2025-11-15 155009.png";
import CrudImg from "../../assets/Screenshot 2025-11-15 155320.png"; // Corrected image source path if needed
import ProjectCard from "./ProjectCard"; // Import the Project Card component
import FilterButtons from "./FilterButtons"; // Import the Filter Buttons component

// Project data array
const ALL_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce",
    category: "Javascript",
    img: ECommerceImg,
    desc: "متجر إلكتروني كامل",
    demo: "https://abdullahmahmoud-dev.github.io/E-commerce/",
    github: "https://github.com/AbdullahMahmoud-dev/E-commerce",
  },
  {
    id: 2,
    title: "Job-Board",
    category: "React",
    img: job_boardimg,
    desc: "موقع وظائف صغير + API",
    demo: "https://abdullahmahmoud-dev.github.io/job-board/",
    github: "https://github.com/AbdullahMahmoud-dev/job-board",
  },
  {
    id: 3,
    title: "Menu App",
    category: "React",
    img: MenuImg,
    desc: "تطبيق قائمة مطاعم ديناميكي",
    demo: "https://abdullahmahmoud-dev.github.io/Menu/",
    github: "https://github.com/AbdullahMahmoud-dev/Menu",
  },
  {
    id: 4,
    title: "CRUD App",
    category: "Javascript",
    img: CrudImg,
    desc: "تطبيق CRUD بسيط يوضح العمليات الأساسية",
    demo: "https://abdullahmahmoud-dev.github.io/CRUD/",
    github: "https://github.com/AbdullahMahmoud-dev/CRUD",
  },
  {
    id: 5,
    title: "Moveis App",
    category: "React",
    img: MoveisImg,
    desc: "تطبيق عرض أفلام (Movie List)",
    demo: "https://abdullahmahmoud-dev.github.io/Moveis/",
    github: "https://github.com/AbdullahMahmoud-dev/Moveis",
  },
  {
    id: 6,
    title: "Job-Board", // Duplicate project entry, kept for consistency
    category: "React",
    img: job_boardimg,
    desc: "موقع وظائف صغير + API",
    demo: "https://abdullahmahmoud-dev.github.io/job-board/",
    github: "https://github.com/AbdullahMahmoud-dev/job-board",
  },
];

const Projects = () => {
  // State for filtering projects. "all" (or "second" as you used) is the default.
  const [currentCategory, setCurrentCategory] = useState("all");

  // Function to filter projects based on the current category
  const filteredProjects = ALL_PROJECTS.filter((project) => {
    // If currentCategory is "all" (or "second"), return all projects.
    // Otherwise, return projects matching the category.
    return currentCategory === "all" || project.category === currentCategory;
  });

  return (
    <main className="flex">
      {/* ⬅️ Left Section: Filter Buttons */}
      <FilterButtons
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      {/* ➡️ Right Section: Projects Display */}
      <section className="flex right-section">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Projects;