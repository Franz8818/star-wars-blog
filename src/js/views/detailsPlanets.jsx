import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/others.css";

const DetailsPlanets = () => {
    return (

      <>
      <div className="container">
    <div className="info2 card mb-3">
  <div className="row g-2">
    <div className="img-info col-md-4">
      <img src="https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830." className="img-fluid rounded-start" alt="..." />
     </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><b>Nombre</b></h5>
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias pariatur maxime sit voluptas! Officiis esse, deserunt fugiat animi similique voluptate culpa illum perferendis. Quam sint minima asperiores mollitia. Consectetur, explicabo.</p>
        <p className="card-text"><small className="text-muted">features</small></p>
      </div>
    </div>
  </div>
 </div>
 </div>
    </> 
    );
  };
  
  export default DetailsPlanets;