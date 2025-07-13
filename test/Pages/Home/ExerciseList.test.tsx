import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { router } from "../../../src/Router/Router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { testRender } from "../../Util";

const client = new QueryClient();

describe("Exercise List", () => {
  it("render exercise list", () => {
    const result = testRender();
    expect(screen.getByText("Exercise List")).toBeInTheDocument();
  });
});
