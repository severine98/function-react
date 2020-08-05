import React from "react";
import { render } from "@testing-library/react";
import pokemonCard from "./pokemonCard";

describe("pokemonCard tests", () => {
  it("should render", () => {
    expect(render(<pokemonCard />)).toBeTruthy();
  });
});
