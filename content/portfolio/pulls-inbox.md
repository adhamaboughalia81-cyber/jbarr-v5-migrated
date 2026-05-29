---
title: "Pull requests dashboard"
slug: "pulls-inbox"
employer: "GitHub"
order: 1
---

**tl;dr:** Redesigned and led the implementation of GitHub's global PR dashboard as an inbox-style triage surface, shipped through a phased rollout with a daily feedback loop, and contributed directly to the codebase to move fast.

![New PR inbox](/images/portfolio/pulls-inbox/inbox-hero.png)
*The new PR dashboard's inbox, which helps users triage their review requests and respond to feedback*

## Problem: an outdated dashboard

The original version of the global pull request dashboard faced critical usability and architectural problems.

As agentic coding accelerated and larger teams adopted GitHub, its users were drowning in PRs. 20+ user interviews I conducted were loud and clear, users needed help to triage and take action on their PRs:
1. They wanted to know right away what they needed to review. Unblocking their teammates is the #1 priority.
1. They wanted to know what state their PRs were in and their next steps. Do they need to fix CI? Make changes? 

Additionally, the original version of the dashboard didn't use our modern React UI framework nor our design system.

![The original pulls view](/images/portfolio/pulls-inbox/old-version.png)
*Original version of the PR dashboard*

---

## Exploring the inbox model

Explorations centered on reframing the PR dashboard as a developer inbox — a surface that tells you what needs your attention, not just what exists.

Key design decisions explored:
- How the PR dashboard fits into a broader, multi-artifact dashboard system
- Triage groupings (authored, review requested, mentioned)
- Density and information hierarchy
- Status signals at a glance (CI, review state, draft)
- Enterprise and team use cases

I prototype the experience directly in our codebase as well as created Figma explorations:

![Figma exploration: assigned view](/images/portfolio/pulls-inbox/assigned.png)

![Figma exploration: my pulls](/images/portfolio/pulls-inbox/my-pulls.png)

![Figma exploration: org onboarding](/images/portfolio/pulls-inbox/org-onboarding.png)

---

## Ship small, validate fast, expand with confidence

The dashboard shipped in three gates, each designed to surface a different category of risk.

**Staff ship:** Internal dogfooding with GitHub employees. **Goal:** catch fundamental UX and data correctness issues before external exposure.

**Private preview with high-value customers:** Targeted rollout to a curated set of power users and enterprise accounts. **Goal:** validate triage model against real, diverse workflow patterns.

**Public preview:** Made available to the public as an "opt-in" preview, then transition to on-by-default. **Goal:** scale feedback collection and validate general availability.

![Iteration on the dashboard](/images/portfolio/pulls-inbox/pr-dashboard-image.png)
*An early iteration of the dashboard*

---

## A daily feedback system

We moved quickly and aggressively to get the dashboard to market. We used a tight feedback and iteration loop to support this.

**How it worked:**
1. Deployed a Kusto dashboard wired to in-product feedback signals
2. Used Copilot CLI to synthesize feedback data daily — surfacing themes, regressions, and sentiment shifts without manual triage
3. Each morning: read synthesis, identify the highest-signal items, ship a response, observe how it landed the next day

This created a 24-hour loop between signal and change. At scale, it meant the product was measurably improving every single day during the preview period.

![Feedback gathering process](/images/portfolio/pulls-inbox/feedback-gathering.png)
*Capturing feedback in the UI*

![Feedback dashboard](/images/portfolio/pulls-inbox/feedback-dashboard.png)
*High-level view of all the feedback collected*

![Copilot CLI skill for feedback synthesis](/images/portfolio/pulls-inbox/cli-skill.png)
*Copilot CLI skill to digest and synthesize the feedback*

![Synthesized feedback themes](/images/portfolio/pulls-inbox/feedback-themes.png)
*Feedback overview*

---

## Bugs → parity → polish

Every incoming signal was triaged against a deliberate three-tier stack:

1. **Bugs:** Anything that broke trust or caused data loss. Shipped immediately.
2. **Table stakes and parity:** Gaps that gave users a reason to revert to the old view. Addressed these aggressively to remove adoption friction.
3. **Fine-grained inbox improvements:** Enhancements to the new model that only mattered once users had committed to it.

---

## From design to ship

To move quickly, I directly contributed to the UI and underlying logic of the inbox. I made copy changes to components, layout adjustments, responsive tweaks, and refinements to the logic of the inbox directly in the codebase.

![Direct code contributions](/images/portfolio/pulls-inbox/contributions.png)
*My contributions to the project*

![In the weeds with code](/images/portfolio/pulls-inbox/in-the-weeds.png)
*I got in the code to ship UI improvements or to communicate refinements to the complicated inbox logic*

---

## Results

A new PR inbox that captures the full PR lifecycle and helps users prioritize their work, and a customizable dashboard system with smart defaults.

<video src="/images/portfolio/pulls-inbox/inbox.mp4"></video>
*Changelog video I prepared of the Inbox*

<video src="/images/portfolio/pulls-inbox/views.mp4"></video>
*Changelog video of the dashboard interactions*

![User quotes](/images/portfolio/pulls-inbox/quotes.png)