---
title: "GitHub navigation redesign"
slug: "global-navigation"
employer: "GitHub"
order: 2
---

**tl;dr:** Led the ground-up redesign of GitHub's platform navigation for 150M+ developers, introducing a two-level system that exposed the information architecture and enabled the product to scale.

![GitHub at scale — 150M users](/images/portfolio/global-navigation/1-global-nav-hero.png)
*The new global navigation, seen on a repo*

## Problem: the old navigation didn't scale

As the GitHub platform grew to support over 150 million developers, including enterprises, its complexity increased significantly: features were added, the product was reorganized multiple times, and enterprise hierarchy evolved. The old navigation didn't reflect any of these changes.

**Problems with the old nav:**
- Didn't reflect GitHub's information architecture
- Didn't surface product areas — key features were buried
- Too many clicks to reach core workflows
- Users resorted to the browser address bar to navigate
- Got lost in hierarchy with no reliable orientation cues

**Platform-level problems created UX issues:**
- Couldn't scale for new features
- Inconsistent, duplicate components across the product
- Not accessible
- Not responsive for mobile devices
- Didn't use the design system
- Expensive to maintain

![The old navigation — problems with the existing approach](/images/portfolio/global-navigation/2-global-nav-before.png)
*The old navigation, while familiar to users, was outdated and didn't do its job well*

---

## Expose the information architecture

The underlying IA needed to be made explicit. GitHub's hierarchy is deep: Enterprise → Organization → Repos, and each layer has its own set of features.

![GitHub's information architecture](/images/portfolio/global-navigation/IA.png)
*See that arrow above? Navigating between these two points in the product took at least five clicks*

The original navigation didn't expose this hierarchy, making it impossible to navigate vertically or horizontally in the information architecture. Introducing a breadcrumb and fast repository switching enabled users to quickly navigate within an organization. Additionally, highly trafficked features weren't present in the navigation at all, requiring multiple clicks to get to workflows.

![Global navigation — repo-level view](/images/portfolio/global-navigation/3-github-global-navigation-closeup.png)
*The breadcrumb and repo switcher in action*

---

## Restructured for scale

The new navigation was designed with scale in mind, and I worked closely with partner feature teams to make sure the navigation was supported and implemented in their feature area. A two-level system included platform-level items globally at the top, and the lower level surfaced feature-specific items, which scaled as the feature grew.

Structurally, we addressed platform-level problems with a complete rebuild.

- Used the same components across the product
- Fully accessible (a11y)
- Responsive at any device size
- More performant
- Used design system

![Global navigation — expanded sidebar](/images/portfolio/global-navigation/4-github-global-navigation.png)

---

## Results

- Achieved >95% user satisfaction at rollout across GitHub's full user base
- Exposed IA to enable both vertical (platform hierarchy) and horizontal (feature area) navigation
- Enabled integration of Copilot AI features across the platform — the new nav created the surface area for Copilot to be woven into the global chrome
- Accessible and optimized for scale and long-term maintenance
