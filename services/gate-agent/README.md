# Gate agent – on-site software for boom gates

Runs on the lane controller (spec §23.1): reads ANPR camera events, decides open/stay closed in < 1 s using a
local cache, triggers the barrier relay, queues events offline, syncs to the platform.
Safety rule: never lock exits shut for billing reasons.
