import { render , screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component",()=>{
render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument(heading);
    

})

test("Should load button component",()=>{
render(<Contact />);

    const button = screen.getByRole("button")
    //Assertion
    expect(button).toBeInTheDocument(button);
    

})