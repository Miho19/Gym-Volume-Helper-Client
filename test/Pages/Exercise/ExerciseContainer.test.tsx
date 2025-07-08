import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ExerciseContainer from "../../../src/Components/Exercise/ExerciseContainer";
import { ExerciseListElement } from "../../../src/Components/Exercise/ExerciseTypes";

import { createRoutesStub, MemoryRouter } from "react-router";
import { routerConfig } from "../../../src/Router/Router";

vi.mock("@auth0/auth0-react");

describe("Exercise Container", () => {
  it("render exercise page", async () => {
    const exerciseList: ExerciseListElement[] = [
      {
        name: "Incline Hammer Curls",
        img: "https://static.strengthlevel.com/images/exercises/incline-hammer-curl/incline-hammer-curl-800.jpg",
        link: "/exercise/1",
        id: "12345",
      },
    ];

    render(
      <MemoryRouter>
        <ExerciseContainer
          currentDate={new Date()}
          exerciseList={exerciseList}
        />
      </MemoryRouter>
    );

    //

    expect(screen.getByText(new Date().toDateString())).toBeInTheDocument();
    expect(screen.getByText(exerciseList[0].name)).toBeInTheDocument();
  });
});
