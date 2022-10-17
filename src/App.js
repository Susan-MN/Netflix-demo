
import React from "react";

import NavBar from "./Components/NavBar/NavBar";
import {actions,originals,comedy,horror,romance,trending} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (

    <div className="App">
        <NavBar/>
        <Banner/>
       
        <RowPost  url={originals} title="Netflix Originals"   />
        <RowPost  url={trending} title="Trending Now"   />
        <RowPost url={actions} title="Actions" isSmall   />
        <RowPost url={comedy} title="Comedy" isSmall   />
        <RowPost url={horror} title="Horror" isSmall   />
        <RowPost url={romance} title="Romance" isSmall   />
    </div>
  );
}

export default App;
