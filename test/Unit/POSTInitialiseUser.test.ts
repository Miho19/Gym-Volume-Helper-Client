import { afterAll, describe, expect, it } from "vitest";
import { POSTInitialiseUser } from "../../src/Http/Request/User/POSTUserProfile";
import { GETUserProfile } from "../../src/Http/Request/User/GETUserProfile";
import { PUTUserProfile } from "../../src/Http/Request/User/PUTUserProfile";
import { testUserProfile } from "../../src/msw/user";
import { server } from "../../src/msw/node";
import { http, HttpResponse } from "msw";
import { BASEADDRESS } from "../../src/Http/Request/BaseURLAddress";
import { UserProfile } from "../../src/Zod/UserSchema";

describe("User HTTP Request Functions", () => {
  describe("POST User Profile", () => {
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
      const endpoint = new URL("test/user/me", BASEADDRESS);

      server.use(
        http.post(endpoint.toString(), () => {
          return new HttpResponse(null, {
            status: 500,
            statusText: "Unexpected error occured",
          });
        })
      );

      await expect(() =>
        POSTInitialiseUser("fake user sub", endpoint)
      ).rejects.toThrowError(/unexpected/);
    });
  });

  describe("GET User Profile", async () => {
    afterAll(() => server.resetHandlers());

    it("Should return a user profile on success", async () => {
      const result = await GETUserProfile();
      expect(result).toEqual(testUserProfile);
    });

    it("Should return error when the server returns an error", async () => {
      const endpoint = new URL("test/user/me", BASEADDRESS);

      server.use(
        http.get(endpoint.toString(), () => {
          return new HttpResponse(null, {
            status: 500,
            statusText: "Unexpected error occured",
          });
        })
      );

      await expect(() => GETUserProfile(endpoint)).rejects.toThrowError(
        /Fetch User Profile/
      );
    });
  });

  describe("PUT User Profile", () => {
    it("Should return the updated user profile", async () => {
      const updatedUserProfile: UserProfile = {
        ...testUserProfile,
        currentWorkoutId: "2",
      };

      const result = await PUTUserProfile(updatedUserProfile);

      expect(result).toEqual(updatedUserProfile);
    });

    it("Should return an error if the requested update is an invalid object type", async () => {
      const updatedUserProfile: UserProfile = {
        name: "Josh",
      };

      await expect(() => PUTUserProfile(updatedUserProfile)).rejects.toThrow(
        /unexpected error/
      );
    });
  });
});
