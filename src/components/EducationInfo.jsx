import "../styles/EducationInfo.css";

function EducationInfo({ submitFn }) {
  return (
    <>
      <div className="education-info">
        <h1>Education Info</h1>
        <EducationInputForm onSubmitFn={submitFn} />
      </div>
    </>
  );
}

function EducationInputForm({ onSubmitFn }) {
  return (
    <>
      <form action="#" method="post" onSubmit={onSubmitFn}>
        <EducationInput
          type="text"
          name="schoolName"
          label="School Name"
          placeholder="University of North Carolina"
        />
        <EducationInput
          type="text"
          name="areaOfStudy"
          label="Area of Study"
          placeholder="Masters in Business"
        />
        <EducationInput type="date" name="startDate" label="Start Date" />
        <EducationInput type="date" name="endDate" label="End Date" />
        <input type="submit" />
      </form>
    </>
  );
}

function EducationInput({ type, name, label, placeholder }) {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} />
      </div>
    </>
  );
}

export default EducationInfo;
