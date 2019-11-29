import React from "react";

export default function IdCard({
  lastName,
  firstName,
  isStudent,
  country,
  picture
}) {
  return (
    <div>
      <img src={picture} alt="bonjour" />
      <ul>
        {lastName}
        <br />
        {firstName}
        <br />
        {isStudent && "student"}
        <br />
        {country}
        <br />
      </ul>
    </div>
  );
}
