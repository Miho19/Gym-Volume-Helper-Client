import { describe, expect, it } from "vitest";
import { POSTInitialiseUser } from "../../src/Http/Request/User/POSTInitialiseUser";
import { testUserProfile } from "../../src/msw/user";

describe("Post Initialise User", async () => {
  it("Should return a valid user profile on success", async () => {
    const userSub: string = "userSubFake";
    const result = await POSTInitialiseUser(userSub);
    expect(result).toEqual(testUserProfile);
  });
});
