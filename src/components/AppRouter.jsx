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

const AppRouter = () => {

    return(
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/films" element={<Films />}/>
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/species" element={<Species />}/>
            <Route path="/starships" element={<Starships />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
    )
}

export default AppRouter;