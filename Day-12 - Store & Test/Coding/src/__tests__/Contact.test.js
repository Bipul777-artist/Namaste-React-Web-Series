
import {render, screen} from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Test Section", () => {

    it("Should check if component is loaded or not", () => {
        // Render
        render(<Contact />);
    
        // Quering 
        const heading = screen.getByRole("heading");
    
        // Asserting
        expect(heading).toBeInTheDocument();
    });
    
    it("Should check the whether button loads or not", () => {
        // Render
        render(<Contact />);
    
        // Quering
        const buttonLoading = screen.getByRole("button");
    
        // Asserting
        expect(buttonLoading).toBeInTheDocument();
    });
    
    // it("Check First Input component", () => {
    
    //     render(<Contact />)
    
    //     const inputText = screen.getByPlaceholderText("message");
    
    //     expect(inputText).toBeInTheDocument();
    
    // });
    
    it("Check the length of Input Component", () => {
       
        render(<Contact />);
    
        const lengthOfInput = screen.getAllByPlaceholderText("message").length;
    
        expect(lengthOfInput).toBe(2);
    })
});


