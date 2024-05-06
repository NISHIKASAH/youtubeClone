import React from "react";
import Button from "./Button";

const List = [
  "flex",
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "All",
  "Gaming",
  "Songs",
  "Live",
];
const ButtonContainer = () => {
  return (
    <div className="flex">
      {List.map((list, idx) => {
        return (
          <div key={idx}>
            {" "}
            <Button name={list} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
