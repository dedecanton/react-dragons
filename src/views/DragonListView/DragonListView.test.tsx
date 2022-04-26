import { screen, render } from "@testing-library/react";
import DragonListView from "./DragonListView";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const handleChangeFilter = jest.fn();
describe("DragonListView tests", () => {
  test("passing 1 dragon in filtered list, should have 1 list item", () => {
    render(
      <BrowserRouter>
        <DragonListView
          handleChangeFilter={handleChangeFilter}
          filter=""
          filteredDragons={[{createdAt: "2022-04-18T07:44:10.620Z",name: "Dragão 1",type: "dragão",histories: [],id: "1",},]}
        />
      </BrowserRouter>
    );
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(1)
  });
  test("passing 2 dragon in filtered list, should have 2 list item", () => {
    render(
      <BrowserRouter>
        <DragonListView
          handleChangeFilter={handleChangeFilter}
          filter=""
          filteredDragons={[
              {createdAt: "2022-04-18T07:44:10.620Z",name: "Dragão 1",type: "dragão",histories: [],id: "1",},
              {createdAt: "2022-04-18T07:44:10.620Z",name: "Dragão 2",type: "dragão",histories: [],id: "2",}
            ]}
        />
      </BrowserRouter>
    );
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(2)
  });
  test("passing 3 dragon in filtered list, should have 3 list item", () => {
    render(
      <BrowserRouter>
        <DragonListView
          handleChangeFilter={handleChangeFilter}
          filter=""
          filteredDragons={[
              {createdAt: "2022-04-18T07:44:10.620Z",name: "Dragão 1",type: "dragão",histories: [],id: "1",},
              {createdAt: "2022-04-18T07:44:10.620Z",name: "Dragão 2",type: "dragão",histories: [],id: "2",},
              {createdAt: "2022-04-18T07:44:10.620Z",name: "Dragão 3",type: "dragão",histories: [],id: "3",},
            ]}
        />
      </BrowserRouter>
    );
    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(3)
  });
});
