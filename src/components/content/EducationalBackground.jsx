import React from "react";
import shs from "../../assets/shs.png";
import cics from "../../assets/cics.png";
import philnits from "../../assets/philnits.png";
import hackerrank from "../../assets/hackerrank.png";

function EducationalBackground() {
  return (
    <div className="page-content educational-background">
      <div className="education-segment">
        <h1>Educational Background</h1>
        <div className="educational-level">
          <div class="e-level-icon">
            <img src={shs} alt="Senior High School" />
          </div>
          <div className="e-level-text">
            <h1>UST Senior High School (2017 - 2019)</h1>
            <p>STEM Strand</p>
          </div>
        </div>
        <div className="educational-level">
          <div class="e-level-icon">
            <img src={cics} alt="CICS" />
          </div>
          <div className="e-level-text">
            <h1>
              UST College of Information and Computing Sciences (2019 - Present)
            </h1>
            <p>
              Bachelor of Science in Information Technology, Specializing in Web
              and Mobile Development
            </p>
          </div>
        </div>
      </div>
      <div className="education-segment certifications">
        <h1>Certifications</h1>
        <div className="certification">
          <div class="e-level-icon">
            <img src={philnits} alt="PhilNITS" />
          </div>
          <div className="e-level-text">
            <h1>PhilNITS: IT Passport Certification</h1>
            <p>Level 1</p>
          </div>
        </div>
        <div className="certification">
          <div class="e-level-icon">
            <img src={hackerrank} alt="HackerRank" />
          </div>
          <div className="e-level-text">
            <h1>JavaScript (Intermediate)</h1>
            <p><a target="_blank" href="https://www.hackerrank.com/certificates/a0aaf757c96d">https://www.hackerrank.com/certificates/a0aaf757c96d</a></p>
          </div>
        </div>
        <div className="certification">
          <div class="e-level-icon">
            <img src={hackerrank} alt="HackerRank" />
          </div>
          <div className="e-level-text">
            <h1>React (Basic)</h1>
            <p><a target="_blank" href="https://www.hackerrank.com/certificates/98ff56ccd19c">https://www.hackerrank.com/certificates/98ff56ccd19c</a></p>
          </div>
        </div>
        <div className="certification">
          <div class="e-level-icon">
            <img src={hackerrank} alt="HackerRank" />
          </div>
          <div className="e-level-text">
            <h1>Python (Basic)</h1>
            <p><a target="_blank" href="https://www.hackerrank.com/certificates/07423510accd">https://www.hackerrank.com/certificates/07423510accd</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
