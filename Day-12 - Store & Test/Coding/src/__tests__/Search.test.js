import { screen, render, waitFor } from "@testing-library/react";
import Body from "../components/body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("Load Cards", async () => {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );


    const cards = screen.getByRole("button", {name: "Search"});
    expect(cards).toBeInTheDocument();
    
})