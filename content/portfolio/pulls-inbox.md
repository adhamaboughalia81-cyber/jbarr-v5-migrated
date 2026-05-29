---
title: "Global Pull Requests Dashboard"
slug: "pulls-inbox"
employer: "GitHub"
order: 1
---

## The old view wasn't built for how developers actually work

The original global pulls view was a flat, undifferentiated list. It had no triage model, no inbox concept, and no way to understand what actually needed attention. As developers scaled across more repos and orgs — and as agentic coding drove up PR volume — the surface broke down.

- No signal hierarchy — all PRs treated equally regardless of urgency or role
- Fragmented across repos with no unified view
- Table-stakes gaps compared to third-party tools like Graphite and Linear
- High cognitive load with no relief mechanisms

![The original pulls view](/images/portfolio/pulls-inbox/old-version.png)

---

## Exploring the inbox model in Primer

Explorations centered on reframing the pulls view as a developer inbox — a surface that tells you what needs your attention, not just what exists. All work done in Figma using the Primer Design System to ensure implementation fidelity.

Key design decisions explored:
- Triage groupings (authored, review requested, mentioned)
- Density and information hierarchy
- Status signals at a glance (CI, review state, draft)
- Empty state and onboarding to the new model

![Figma exploration: assigned view](/images/portfolio/pulls-inbox/assigned.png)

![Figma exploration: my pulls](/images/portfolio/pulls-inbox/my-pulls.png)

![Figma exploration: org onboarding](/images/portfolio/pulls-inbox/org-onboarding.png)

---

## Ship small, validate fast, expand with confidence

The dashboard shipped in three gates, each designed to surface a different category of risk.

**Staff ship** — Internal dogfooding with GitHub employees. Goal: catch fundamental UX and data correctness issues before external exposure.

**Private preview — high-value customers** — Targeted rollout to a curated set of power users and enterprise accounts. Goal: validate triage model against real, diverse workflow patterns. Gathered structured and unstructured feedback.

**Public preview** — Broad availability with explicit "preview" framing. Goal: scale feedback collection and measure adoption against the legacy view.

![Iteration on the dashboard](/images/portfolio/pulls-inbox/pr-dashboard-image.png)

---

## A daily closed-loop feedback system

Most PM feedback cycles are slow. This one was designed to be fast by default.

**The system:**
1. Deployed a Kusto dashboard wired to in-product feedback signals
2. Used Copilot CLI to synthesize feedback data daily — surfacing themes, regressions, and sentiment shifts without manual triage
3. Each morning: read synthesis, identify the highest-signal items, ship a response, observe how it landed the next day

This created a 24-hour loop between signal and change. At scale, it meant the product was measurably improving every single day during the preview period.

![Feedback dashboard](/images/portfolio/pulls-inbox/feedback-dashboard.png)

![Feedback gathering process](/images/portfolio/pulls-inbox/feedback-gathering.png)

![Copilot CLI skill for feedback synthesis](/images/portfolio/pulls-inbox/cli-skill.png)

![Synthesized feedback themes](/images/portfolio/pulls-inbox/feedback-themes.png)

![User quotes](/images/portfolio/pulls-inbox/quotes.png)

---

## Bugs → parity → polish

Every incoming signal was triaged against a deliberate three-tier stack:

1. **Bugs** — anything that broke trust or caused data loss. Shipped immediately.
2. **Table stakes / parity** — gaps that gave users a reason to revert to the old view. Addressed these aggressively to remove adoption friction.
3. **Fine-grained inbox improvements** — enhancements to the new model that only mattered once users had committed to it.

The logic: you can't iterate on delight until you've removed the reasons to leave. Parity work wasn't defensive — it was adoption strategy.

---

## Signal → prototype → ship → next day

The feedback loop was fast because the prototyping loop was fast too. AI-assisted prototyping was a core part of how ideas moved from signal to shippable change.

Rather than waiting on design-engineering cycles to explore an idea, changes were prototyped directly using AI — generating quick implementations of UI variants, interaction states, or layout alternatives that could be evaluated in the actual product context, not just in Figma. This compressed the gap between "we should try this" and "here's what it actually feels like."

**The full loop:**
1. Kusto + Copilot CLI surfaces a theme from feedback
2. AI prototype generated to explore the fix
3. Prototype evaluated, refined, and shipped
4. Signal observed the next day

---

## From design to ship — no handoff

Several key UI details were implemented directly as code contributions, not handed off to engineering. This closed the gap between design intent and production reality — especially for interaction states, edge cases, and density tuning that are hard to fully specify in Figma.

This matters because: at GitHub's scale, the difference between a designed spec and production implementation is measured in tens of millions of impressions. Direct code contribution is how you own that gap.

![Direct code contributions](/images/portfolio/pulls-inbox/contributions.png)

![In the weeds with code](/images/portfolio/pulls-inbox/in-the-weeds.png)

---

## The result

<video src="/images/portfolio/pulls-inbox/inbox.mp4"></video>

<video src="/images/portfolio/pulls-inbox/views.mp4"></video>
