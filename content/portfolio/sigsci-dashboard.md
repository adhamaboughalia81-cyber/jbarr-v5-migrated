---
title: "Custom security dashboards"
slug: "sigsci-dashboard"
employer: "Signal Sciences (acquired by Fastly)"
order: 4
---

**tl;dr:** Redesigned the Signal Sciences dashboard into a composable system where enterprises could configure views to match their organizational structure, directly enabling enterprise sales.

![The original Signal Sciences dashboard](/images/portfolio/sigsci-dashboard/signal-sciences-dashboard.png)
*The dashboard*

## Problem: One dashboard didn't fit every enterprise

As Signal Sciences scaled to hundreds of enterprise customers, a fundamental tension emerged: different enterprises organize what they monitor in fundamentally different ways.

Some structured their monitoring by tech stack. Others by business unit. Some by geographic region or risk tier. The signals that mattered also varied by persona: IT admins, security engineers, and executive sponsors all cared about different data.

The existing dashboard was a fixed, one-size-fits-all view. It couldn't adapt to how a given enterprise was structured, which meant every large customer eventually hit a wall: the product worked, but the dashboard didn't reflect how they thought about their environment. Customization requests piled up. Sales faced friction closing enterprise deals. Support tickets followed.

---

## A flexible dashboard built for any arrangement

The redesign centered on making the dashboard composable — customers could configure it to match how their organization actually thought about their monitoring environment, rather than conforming to Signal Sciences' default mental model.

Core changes:
- **Customizable views:** Enterprises could arrange and prioritize what they saw based on their own structure (by tech stack, business unit, or any other organizational logic)
- **New card creation workflows:** Teams could build and surface the specific signals relevant to their role, without needing to sift through data that wasn't theirs
- **Design system:** Established a consistent component library to underpin the flexible layout and keep the experience coherent as customization options grew

![Customizable dashboard](/images/portfolio/sigsci-dashboard/customize-dashboard.png)
*Different states of the dashboard components, including empty states*

![New dashboard card creation](/images/portfolio/sigsci-dashboard/new-dashboard-card-creation.png)
*New tile creation flow*

![Cosmo design system](/images/portfolio/sigsci-dashboard/sigsci-cosmo-design-system.png)
*Design system*

---

## Results: Flexible dashboards adapted to enterprise scale

The flexible dashboard was a direct enabler of Signal Sciences' enterprise go-to-market. It removed a key friction point in the sales cycle — large prospects could now see a path to configuring the product around their environment rather than working around a fixed view.

- Platform scaled to monitoring 40,000 apps processing 2 trillion requests/month
- Improved sales conversion — enterprise deals no longer blocked on customization gaps
- Contributed to platform readiness for Fastly acquisition at $825M
