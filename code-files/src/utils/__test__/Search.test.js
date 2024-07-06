import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

import Body from "../../components/Body";

import DUMMY_RES_DATA from "../mocks/dummyrestaurant-data";
import { BrowserRouter } from "react-router-dom";

/*
    Fetch function does not exist in testing Library as it is not a native JavaScript ApI but a browser API. THerefore to use it inside our test cases we will need Mock/Dummy Fetch API (replicate the structure of fetch API) for our utility.
 */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(DUMMY_RES_DATA),
  });
});

describe("Search Integration tests", () => {
  it("should render Body component with Search inside it", async () => {
    /*
        When testing, code that causes React state updates should be wrapped into act this ensures that you're testing the behavior the user would see in the browser.
     */
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    /**
        As a second argument in these getter functions(getByText, getByRole, etc.), an object containing details of element(name, type, id, etc) to be fetched can be passed as second argument. 
     */
    const searchTextBox = screen.getByTestId("inp-text-box");
    const searchBtn = screen.getByRole("button", {name: "Search"});


    // Assertion to check if btn and box is loaded or not
    expect(searchTextBox).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    //Modify search box

    // Since jest-dom doesn't have browser events we have to mock them
    const browserEventMock = {target : {value : "Burger"}};

    // Assertion to check the rescards are loaded (total 20 cards are loaded by default as per mock data)
    const resCards = screen.getAllByTestId("res-card")
    expect(resCards.length).toBe(20);

    fireEvent.change(searchTextBox, browserEventMock)
    fireEvent.click(searchBtn);

    //Assertion to validate entries for search query for word "Burger"(Total 4 entries have word burger in them)
    const newResCards = screen.getAllByTestId("res-card")
    expect(newResCards.length).toBe(4);
  });
});
