import React from "react";
import { screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import * as auth0 from "@auth0/auth0-react";
import { testUser } from "../../../src/Components/ProfileBubble/UserType";

import { testRender } from "../../Util";
import { exerciseList } from "./Utility";

vi.mock("@auth0/auth0-react");

describe("Individual Exercise Page", async () => {
  it("render individual exercise page after clicking in list", async () => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: testUser,
    });

    const result = testRender();
    const link = await result.findByText("Goto Exercise");
    expect(link).toBeInTheDocument();
    await userEvent.click(link);

    const exerciseName = "Incline Hammer Curls";

    const linkToIndividualPage = screen.getByRole("link", {
      name: `image of ${exerciseName} ${exerciseName}`,
    });

    expect(linkToIndividualPage).toHaveAttribute("href", "/exercise/K6NnTv0");

    await userEvent.click(linkToIndividualPage);

    expect(screen.getByText(overviewOfInclineHammerCurls)).toBeInTheDocument();
  });
});

const overviewOfInclineHammerCurls =
  "The Bench Press is a classic strength training exercise that primarily targets the chest, shoulders, and triceps, contributing to upper body muscle development. It is suitable for anyone, from beginners to professional athletes, looking to improve their upper body strength and muscular endurance. Individuals may want to incorporate bench press into their routine for its effectiveness in enhancing physical performance, promoting bone health, and improving body composition.";
