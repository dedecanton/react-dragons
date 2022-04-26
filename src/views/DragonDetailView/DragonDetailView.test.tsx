import React from "react";
import { screen, render } from "@testing-library/react";
import DragonDetailView from ".";
import { BrowserRouter } from "react-router-dom";

describe("DragonDetailView tests", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DragonDetailView
          dragon={{
            createdAt: "2022-04-18T13:08:23.706Z",
            name: "Dragão 2",
            type: "dragão",
            histories: [],
            id: "2",
          }}
        />
      </BrowserRouter>
    );
  });

  test("Should show the dragon name", () => {
    const name = screen.getByText("Dragão 2");
    expect(name).toBeVisible();
  });
  test("Should show the dragon date formated", () => {
    const date = screen.getByText("18/3/2022");
    expect(date).toBeVisible();
  });
});
