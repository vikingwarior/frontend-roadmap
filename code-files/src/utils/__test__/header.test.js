import { render, screen } from "@testing-library/react";
import appDataStore from "../../utils/redux/appDataStore";

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
    const aboutTag = screen.getByText("About");
    expect(aboutTag).toBeInTheDocument();
  });
});
