---
title: "Attack Timeline Visualization"
slug: "sigsci-attack-timeline"
employer: "Signal Sciences (acquired by Fastly)"
order: 3
---

## The problem

Security teams couldn't quickly understand if they were under attack or what actions to take. The Events dashboard was nearly unusable — attack details were out of order and relationships between events were unclear.

![The original events page — a flat list with no chronological context](/images/portfolio/sigsci-attack-timeline/full-page/events-before.png)

---

## The approach

As the principal product designer, I created an industry-first "Attack Timeline" that visualized the attack lifecycle chronologically, making Signal Sciences' value proposition explicit. This required working at the intersection of business logic, UI, and the backend data model.

![Design exploration for the events page](/images/portfolio/sigsci-attack-timeline/full-page/event-exploration.png)

![The finished events page with attack timeline](/images/portfolio/sigsci-attack-timeline/full-page/event-finished.png)

---

## The timeline in detail

The timeline visualization required mapping every possible attack state and transition. I created a comprehensive flowchart of all event states to handle edge cases — from initial detection through expiration, including mode changes, status updates, and manual actions.

![Timeline breakdown — full state flowchart](/images/portfolio/sigsci-attack-timeline/breakdown/timeline-breakdown.png)

![Timeline state: expired](/images/portfolio/sigsci-attack-timeline/breakdown/timeline-expired.png)

![Timeline update: action taken](/images/portfolio/sigsci-attack-timeline/breakdown/timeline-update--action.png)

![Timeline update: mode change](/images/portfolio/sigsci-attack-timeline/breakdown/timeline-update--change-mode.png)

![Timeline update: current status](/images/portfolio/sigsci-attack-timeline/breakdown/timeline-update--current-status.png)

---

## The final product

![The attack timeline in production](/images/portfolio/sigsci-attack-timeline/signal-sciences-events.png)

---

## Results

- Reduced customer support tickets by 12%
- Increased sales demo conversion rate — became a competitive differentiator
- Designed and shipped as employee #30 at Series B startup → $775M acquisition
- Marketing team highlighted feature in every enterprise demo
