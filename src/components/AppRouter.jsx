import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Films from "../pages/Films"
import People from "../pages/People"
import Planets from "../pages/Planets"
import Species from "../pages/Species"
import Starships from "../pages/Starships"
import Vehicles from "../pages/Vehicles"
import Error from "../pages/Error";
import Index from "../pages/Index";
import FilmItem from "../pages/FilmItem";
import PeopleItem from "../pages/PeopleItem";
import PlanetsItem from "../pages/PlanetsItem";
import SpeciesItem from "../pages/SpeciesItem";
import StarshipsItem from "../pages/StarshipsItem";
import VehiclesItem from "../pages/VehiclesItem";

const AppRouter = () => {

    return(
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/films" element={<Films />}/>
            <Route path="/films/:id" element={<FilmItem />}/>
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PeopleItem />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetsItem />} />
            <Route path="/species" element={<Species />}/>
            <Route path="/species/:id" element={<SpeciesItem />}/>
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<StarshipsItem />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehiclesItem />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
    )
}

export default AppRouter;