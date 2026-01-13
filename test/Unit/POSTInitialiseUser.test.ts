import { afterAll, describe, expect, it } from "vitest";
import { POSTInitialiseUser } from "../../src/Http/Request/User/POSTInitialiseUser";
import { testUserProfile } from "../../src/msw/user";
import { server } from "../../src/msw/node";
import { http, HttpResponse } from "msw";
import { BASEADDRESS } from "../../src/Http/Request/BaseURLAddress";

describe("User HTTP Request Functions", async () => {
  describe("POST Initialise User", async () => {
    afterAll(() => server.resetHandlers());

    it("Should return a valid user profile on success", async () => {
      const userSub: string = "userSubFake";
      const result = await POSTInitialiseUser(userSub);
      expect(result).toEqual(testUserProfile);
    });

    it("Should return an error is the user sub is undefined or missing", async () => {
      const userSub = undefined;
      await expect(POSTInitialiseUser(userSub)).rejects.toThrow();
    });

    it("Should return error when the server returns an error", async () => {
      const endpoint = new URL(`${BASEADDRESS}/test/user/me`);

      server.use(
        http.post(endpoint.toString(), () => {
          return new HttpResponse(null, {
            status: 500,
            statusText: "Unexpected error occured",
          });
        })
      );

      await expect(
        POSTInitialiseUser("userfakesub", endpoint)
      ).rejects.toThrow();
    });
  });
});
