import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../components/App.jsx";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
