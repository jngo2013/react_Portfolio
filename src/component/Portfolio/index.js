import React from 'react';
import '../../assets/portfolio.css'
function Portfolio(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
    <div>
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.note}</p>
            <div className="">
              <a href={props.tryLink}  target="blank">Link</a>
              <a href={props.repository} target="blank"> Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}
export default Portfolio;