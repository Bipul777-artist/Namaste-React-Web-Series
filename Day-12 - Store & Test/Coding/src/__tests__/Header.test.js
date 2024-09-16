import {screen, render, fireEvent} from "@testing-library/react";
import Header from "../components/header";
import {BrowserList, BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { act } from "react";


test("Check whether Login Button is loading in Header", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>   
    );

    const LoginBtn = screen.getByRole("button", {name: "LogIn"})

    expect(LoginBtn).toBeInTheDocument();

});

test("Checking Cart Length" , () => {

    render(

        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )   

    const CartItems = screen.getByText(/Cart/);

    expect(CartItems).toBeInTheDocument();

})

test("Should check LogIn, LogOut functionality", () => {

    render(

        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const LogInBtn = screen.getByRole("button" , {name: "LogIn"});

    fireEvent.click(LogInBtn);

    const LogOutBtn = screen.getByRole("button", {name: "LogOut"});

    expect(LogOutBtn).toBeInTheDocument();
})  


