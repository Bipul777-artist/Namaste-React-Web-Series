import RestaurantCard from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import mockData from "../MockData/mockData.json";
import "@testing-library/jest-dom";



test("Should check loading of Restaurant Card", () => {
    render (<RestaurantCard resData = {mockData} />)

   const name =  screen.getByText("Cakes");

   expect(name).toBeInTheDocument();
})

