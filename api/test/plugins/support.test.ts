import { describe, it } from "mocha";
import { expect } from "chai";
import Fastify from "fastify";
import Support from "../../src/plugins/support";

describe("support works standalone", () => {
  it("someSupport returns hugs", async () => {
    const fastify = Fastify();
    void fastify.register(Support);
    await fastify.ready();

    expect(fastify.someSupport()).equal("hugs");
  });
});
