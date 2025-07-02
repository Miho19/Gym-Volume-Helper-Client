import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "../../../src/Pages/Home";
import { MemoryRouter as Router } from "react-router";

describe("Profile Bubble", () => {
  it("render profile title", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByText("Profile Bubble")).toBeInTheDocument();
  });
});
