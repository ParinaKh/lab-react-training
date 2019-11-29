import React from "react";

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  return (
    <div style={{ backgroundColor: `${bgColor}` }}>
      <p>{type}</p>
      <p style={{ color }}>**** **** **** {number.slice(12)}</p>

      <p style={{ color }}>
        Expire {expirationMonth} {expirationYear} {bank}
      </p>
      <p> {owner}</p>
    </div>
  );
}
