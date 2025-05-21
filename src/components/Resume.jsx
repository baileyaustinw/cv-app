import "../styles/Resume.css";

function Resume({ personalInfo, educationInfo, employmentInfo }) {
  return (
    <>
      <div className="resume">
        <h1>Resume</h1>
        <h2>
          {personalInfo.firstName} {personalInfo.lastName}
        </h2>
        <p>
          {personalInfo.phone} | {personalInfo.email}
        </p>
      </div>
      <h3>Education</h3>
      <p>
        {educationInfo.schoolName} ~ {educationInfo.startDate}-
        {educationInfo.endDate}
      </p>
      <p>
        <em>{educationInfo.areaOfStudy}</em>
      </p>
      <h3>Employment</h3>
      <p>
        {employmentInfo.employer} ~ {employmentInfo.startDate}-
        {employmentInfo.endDate}
      </p>
      <p>
        <em>{employmentInfo.title}</em>
      </p>
      <p>{employmentInfo.description}</p>
    </>
  );
}

export default Resume;
