import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="navbar">
          <div className="navbar_items">
                <Link to="/films">FILMS</Link>
                <Link to="/people">PEOPLE</Link>
                <Link to="/planets">PLANETS</Link>
                <Link to="/species">SPECIES</Link>
                <Link to="/starships">STARSHIPS</Link>
                <Link to="/vehicles">VEHICLES</Link>
          </div>
        </div>
    )
}

export default Navbar;