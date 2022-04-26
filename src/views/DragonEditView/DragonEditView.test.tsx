import { screen, render, waitFor } from "@testing-library/react";
import DragonEditView from "./DragonEditView";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("DragonEditView tests with dragon", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DragonEditView
          dragon={{
            createdAt: "2022-04-18T07:44:10.620Z",
            name: "Dragão 1",
            type: "dragão",
            histories: [],
            id: "1",
          }}
        />
      </BrowserRouter>
    );
  });

  test("inputs should have the dragons values", () => {
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);

    const inputNome = screen.getByLabelText("Nome");
    expect(inputNome).toHaveValue("Dragão 1");

    const inputTipo = screen.getByLabelText("Tipo");
    expect(inputTipo).toHaveValue("dragão");
  });

  test("test input name value change on user type", async () => {
    const user = userEvent.setup();
    const inputNome = screen.getByLabelText("Nome");
    await user.clear(inputNome);
    await user.type(inputNome, "Dragão editado");
    expect(inputNome).toHaveValue("Dragão editado");
  });
  test("test input type value change on user type", async () => {
    const user = userEvent.setup();
    const inputTipo = screen.getByLabelText("Tipo");
    await user.clear(inputTipo);
    await user.type(inputTipo, "tipo editado");
    expect(inputTipo).toHaveValue("tipo editado");
  });

  test("input submit should be visible", async () => {
    const user = userEvent.setup();
    const submitButton = screen.getByDisplayValue("Salvar");
    await act(async () => await user.click(submitButton));
    expect(submitButton).toBeVisible();
  });

  test("Validations message should not to be visible", () => {
    const typeMessage = screen.queryByText(
      "*Você deve inserir um tipo ao dragão!"
    );
    const nameMessage = screen.queryByText(
      "*Você deve inserir um nome ao dragão!"
    );

    expect(typeMessage).toBeNull();
    expect(nameMessage).toBeNull();
  });

  test("on submit empty inputs, should show validation messages", async () => {
    const user = userEvent.setup();
    const inputNome = screen.getByLabelText("Nome");
    const inputTipo = screen.getByLabelText("Tipo");

    await user.clear(inputNome);
    await user.clear(inputTipo);

    const submitButton = screen.getByDisplayValue("Salvar");
    await user.click(submitButton);

    await waitFor(() => {
      const typeMessage = screen.queryByText(
        "*Você deve inserir um tipo ao dragão!"
      );
      const nameMessage = screen.queryByText(
        "*Você deve inserir um nome ao dragão!"
      );
      expect(nameMessage).toBeVisible();
      expect(typeMessage).toBeVisible();
    });
  });

  test("on submit valid inputs, should show success message per 3 seconds", async () => {
    const user = userEvent.setup();
    const inputNome = screen.getByLabelText("Nome");
    const inputTipo = screen.getByLabelText("Tipo");

    await user.clear(inputNome);
    await user.type(inputNome, "Editado");

    await user.clear(inputTipo);
    await user.type(inputTipo, "Editado");

    const submitButton = screen.getByDisplayValue("Salvar");
    await act(async () => await user.click(submitButton));

    await waitFor(() => {
      const successMessage = screen.queryByText("Dados alterados com sucesso!");
      expect(successMessage).toBeVisible();
    });

    await waitFor(
      () => {
        const successMessage = screen.queryByText(
          "Dados alterados com sucesso!"
        );
        expect(successMessage).toBeNull();
      },
      {
        timeout: 3000,
      }
    );
  });
});
