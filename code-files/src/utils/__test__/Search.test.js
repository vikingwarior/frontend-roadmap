import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

import Body from "../../components/Body";

import DUMMY_RES_DATA from "../mocks/dummyrestaurant-data";
import { BrowserRouter } from "react-router-dom";

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
  });
});
