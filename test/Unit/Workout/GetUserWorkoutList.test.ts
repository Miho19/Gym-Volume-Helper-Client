import { afterAll, describe, expect, it } from "vitest";
import { GETUserWorkoutList } from "../../../src/Http/Request/Workout/GETUserWorkoutList";
import { server } from "../../../src/msw/node";
import { http, HttpResponse } from "msw";
import { BASEADDRESS } from "../../../src/Http/Request/BaseURLAddress";

describe("Workout Get User Workout List", () => {
  afterAll(() => server.resetHandlers());

  it("Should return workout list on success", async () => {
    const result = await GETUserWorkoutList();
    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Array);
  });

  it("Should return error on server failure", async () => {
    const endpoint = new URL("test/user/me/workout", BASEADDRESS);

    server.use(
      http.get(endpoint.toString(), () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: "Unexpected error occured",
        });
      })
    );

    await expect(() => GETUserWorkoutList(endpoint)).rejects.toThrowError(
      /unexpected/
    );
  });
});
