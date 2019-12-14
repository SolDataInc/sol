import Layout from "../components/myLayout";
import React, { useState } from "react";
import HabitBox from "../components/HabitBox";
import Link from "next/link";

export default function Blog() {
  const [name, setName] = useState("");
  const [boxData, setBoxes] = useState([]);
  return (
    <Layout>
      <h1>My Blog</h1>
      <h1>Number of boxes is {boxData.length}</h1>
      <button
        onClick={() => {
          setBoxes([...boxData, { key: boxData.length + 1, name: name }]);
          setName("");
        }}
      >
        Add Box
      </button>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
      ></input>
      {boxData.map(box => (
        <>
          <br></br>
          <hr></hr>
          {box.name}
          <HabitBox name={name} key={box.key} />
          <button
            onClick={() => {
              var boxArr = boxData.filter(o => o.key !== box.key);
              setBoxes(boxArr);
            }}
          >
            Remove Box
          </button>
        </>
      ))}
    </Layout>
  );
}
