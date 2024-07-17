import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="/next-website-url" className="block w-full md:w-1/3">
          <ProjectCard
            src="/News_app.png"
            title="News App using .Net MAUI"
            description="Developed a cross-platform news application using .NET MAUI and MVVM architecture, ensuring seamless performance across mobile and desktop devices. Integrated with GNews API for real-time global news updates."
          />
        </a>
        <a href="/fake-news-detection-url" className="block w-full md:w-1/3">
          <ProjectCard
            src="/CardImage.png"
            title="Fake News Detection Using ML"
            description="Employed Machine learning algorithms with Python, Django, HTML, and CSS. Utilized Pandas, NumPy for preprocessing and Decision Trees, Random Forests and Logistic Regression for classification. Offers a user-friendly interface for real-time news analysis."
          />
        </a>
        <a href="/fake-news-detection-url" className="block w-full md:w-1/3">
          <ProjectCard
            src="/aws.png"
            title="CI/CD Using Amazon Web Services"
            description="Employed Machine learning algorithms with Python, Django, HTML, and CSS. Utilized Pandas, NumPy for preprocessing and Decision Trees, Random Forests and Logistic Regression for classification. Offers a user-friendly interface for real-time news analysis."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
