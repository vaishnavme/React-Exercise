import React, { useState, useRef } from "react";
import { v4 } from "uuid";

const fonts = [
  { id: v4(), font: "serif" },
  { id: v4(), font: "Arial" },
  { id: v4(), font: "Times New Roman" }
];

function Figma() {
  const [copySuccess, setCopySuccess] = useState("");
  const [style, setStyle] = useState({
    font: "Arial",
    size: "16",
    bgColor: "#ffffff",
    fgColor: "#000000",
    bold: "",
    italic: "italic",
    underline: "underline"
  });

  return (
    <div>
      <select
        value={style.font}
        onChange={(e) => setStyle({ ...style, font: e.target.value })}
      >
        <option value="0">Select Font</option>
        {fonts.map(({ id, font }) => {
          return (
            <option key={id} value={font}>
              {font}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        value={style.size}
        style={{ width: "70px" }}
        onChange={(e) => setStyle({ ...style, size: e.target.value })}
      />{" "}
      &nbsp;&nbsp; BG COLOR{" "}
      <input
        type="color"
        value={style.bgColor}
        onChange={(e) => setStyle({ ...style, bgColor: e.target.value })}
      />{" "}
      &nbsp;&nbsp; FG COLOR
      <input
        type="color"
        value={style.fgColor}
        onChange={(e) => setStyle({ ...style, fgColor: e.target.value })}
      />{" "}
      &nbsp;&nbsp;
      <input
        type="button"
        value="B"
        className="text-decoration"
        onClick={() => setStyle({ ...style, bold: !style.bold ? "bold" : "" })}
      />
      <input
        type="button"
        value="I"
        className="text-decoration"
        onClick={() =>
          setStyle({ ...style, italic: !style.italic ? "italic" : "" })
        }
      />
      <input
        type="button"
        value="U"
        className="text-decoration"
        onClick={() =>
          setStyle({
            ...style,
            underline: !style.underline ? "underline" : ""
          })
        }
      />
      <div
        style={{
          width: "200px",
          border: "2px solid grey",
          padding: "2%",
          margin: "2%"
        }}
      >
        <p
          style={{
            fontFamily: style.font,
            fontSize: `${style.size}px`,
            backgroundColor: style.bgColor,
            color: style.fgColor,
            fontWeight: style.bold,
            fontStyle: style.italic,
            textDecoration: style.underline,
            textAlign: "center",
            padding: "5%"
          }}
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
    </div>
  );
}

export default Figma;
