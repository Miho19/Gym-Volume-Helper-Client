import { describe, expect, it } from "vitest";
import { POSTUserWorkoutList } from "../../../src/Http/Request/Workout/POSTUserWorkoutList";
import { server } from "../../../src/msw/node";
import { http, HttpResponse } from "msw";
import { BASEADDRESS } from "../../../src/Http/Request/BaseURLAddress";
import { NewWorkoutFormType } from "../../../src/Zod/NewWorkoutFormSchema";

describe("POST Workout List", () => {
  it("Should return the new workout on success", async () => {
    const formData: NewWorkoutFormType = {
      name: "new workout",
      pictureSource: "new picture source",
      exerciseNameList: [],
    };

    const result = await POSTUserWorkoutList(formData);

    expect(result).toBeTruthy();
    expect(result.name).toBe(formData.name);
    expect(result.pictureSource).toBe(formData.pictureSource);
  });

  it("Should return an error when the form data body is invalid", async () => {
    const formData = {
      name: "new workout",
      source: "new picture source",
    };

    await expect(POSTUserWorkoutList(formData)).rejects.toThrowError(
      /unexpected/,
    );
  });

  it("Should return an error when the server responds with an error", async () => {
    const formData: NewWorkoutFormType = {
      name: "new workout",
      pictureSource: "new picture source",
      exerciseNameList: [],
    };

    const endpoint = new URL("test/user/me/workout", BASEADDRESS);

    server.use(
      http.post(
        endpoint.toString(),
        () =>
          new HttpResponse(null, {
            status: 500,
            statusText: "Internal Server Error",
          }),
      ),
    );

    await expect(POSTUserWorkoutList(formData, endpoint)).rejects.toThrowError(
      /unexpected/,
    );
  });
});
