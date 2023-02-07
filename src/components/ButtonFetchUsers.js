import React from "react";

const ButtonFetchUsers = (props) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: "white",
        border: "2px solid grey",
        cursor: "pointer",
      }}
      onClick={props.click}
    >
      Dodaj użytkownika z API
    </button>
  );
};

export default ButtonFetchUsers;
