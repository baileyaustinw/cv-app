import "../styles/EmploymentInfo.css";

function EmploymentInfo({ submitFn }) {
  return (
    <>
      <div className="employment-info">
        <h1>Employment Info</h1>
        <EmploymentInputForm onSubmitFn={submitFn} />
      </div>
    </>
  );
}

function EmploymentInputForm({ onSubmitFn }) {
  return (
    <>
      <form action="#" method="post" onSubmit={onSubmitFn}>
        <EmploymentInput
          type="text"
          name="employer"
          label="Name of Employer"
          placeholder="Apple"
        />
        <EmploymentInput
          type="text"
          name="title"
          label="Job title"
          placeholder="VP of Business Development"
        />
        <EmploymentTextArea
          type="textarea"
          name="description"
          label="Job description"
          rows="5"
        />
        <EmploymentInput type="date" name="startDate" label="Start Date" />
        <EmploymentInput type="date" name="endDate" label="End Date" />
        <input type="submit" />
      </form>
    </>
  );
}

function EmploymentInput({ type, name, label, placeholder }) {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} />
      </div>
    </>
  );
}

function EmploymentTextArea({ name, label, placeholder, rows }) {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} placeholder={placeholder} rows={rows} />
      </div>
    </>
  );
}

export default EmploymentInfo;
