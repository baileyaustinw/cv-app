import "../styles/PersonalInfo.css";

function PersonalInfo({ submitFn }) {
  // need to pass this up to parent component in order to display correctly on CV portion

  return (
    <>
      <div className="personal-information">
        <h1>Personal Info</h1>
        <PersonalInputForm onSubmitFn={submitFn} />
      </div>
    </>
  );
}

function PersonalInput({ type, name, label, placeholder }) {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} />
      </div>
    </>
  );
}

function PersonalInputForm({ onSubmitFn }) {
  return (
    <>
      <form action="#" method="post" onSubmit={onSubmitFn}>
        <PersonalInput
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Enter your First Name"
        />
        <PersonalInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Enter your Last Name"
        />
        <PersonalInput
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your Phone Number 123-456-7890"
        />
        <PersonalInput
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter your Email Address"
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default PersonalInfo;
