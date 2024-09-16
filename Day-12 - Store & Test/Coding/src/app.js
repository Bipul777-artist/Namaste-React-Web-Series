import React, { Component, lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";


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
        <Provider store= {appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                <div className="app">
                    
                    <Header />
                    
                    <Outlet />
                    {/* {" I want to be the best Front End Developer - 11.5.24"} */}
                </div>
            </UserContext.Provider>
        </Provider>

        
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
                path: "/cart",
                element: <Cart />,
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