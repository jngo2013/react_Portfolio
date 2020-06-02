import React from 'react';

function Portfolio(props) {
  return (
    <div>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.note}</p>
            <div className="">
              <a href={props.tryLink} className="btn btn-primary" target="blank">Link</a>
              <a href={props.repository} className="btn btn-primary" target="blank"> Repo</a>
            </div>
          </div>
      </div>
    </div>
  );  
}
export default Portfolio;