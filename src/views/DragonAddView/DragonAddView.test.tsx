import { render, screen, waitFor } from "@testing-library/react";
import DragonAddView from "./DragonAddView";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("DragonAddView tests", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DragonAddView />
      </BrowserRouter>
    );
  });

  test("Should be visible two inputs text (name and type)", () => {
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);

    const inputName = screen.getByLabelText("Nome");
    const inputType = screen.getByLabelText("Tipo");

    expect(inputName).toBeVisible();
    expect(inputType).toBeVisible();
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

  test("Should be visible the submit button", () => {
    const button = screen.getByDisplayValue("Adicionar");
    expect(button).toBeVisible();
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

    const submitButton = screen.getByDisplayValue("Adicionar");
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

    const submitButton = screen.getByDisplayValue("Adicionar");
    await act(async () => await user.click(submitButton));

    await waitFor(() => {
      const successMessage = screen.queryByText(
        "Dragão adicionado com sucesso!"
      );
      expect(successMessage).toBeVisible();
    });

    await waitFor(
      () => {
        const successMessage = screen.queryByText(
          "Dragão adicionado com sucesso!"
        );
        expect(successMessage).toBeNull();
      },
      { timeout: 3000 }
    );
  });
});
