import React from "react"
import { Link } from "react-router-dom"

const BeerList = ({ beers }) => {
  return beers.map((beer) => {
    return (
      <div className="beers">
        <picture><img src={beer.image_url} alt={beer.name} /></picture>
        <div className="infos">
          <Link to={`/beers/${beer._id}`}> <h2>{beer.name}</h2></Link>
          <p className="tagline">{beer.tagline}</p>
        </div>
      </div>
    )
  })
}

export default BeerList