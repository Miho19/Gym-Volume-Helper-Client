import { describe, expect, it } from "vitest";
import { GETUserWorkoutList } from "../../src/Http/Request/Workout/GETUserWorkoutPresetList";

describe("Workout Get User Workout List", () => {
  it("Should return workout list on success", async () => {
    const result = await GETUserWorkoutList();
    expect(result).toBeTruthy();
  });
});
