import React from "react";
import "./Home.css";

const RegistrationForm = ({
  name,
  city,
  email,
  password,
  handleChangeName,
  handleChangeCity,
  handleChangeEmail,
  handleChangePassword,
  onSubmitForm,
}) => {
  const checkEmail = (email) => {
    const emailVadidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailVadidation.test(email);
  };

  const checkPass = (password) => {
    const beginWithoutDigit = /^\D.*$/;
    const withoutSpecialChars = /^[^-() ]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;

    if (
      beginWithoutDigit.test(password) &&
      withoutSpecialChars.test(password) &&
      containsLetters.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const ValidForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <div className="block">
      <p>Registration Form</p>
      <form>
        <div className="formInput">
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => handleChangeName(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>City</label>
          <input
            value={city}
            onChange={(event) => handleChangeCity(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>Email</label>
          <input
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => handleChangePassword(event)}
          ></input>
        </div>
        {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
      </form>
    </div>
  );
};
export default RegistrationForm;
