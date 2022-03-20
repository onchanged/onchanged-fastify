import { createApp } from "../helper";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("routes/example", async () => {
  describe("GET /example", () => {
    it("GET /example", async () => {
      const app = await createApp();
      const res = await app.inject({
        url: "/example",
      });
      expect(res.payload).eq("this is an example");
      await app.close();
    });
  });
});
