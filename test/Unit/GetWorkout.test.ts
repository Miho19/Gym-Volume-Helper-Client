import { afterEach, describe, expect, it } from "vitest";
import { GETWorkout } from "../../src/Http/Request/Workout/GETWorkout";
import { server } from "../../src/msw/node";
import { http, HttpResponse } from "msw";
import { BASEADDRESS } from "../../src/Http/Request/BaseURLAddress";

describe("Get Workout Test", () => {
  afterEach(() => server.resetHandlers());

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

  it("Should return error when server returns an error", async () => {
    const endpoint = new URL("test/workout/1", BASEADDRESS);
    server.use(
      http.get(endpoint.toString(), () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: "Unexpected error occured",
        });
      })
    );

    const workoutId = "random id";
    await expect(GETWorkout(workoutId)).rejects.toThrowError(/unexpected/);
  });
});
