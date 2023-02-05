import React, { useState } from "react";
interface Header {
  title: string;
}
interface Props {
  header: Header[];
  clickedindex: number;
  setClickedIndex: React.Dispatch<React.SetStateAction<number>>;
}
const Header = ({ header, setClickedIndex, clickedindex }: Props) => {
  function handleclick(index:number) {
    setClickedIndex(index);
  }

  const [sat, setSat] = useState();

  return (
    <div className="header">
      {header &&
        header.map((header, index) => (
          <button
            key={index}
            style={
              clickedindex === index
                ? { backgroundColor: "rgb(81, 159, 238)" }
                : { backgroundColor: "rgb(32, 76, 122)" }
            }
            onClick={() => {
              handleclick(index);
            }}
          >
            {header.title}
          </button>
        ))}
    </div>
  );
};

export default Header;
