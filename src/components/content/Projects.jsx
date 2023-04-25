import React from "react";
import Project from "../Project";

const projects = [
  {
    href: "https://github.com/gnrflcthm/ASEAiWorkBuidersCo",
    imageSrc:
      "https://opengraph.githubassets.com/0b74ab0f00e828f5472fd6d2ca453c3e1121c5783e67f172d904a7b3e66711f8/gnrflcthm/ASEAiWorkBuidersCo",
    title: "ASEAiWorkBuidersCo",
    description: "An Online Appointment System For ASEA iWork Builders Co.",
  },
  {
    href: "https://github.com/gnrflcthm/backend-101-final-project",
    imageSrc:
      "https://opengraph.githubassets.com/17f05e20ec7781f784c046a7cf35416403973e5e65e429148b1c6bd07c7046b8/gnrflcthm/backend-101-final-project",
    title: "backend-101-final-project",
    description: "An Online Booking Service made with Express and MongoDB.",
  },
  {
    href: "https://github.com/gnrflcthm/MyBasics",
    imageSrc:
      "https://opengraph.githubassets.com/987dbbf657757e4033af526cf64e209ce32d6a4c784d49c49202e3a137eefc6e/gnrflcthm/MyBasics",
    title: "MyBasics",
    description:
      "A productivity mobile application to help its users in maintaining an organized workflow. Compared to other individual applications, this project will compile the basic essential applications and utilize them as its primary features for easier access of users.",
  },
  {
    href: "https://github.com/gnrflcthm/site-ceap",
    imageSrc:
      "https://opengraph.githubassets.com/28895adf1d37032013222f8824ff694ea90588657cb50db057cc7a06dd5d68d1/gnrflcthm/site-ceap",
    title: "CEAP Online Resources For Education (CORE)",
    description:
      "A Document Management System for the Catholic Educational Association of the Philippines (CEAP)",
  },
];

function Projects() {
  return (
    <div className="page-content projects">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
}

export default Projects;
