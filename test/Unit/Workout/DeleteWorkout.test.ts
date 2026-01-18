import { describe, expect, it } from "vitest";
import { DELETEUserWorkout } from "../../../src/Http/Request/Workout/DELETEUserWorkout";
import { server } from "../../../src/msw/node";
import { http, HttpResponse } from "msw";
import { BASEADDRESS } from "../../../src/Http/Request/BaseURLAddress";

/** Missing checking if there is an internal server error */

describe("Delete Workout", () => {
  it("Should delete workout 1 on success", async () => {
    const workoutId = "1";
    const result = await DELETEUserWorkout(workoutId);
    expect(result).toBeTruthy();
  });

  it("Should delete workout 2 on success", async () => {
    const workoutId = "2";
    const result = await DELETEUserWorkout(workoutId);
    expect(result).toBeTruthy();
  });

  it("Should return an error when attempting to delete workout that does not exist", async () => {
    const workoutId = "12345";
    await expect(DELETEUserWorkout(workoutId)).rejects.toThrowError(
      /Not Found/
    );
  });

  it("Should return an error when the server returns an error", async () => {
    const endpoint = new URL("test/workout/1", BASEADDRESS);

    server.use(
      http.get(endpoint.toString(), () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: "Internal server error",
        });
      })
    );

    await expect(DELETEUserWorkout(endpoint.toString())).rejects.toThrowError(
      /unexpected/
    );
  });
});
