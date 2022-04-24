import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
import BeerList from "../components/BeerList.js"
const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

const Beers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const getBeers = async () => {
        const beersFromApi = await axios.get(`${API_URL}/`);
        setBeers(beersFromApi.data)
    }
    getBeers()
  }, [])

  return <BeerList beers={beers} />
}

export default Beers