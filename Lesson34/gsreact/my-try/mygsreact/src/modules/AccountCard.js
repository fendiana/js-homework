import React from "react";
import "./AccountCard.css";

const AccountCard = ({ name, city, email }) => {
  return (
    <div className="accBlock">
      <p>Account Card</p>
      <div className="formLabel">
        <p className="accText">Name: </p>
        <p>{name}</p>
      </div>
      <div className="formLabel">
        <p className="accText">City: </p>
        <p>{city}</p>
      </div>
      <div className="formLabel">
        <p className="accText">Email: </p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default AccountCard;
