import React from "react";

function BeerDetails({ beer }) {
  return (
    <div className="beer">
      <img src={beer.image_url} alt={beer.name} />
      <div className="beer-info">
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
			  <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;