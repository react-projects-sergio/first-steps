import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test item";

    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
  });

  test("should render with custom values", () => {
    const name = "Test item";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={"Test item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(buttonAdd.innerHTML).toBe("+1");
    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    render(<ItemCounter name={"Test item"} quantity={5} />);
    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);

    expect(buttonSubtract.innerHTML).toBe("-1");
    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is one", () => {
    render(<ItemCounter name={"Test item"} />);
    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);

    expect(screen.getByText("1")).toBeDefined();
  });
});
