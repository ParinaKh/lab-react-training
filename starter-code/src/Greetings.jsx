import React from "react";

export default function Greetings(props) {
  const msgs = {
    cz: "Drobri Den",
    fr: "Bonjour",
    de: "Halo"
  };

  return (
    <div>
      {/* {props.lang === "de" ? "Halo" : "Bonjour"} {props.children} */}
      {msgs[props.lang]} {props.children}
    </div>
  );
}
