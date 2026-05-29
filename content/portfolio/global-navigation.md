---
title: "Global Navigation Redesign"
slug: "global-navigation"
employer: "GitHub"
order: 2
---

## GitHub at scale — and why the nav broke down

GitHub is a code storage and collaboration platform used by over 150 million developers since 2008. It's technically deep and conceptually complex — Enterprise → Organization → Repo → feature area — and the original navigation didn't reflect any of that hierarchy.

Problems with the old nav:
- Didn't reflect GitHub's information architecture
- Didn't surface product areas — key features were buried
- Too many clicks to reach core workflows
- Users resorted to the browser address bar to navigate
- Got lost in hierarchy with no reliable orientation cues

Platform-level problems compounding the UX issues:
- Couldn't scale for new features
- Inconsistent, duplicate components across the product
- Not accessible (a11y failures)
- Not responsive for mobile devices
- Didn't use the design system (Primer)
- Expensive to maintain

![GitHub at scale — 150M users](/images/portfolio/global-navigation/1-global-nav-hero.png)

![The old navigation — problems with the existing approach](/images/portfolio/global-navigation/2-global-nav-before.png)

---

## First, map the hierarchy

Before touching the UI, the underlying IA needed to be made explicit. GitHub's hierarchy is deep: Enterprise sits above Organizations, which contain Repos, each of which has its own set of feature areas (Code, Issues, Pull Requests, Discussions, Actions, Projects, Security, Insights).

The original navigation collapsed this structure into a flat, undifferentiated surface. The redesign started by exposing the hierarchy — vertical navigation for the platform scope, horizontal navigation for the repo scope — so users always know where they are and what's adjacent.

---

## A two-level system that reflects how GitHub is actually structured

The new global navigation introduces a two-level system:

**Global (top bar):** persistent access to cross-cutting navigation — search, notifications, create, account.

**Local (left sidebar):** context-sensitive navigation reflecting the current scope (personal, org, or repo), surfacing the right feature areas with proper hierarchy.

- Reflects information architecture end-to-end
- Exposes vertical and horizontal navigation so users can orient instantly
- Scalable — new features slot in without breaking the system
- Consistent across the product using Primer components
- Fully accessible (a11y compliant)
- Responsive for mobile devices

![Global navigation — repo-level view](/images/portfolio/global-navigation/3-github-global-navigation-closeup.png)

![Global navigation — expanded sidebar](/images/portfolio/global-navigation/4-github-global-navigation.png)

---

## Results

- Achieved >95% user satisfaction at rollout across GitHub's full user base
- Exposed IA to enable both vertical (platform hierarchy) and horizontal (feature area) navigation
- Enabled integration of Copilot AI features across the platform — the new nav created the surface area for Copilot to be woven into the global chrome
- Accessible and optimized for scale and long-term maintenance
