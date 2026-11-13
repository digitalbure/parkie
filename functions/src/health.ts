export interface HealthStatus {
  service: "parkie-functions";
  status: "ok";
  version: string;
  time: string;
}

export function healthStatus(now: Date = new Date()): HealthStatus {
  return {
    service: "parkie-functions",
    status: "ok",
    version: process.env.PARKIE_VERSION ?? "0.0.1",
    time: now.toISOString(),
  };
}
