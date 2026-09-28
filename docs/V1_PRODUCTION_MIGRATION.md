# V1 Production Migration

## Status

V1 production Foundations and Components represent the approved **V1 — Enterprise Security** direction. Component migration is complete. Hi-Fi migration remains deferred.

## Component migration summary

**FACT** — The existing production component families were migrated in place on `06 — Components`; no parallel V1 families were created. The migration retained production semantics, component-set identities, nested-instance architecture, and existing public component APIs.

Core families migrated:

- Button, Icon Button, Text Input, Search Input, Select, Checkbox, Tabs
- Badge / Status, Tooltip
- Navigation Item, Side Navigation
- Panel / Surface Container

Investigation families migrated:

- Filter and query controls, query status, result count, and incomplete-result messaging
- Event Table, Event Row, Event Cell, Event Column Header, and Event Detail Summary
- Timeline Event, Timeline Group, and Timeline Connector / Sequence Indicator
- Evidence, inference, analyst-note, data-gap, package-status, and relationship-reference components

**DESIGN DECISION** — Existing approved production semantic variables drive the V1 visual treatment: light operational surfaces, dark shell context, IBM Plex Sans interface typography, IBM Plex Mono technical content, restrained blue interaction states, explicit boundaries, restrained radius and elevation, and compact enterprise density. Numbered spacing primitives were not globally redefined.

## Timeline Event QA issue

**FACT** — The final Phase 2 read-only QA found one major resilience defect in Timeline Event. At the 390 px viewport probe, the horizontal Event meta row placed the evidence marker, timing text, and a fixed-width late-arrival message on one line. The timing field collapsed to an unusably narrow column and produced an instance approximately 1900 px tall.

No component API, nested link, semantic-state, or information-model defect was found.

## Timeline Event remediation

**DESIGN DECISION** — The existing Timeline Event family was remediated in place. Component set `134:1483` and variants `134:1397`, `134:1441`, and `134:1467` were preserved.

The internal composition now follows this resilient order:

1. Event identity / title
2. Full-width observed timing
3. Evidence state
4. Late-arrival qualification when enabled
5. Clock qualification
6. Position / relationship context
7. Provenance
8. Inference and data-gap information
9. Source action

The Event meta container is now a vertical Auto Layout stack using Fill width and Hug height. Timing and late-arrival text receive the available line width rather than competing in fixed horizontal columns. No timing, clock-quality, evidence, uncertainty, inference, gap, provenance, or source-action information was hidden or removed.

The public Timeline Event API remains 14 properties. Existing state semantics, evidence swap, Boolean and text properties, nested component links, late-arrival behavior, clock-quality behavior, relationship uncertainty, focus behavior, and source action remain intact.

## Responsive verification

Representative selected-state specimens include a long event title, long timestamp, unknown timezone, unknown clock quality, late arrival, observed-evidence marker, provenance, analyst inference, data gap, relationship context, keyboard focus, and source action.

| Viewport probe | Component width | Result |
| --- | ---: | --- |
| 1440 | 1408 px | PASS — 408 px high; full metadata width; no clipping or overflow |
| 1280 | 1248 px | PASS — 408 px high; full metadata width; no clipping or overflow |
| 1024 | 992 px | PASS — 408 px high; full metadata width; no clipping or overflow |
| 768 | 736 px | PASS — 408 px high; full metadata width; no clipping or overflow |
| 390 | 358 px | PASS — 512 px high; timing width 326 px; no clipping, overflow, or pathological growth |

At 390 px the long title wraps to two lines, timing remains readable, late-arrival and clock uncertainty remain explicit, semantic markers remain distinct, and the source action remains usable. The focus ring intentionally extends outside the card edge but remains within the 390 px viewport.

## Accessibility and structural validation

**FACT** — Design-level validation supports WCAG 2.2 AA intent. Timing and qualification text remain at production sizes; semantic states retain explicit labels and non-color cues; focus remains visible; and no content was removed to obtain density. This does not claim browser, keyboard, or screen-reader implementation compliance.

Final targeted read-only QA:

- Timeline Event API: PASS — 14/14 properties preserved
- Component set and variant identities: PASS
- Nested instance links: PASS — 20 checked, 0 broken
- Detached instances: PASS — 0
- Auto Layout: PASS
- Responsive probes: PASS — 1440, 1280, 1024, 768, 390
- Timing qualification: PASS
- Evidence semantics: PASS
- Relationship and clock uncertainty: PASS
- Clipping / overflow: PASS
- Component families recreated: 0
- Component APIs changed: 0

## Known limitations and deferred work

**FACT** — Hi-Fi screens on `07 — Hi-Fi` were not modified during component migration or targeted remediation.

**OPEN QUESTION** — Product-level validation in implemented UI remains necessary for runtime keyboard order, assistive-technology announcements, browser text rendering, localization expansion, and data-driven extremes beyond the documented specimens.

**DEFERRED** — Apply the approved V1 production components to Hi-Fi only in the separately authorized Hi-Fi migration phase.
