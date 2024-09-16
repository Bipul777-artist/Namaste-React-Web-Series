import React, { Component, lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import resList from "../utils/mockData";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";



const MainApp = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Random Stranger"
        }
        setUserName(data.name);
    }, [])
    
    return (
        // Over ride the default value
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className="app">
                
                <Header />
                
                <Outlet />
                {/* {" I want to be the best Front End Developer - 11.5.24"} */}
            </div>
        </UserContext.Provider>

    );
};

const Grocery = lazy(() => import('./components/Grocery.js'));

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Checking the fallback feature of Suspense component</h1>}>
                        <Grocery/>
                    </Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter} />);