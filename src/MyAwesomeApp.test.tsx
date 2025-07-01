import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName - render", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Sergio");
    expect(h3?.innerHTML).toContain("Barreras");
  });

  test("should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByRole("heading", { level: 1 });
    const h3 = screen.getByRole("heading", { level: 3 });

    console.log(h1.innerHTML);
    expect(h1?.innerHTML).toContain("Sergio");
    expect(h3?.innerHTML).toContain("Barreras");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
