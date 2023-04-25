import { useState } from "react";
import PersonalInfo from "./components/content/PersonalInfo";
import EducationalBackground from "./components/content/EducationalBackground";
import Projects from "./components/content/Projects";

import Page from "./components/Page";
import BioNote from "./components/content/BioNote";

function App() {
  const [selected, setSelected] = useState(null);

  const selectPage = (index) => {
    setSelected((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="main-container">
        <div className={`main-header ${selected && "hide"}`}>
          <h1>Gian Thiam</h1>
          <p>Software Engineer</p>
        </div>
        <Page
          focus={selectPage}
          currentSelected={selected}
          index={1}
          title={"Personal Information"}
          content={<PersonalInfo />}
        />
        <Page
          focus={selectPage}
          currentSelected={selected}
          index={2}
          title={"Educational Background and Certifications"}
          content={<EducationalBackground />}
        />
        <Page
          focus={selectPage}
          currentSelected={selected}
          index={3}
          title={"Projects"}
          content={<Projects />}
        />
        <Page
          focus={selectPage}
          currentSelected={selected}
          index={4}
          title={"BioNote"}
          content={<BioNote />}
        />
      </div>
    </>
  );
}

export default App;
