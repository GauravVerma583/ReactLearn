import React from "react";

export default function Task5({ datas }) {
  return (
    <div className="container">
      <div className="row">
        {datas.map((data) => {
          return (
            <>
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={data.image} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
