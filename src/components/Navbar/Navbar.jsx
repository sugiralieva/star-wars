import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({links}) => {

    return(
        <div className="navbar">
          <div className="navbar_items">
            {links.map((l) => 
                <Link to={l.link}>{l.name}</Link>
              )}
          </div>
        </div>
    )
}

export default Navbar;