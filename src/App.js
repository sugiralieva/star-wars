import React from "react";
import "./styles/App.css"
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";


function App() {
  const links = [
    {name: 'FILMS', link: '/films'},
    {name: 'PEOPLE', link: '/people'},
    {name: 'PLANETS', link: '/planets'},
    {name: 'SPECIES', link: '/species'},
    {name: 'STARSHIPS', link: '/starships'},
    {name: 'VEHICLES', link: '/vehicles'}
  ]


  return (
      <BrowserRouter>
        <Navbar links={links} />
        <hr/>
        <AppRouter links={links}/>
       </BrowserRouter>

  );
}

export default App;
