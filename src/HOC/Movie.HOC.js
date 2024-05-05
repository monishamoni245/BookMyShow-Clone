//HOC-->Higher Order Components
//it basically transforms any certain part of component to other component
//Adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
//Layouts
import MovieLayout from "../layouts/Movie.layout";
const MovieHOC = ({ component: Component, ...rest }) => {
    //components
    //props -->path, exact
    return (
        <Route
            {...rest}
            component={(props) => (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )
            }
        />
    );
};

export default MovieHOC;
