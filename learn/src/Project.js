import React from "react";
import "./Project.css";
import Pro from "./Project.json";
import Nav from "./Nav";
export default function Project() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="row">
          {Pro.map((data) => (
            <div key={data.id} className="col-md-3">
              <div className="card">
                <img src={data.img} class="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.des}</p>
                  <a href="{#}" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
