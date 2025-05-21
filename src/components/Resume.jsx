import "../styles/Resume.css";

function Resume({ personalInfo, educationInfo, employmentInfo }) {
  return (
    <>
      <div className="resume">
        <h1>Resume</h1>
        <h2>
          {personalInfo.firstName} {personalInfo.lastName}
        </h2>
        <p>{educationInfo.startDate}</p>
      </div>
    </>
  );
}

export default Resume;
