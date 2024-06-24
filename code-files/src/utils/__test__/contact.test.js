import { render, screen } from "@testing-library/react"
import Contact from "../../components/Contact"

test('Tests Load for contact page', () => {

    render(<Contact />);

    const contactNode = screen.findByRole("button");
    expect(contactNode).toBeInTheDocument();
  
})
