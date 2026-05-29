---
title: "Enterprise security navigation"
slug: "sigsci-navigation"
employer: "Signal Sciences (acquired by Fastly)"
order: 5
---

**tl;dr:** Redesigned Signal Sciences' navigation from a flat, rigid design to a scalable and flexible system with usage data and IA mapping, supporting the platform through complex enterprise growth.

![Navigation after the redesign](/images/portfolio/sigsci-navigation/navigation-after.png)
*Redesigned platform navigation with affordances for enterprise scaling and management*

## Scaling from startup to enterprise platform

Signal Sciences grew from a single-product security tool to an enterprise platform with dozens of features, multiple user roles, and complex multi-site configurations. The original navigation was unplanned and built for early-stage growth, not enterprise scale.

- Didn't reflect the information architecture
- Difficult to find key features
- No room to grow as the product expanded

![The original flat navigation](/images/portfolio/sigsci-navigation/old-nav.png)
*Original flat navigation, with no concept of enterprise hierarchy*

---

## Map the product and understand behavior

Before redesigning, the full site inventory was mapped and power users were identified across customer segments. Usage data was pulled to understand which features were actually accessed and how often.

Key research inputs:
- Full site inventory with feature descriptions
- Individual dashboard usage data (sessions per user, by number of sites managed) revealed a power-user tier with dramatically higher engagement
- Click data on nav links showing where users actually went: Overview, Agents, and Requests needed to be prioritized.

![Identifying power users](/images/portfolio/sigsci-navigation/identifying-power-users.png)

![Site inventory mapping](/images/portfolio/sigsci-navigation/site-inventory.png)

![Navigation redesign — events page](/images/portfolio/sigsci-navigation/navigation-events.png)

---

## A nav that reflects how the product is actually structured

The redesign restructured navigation around the product's real information architecture. Corp-level tools were at the top, site-level below, and features were grouped by workflow.

**Key changes:**

- Breadcrumb navigation for wayfinding in hierarchy (Corp / Site name always visible)
- Surfaced frequently accessed features at the top level
- Grouped related features into menus by workflow (Monitor, Configure, Site Settings)
- Blocking status always-present

As the product grew, this two-layer model enabled us to support cross-enterprise features that mapped to our RBAC scheme. Users with corp-level permissions had global access to the top layer, while site-level admins had access to site-level features. 

![Cosmo design system](/images/portfolio/sigsci-dashboard/sigsci-cosmo-design-system.png)
*Design system included navigation states and primitives*

---

## Results

- Redesigned navigation for large, complex enterprise instances managing dozens of sites
- Scaled the platform from startup to enterprise without disrupting existing user workflows
- Contributed to platform readiness for Fastly acquisition ($825M)