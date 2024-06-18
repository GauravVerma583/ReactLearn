import React from "react";
import stud from "./stud.json";
export default function Student() {
  return (
    <div>
      {stud &&
        stud.map((list) => (
          <div key={list.id}>
            <h1>{list.name}</h1>
            <h1>{list.roll}</h1>
            {list.sub &&
              list.sub.map((subject) => (
                <div key={list.id}>
                  <h1>{subject.subj}</h1>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}
