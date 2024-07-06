import { render, screen } from "@testing-library/react";
import appDataStore from "../../utils/redux/appDataStore";
import '@testing-library/jest-dom';

import Header from "../../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Test Cases For Header Component", () => {
  it("should load the Header Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appDataStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    /**
        As a second argument in these getter functions(getByText, getByRole, etc.), an object containing details of element(name, type, id, etc) to be fetched can be passed as second argument. 
     */
    const aboutTag = screen.getByText("About");
    expect(aboutTag).toBeInTheDocument();
  });
});
