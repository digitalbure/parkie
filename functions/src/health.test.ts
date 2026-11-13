import { describe, expect, it } from "vitest";
import { healthStatus } from "./health";

describe("healthStatus", () => {
  it("reports ok with an ISO timestamp", () => {
    const now = new Date("2026-11-13T00:00:00Z");
    const status = healthStatus(now);
    expect(status.status).toBe("ok");
    expect(status.service).toBe("parkie-functions");
    expect(status.time).toBe("2026-11-13T00:00:00.000Z");
  });
});
