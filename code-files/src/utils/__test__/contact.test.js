/**
 * screen -> the object of jsdom which contains all the nodes.
 */
import { render, screen } from "@testing-library/react"
import Contact from "../../components/Contact"
import '@testing-library/jest-dom';

/**
 * describe block is used to group test cases.
 */
describe('test cases', () => {
    test('Tests Load for contact page', () => {

        render(<Contact />);
        const contactUsElem = screen.getByTestId("contact-us");
        
        expect(contactUsElem).toBeInTheDocument();
    });
    
    test('Checks if all the textBoxes are loaded or not', () => {
    
        render(<Contact />);
    
        const textBoxNodes = screen.getAllByRole("textbox");
        
        expect(textBoxNodes.length).toBe(4);
    });
    
    /**
     * 'it' is an alternative name for 'test' method
     */
    it('Checks if the submit button is loaded', () => {
    
        render(<Contact />);
    
        const textBoxNodes = screen.getAllByText("Let's talk");
        
        expect(textBoxNodes.length).toBe(1);
    });
});

