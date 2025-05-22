import { useState, useEffect } from "react";

import "../styles/App.css";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import EmploymentInfo from "./EmploymentInfo";
import Resume from "./Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    areaOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const [employmentInfo, setEmploymentInfo] = useState({
    employer: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  const handleEmploymentInfo = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newFormInfo = {
      employer: formData.get("employer"),
      title: formData.get("title"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      description: formData.get("description"),
    };
    setEmploymentInfo(newFormInfo);

    event.target.reset();
  };

  const handleEducationInfo = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newFormInfo = {
      schoolName: formData.get("schoolName"),
      areaOfStudy: formData.get("areaOfStudy"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
    };
    setEducationInfo(newFormInfo);

    event.target.reset();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newFormInfo = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phoneNumber"),
      email: formData.get("email"),
    };
    setPersonalInfo(newFormInfo);

    event.target.reset();
  };

  return (
    <>
      <div className="main">
        <p>{counter}</p>
        <div className="input-section">
          <PersonalInfo submitFn={handleFormSubmit} />
          <EducationInfo submitFn={handleEducationInfo} />
          <EmploymentInfo submitFn={handleEmploymentInfo} />
        </div>
        <div className="resume-section">
          <Resume
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            employmentInfo={employmentInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
