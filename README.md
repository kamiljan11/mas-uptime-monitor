# MAS Uptime Monitor

**Status:** production · **Built by** [Kamil Jan](https://kamiljan.com)

Uptime monitoring for MAS Group client sites, running entirely on GitHub Actions. No external
SaaS, no monthly fee, no account to lose access to.

## How it works

- Every 10 minutes the `uptime.yml` workflow pings every site listed in `sites.json`
- A site that times out or returns a bad status — confirmed by one retry, so a single blip is
  not an incident — opens a GitHub Issue labelled `downtime`, and comments on repeat failures
- When everything recovers, the Issue closes itself

The whole point is that the alerting substrate is something already paid for and already
watched. An Issue in a repo the team lives in beats an e-mail from a monitoring vendor.

## Adding a site

Add an entry to `sites.json` and commit. There is no dashboard, and that is deliberate.

## How security is handled

No credentials are needed — the monitor only makes unauthenticated GET requests to public
URLs, and the only token in play is the workflow's own `GITHUB_TOKEN`, scoped to this
repository. The repo is private because the site list maps the client portfolio.

## Licence

Proprietary. All rights reserved.
