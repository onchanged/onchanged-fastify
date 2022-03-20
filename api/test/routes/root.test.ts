import { createApp } from "../helper";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("routes/root", async () => {
  describe("GET /", () => {
    it("return root message", async () => {
      const app = await createApp();
      const res = await app.inject({
        url: "/",
      });
      expect(JSON.parse(res.payload)).deep.equal({ root: true });
      await app.close();
    });
  });
});
