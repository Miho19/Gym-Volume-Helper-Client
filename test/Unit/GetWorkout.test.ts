import { describe, expect, it } from "vitest";
import { GETWorkout } from "../../src/Http/Request/Workout/GETWorkout";

describe("Get Workout Test", () => {
  it("Should return workout 1 on success", async () => {
    const workoutId = "1";
    const result = await GETWorkout(workoutId);
    expect(result).toBeTruthy();
    expect(result.id).toMatch(workoutId);
  });

  it("Should return workout 2 on success", async () => {
    const workoutId = "2";
    const result = await GETWorkout(workoutId);
    expect(result).toBeTruthy();
    expect(result.id).toMatch(workoutId);
  });

  it("Should return an error when workoutId is invalid", async () => {
    const workoutId = undefined;
    await expect(GETWorkout(workoutId)).rejects.toThrowError(/Workout Id/);
  });

  it("Should return not found when workoutId is not found", async () => {
    const workoutId = "random id";
    await expect(GETWorkout(workoutId)).rejects.toThrowError(/Not Found/);
  });
});
