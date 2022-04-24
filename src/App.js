
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom"
import "./App.css"
import AppHeader from "./components/AppHeader"
import Home from "./pages/Home"
import Beers from "./pages/Beers"
import Beer from "./pages/Beer"
import RandomBeer from "./pages/RandomBeer"
// import NewBeer from "./pages/NewBeer"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<AppHeader />} />
          <Route path="beers/" element={<Beers />} />
          <Route path="beers/:id" element={<Beer />} /> 
          <Route path="random-beer/" element={<RandomBeer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App