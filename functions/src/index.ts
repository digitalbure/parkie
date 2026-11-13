import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import { healthStatus } from "./health";

// All functions run in the region closest to Fiji.
setGlobalOptions({ region: "australia-southeast1", maxInstances: 10 });

/** Liveness probe used by uptime checks and CI smoke tests. */
export const health = onRequest((_req, res) => {
  res.json(healthStatus());
});
