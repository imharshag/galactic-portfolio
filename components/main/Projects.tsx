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
            description="Created cross-platform news app with .NET MAUI & MVVM, integrating GNews API for global updates."
          />
        </a>
        <a href="/fake-news-detection-url" className="block w-full md:w-1/3">
          <ProjectCard
            src="/fake_news.png"
            title="Fake News Detection Using ML"
            description="Implemented ML with Python, Django, HTML/CSS, and classification algorithms."
          />
        </a>
        <a href="/fake-news-detection-url" className="block w-full md:w-1/3">
          <ProjectCard
            src="/aws.png"
            title="CI/CD Using Amazon Web Services"
            description="Implemented CI/CD pipeline using AWS services for efficient project deployment."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
