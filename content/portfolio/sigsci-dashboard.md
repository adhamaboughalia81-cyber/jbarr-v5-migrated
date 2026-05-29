---
title: "Dashboard Redesign"
slug: "sigsci-dashboard"
employer: "Signal Sciences (acquired by Fastly)"
order: 4
---

## One dashboard doesn't fit every enterprise

As Signal Sciences scaled to hundreds of enterprise customers, a fundamental tension emerged: different enterprises organize what they monitor in fundamentally different ways.

Some structured their monitoring by tech stack. Others by business unit. Some by geographic region or risk tier. The signals that mattered also varied by persona — IT teams cared about different things than security engineers, who cared about different things than compliance leads.

The existing dashboard was a fixed, one-size-fits-all view. It couldn't adapt to how a given enterprise was structured, which meant every large customer eventually hit a wall: the product worked, but the dashboard didn't reflect how they thought about their environment. Customization requests piled up. Sales faced friction closing enterprise deals. Support tickets followed.

![The original Signal Sciences dashboard](/images/portfolio/sigsci-dashboard/signal-sciences-dashboard.png)

---

## A flexible dashboard built for any arrangement

The redesign centered on making the dashboard composable — customers could configure it to match how their organization actually thought about their monitoring environment, rather than conforming to Signal Sciences' default mental model.

Core changes:
- **Customizable views** — enterprises could arrange and prioritize what they saw based on their own structure (by tech stack, business unit, or any other organizational logic)
- **New card creation workflows** — teams could build and surface the specific signals relevant to their role, without needing to sift through data that wasn't theirs
- **Cosmo design system** — established a consistent component library to underpin the flexible layout and keep the experience coherent as customization options grew

The design system work was as important as the feature work: flexibility at scale only holds if the underlying components are reliable and consistent.

![Customizable dashboard](/images/portfolio/sigsci-dashboard/customize-dashboard.png)

![New dashboard card creation](/images/portfolio/sigsci-dashboard/new-dashboard-card-creation.png)

![Cosmo design system](/images/portfolio/sigsci-dashboard/sigsci-cosmo-design-system.png)

---

## Built for enterprise, proven at scale

The flexible dashboard was a direct enabler of Signal Sciences' enterprise go-to-market. It removed a key friction point in the sales cycle — large prospects could now see a path to configuring the product around their environment rather than working around a fixed view.

- Platform scaled to monitoring 40,000 apps processing 2 trillion requests/month
- Reduced support tickets by 12% — fewer customers hitting walls with inflexible defaults
- Improved sales conversion — enterprise deals no longer blocked on customization gaps
- Contributed to platform readiness for Fastly acquisition at $825M
