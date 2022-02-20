/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("Should be rendering", () => {
    const { getByTestId } = render(
      <Button data-testid="Button-Component">Hello</Button>
    );
    const button = getByTestId("Button-Component");
    expect(button).toBeInTheDocument();
  });
});
