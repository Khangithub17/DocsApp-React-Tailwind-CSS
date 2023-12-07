import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);
  const data = [
    {
      desc: "This is my first project on React Tailwind Css",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is my first project on React Tailwind Css",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is my first project on React Tailwind Css",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference ={ref} />
      ))}
    </div>
  );
}

export default Foreground;
