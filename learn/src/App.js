// import Header from "./Header";

import { useState } from "react";
import Task5 from "./Task5";

// import { Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Service from "./Service";
// import Contact from "./Contact";
// import Teams from "./Teams";
// import Navbar from "./Navbar";

// import UseEffect from "./UseEffect";

// import Project from "./Project";

// import Student from "./Student";

// import Form from "./Form";

// import Cntr from "./Cntr";

// import Main from "./Main";

function App() {
  // const arr = [
  //   { name: "amit", roll: "12" },
  //   { name: "Harsh", roll: "13" },
  //   { name: "rahul", rol: "14" },
  // ];
  const [datas, setDatas] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((data) => {
      return data.json();
    })
    .then((resp) => {
      setDatas(resp);
    });
  return (
    <>
      <Task5 datas={datas} />
      {/* <Main /> */}
      {/* <Header arrays={arr} /> */}
      {/* <Cntr /> */}
      {/* <Form /> */}
      {/* <Student /> */}
      {/* <Project /> */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Teams" element={<Teams />} />
      </Routes> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}
export default App;
