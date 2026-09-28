# V1 Production Migration

## Status

V1 production Foundations, Components, and Hi-Fi represent the approved **V1 — Enterprise Security** direction. Phase 3 Hi-Fi migration is complete and ready for the separately scoped responsive phase.

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

**FACT** — Hi-Fi screens on `07 — Hi-Fi` were not modified during component migration or targeted remediation. They were migrated later under the separately authorized Phase 3 work recorded below.

**OPEN QUESTION** — Product-level validation in implemented UI remains necessary for runtime keyboard order, assistive-technology announcements, browser text rendering, localization expansion, and data-driven extremes beyond the documented specimens.

## Phase 3 — V1 Hi-Fi migration

### Hi-Fi migration summary

**FACT** — The four existing production screens on `07 — Hi-Fi` were migrated in place. H5 information architecture, navigation destinations, investigation flow, query behavior, evidence architecture, uncertainty semantics, package lifecycle, and supplied case content were preserved.

Screens migrated:

- `01 — Investigation Overview`
- `02 — Event Explorer`
- `03 — Activity Reconstruction`
- `04 — Evidence Package`
- `05 — Representative states / conditional specimens`

**DESIGN DECISION** — The existing persistent shell frames were converted from a horizontal header to a 240 px dark operational sidebar. The same 16 linked Navigation Item instances remain in use across the four screens. Case identity, investigation status, analyst identity, declared scope, selected anchor, retention uncertainty, relationship uncertainty, and all four peer destinations remain visible.

### Component reuse

- Existing production instances were retained for core and investigation components.
- No production component family or screen-specific component copy was created.
- No instance was detached.
- The Event Explorer retains the approved seven-column Event Table and existing Event Detail composition.
- Activity Reconstruction retains the production Timeline Event family and its qualified ordering, provenance, clock, late-arrival, inference, gap, and source-action semantics.
- Evidence Package retains distinct observation, preservation, inclusion, inference, note, gap, provenance, readiness, and blocking-condition structures.
- A missing approved Query Error specimen was added by cloning the existing production Panel composition and switching its linked Query Status instance to the production `Error` variant. No case fact was added.

### Layout changes

- The four production screen frames now use horizontal Auto Layout: fixed 240 px shell plus Fill-width light workspace.
- Existing shell groups were reorganized in place into vertical case identity/status, navigation, and persistent-context regions.
- The Event Table instance remains unchanged and is composed inside a clipping horizontal viewport. Its minimum grid width is 1136 px, preserving all seven columns at constrained desktop widths without compressing cells into unreadable columns.
- Two representative Timeline Event slot instances were refreshed against the remediated production family so timing, evidence state, late arrival, clock qualification, gap detail, and source action no longer clip.

### Typography validation

All inspected production Hi-Fi text resolves to IBM Plex Sans or IBM Plex Mono. No unstyled text nodes or local exploratory typography remain. Dense table and metadata content retain production line heights and wrap instead of using the exploratory 10 px treatment.

### Accessibility validation

Design-level review supports the WCAG 2.2 AA target for shell text, table headers, body text, metadata, selected states, focus states, warning/critical treatments, evidence markers, disabled states, and functional boundaries. Status and evidence meanings remain explicit and do not rely on color alone. This is not a claim of keyboard, screen-reader, browser, or runtime implementation compliance.

### Structural responsive preparation

Temporary resize probes were run and restored; no responsive screens were created.

| Probe | Result |
| --- | --- |
| 1440 | PASS — four screens retain the 240 px shell and full workspace hierarchy; Event Table height 404 px. |
| 1280 | PASS — content reflows; Event Table stays 1136 px inside a 976 px horizontal viewport rather than collapsing columns. |
| 1024 | PASS — content reflows without screen-level lateral leakage; Event Table stays 1136 px inside a 720 px horizontal viewport. |

### Unresolved issues and deferred responsive work

- **DEFERRED** — Full 768 and 390 product-screen adaptations remain Phase 10 work.
- **DEFERRED** — Compact rail/drawer interaction, runtime horizontal scrolling, keyboard order, focus restoration, announcements, browser font rendering, localization expansion, and assistive-technology behavior require implementation validation.
- **OPEN QUESTION** — Exact backend contracts for query completeness, preservation receipts, package integrity, and late-arrival reassessment remain unchanged.

## Phase 3 final read-only QA

The final audit is performed after Figma modification stops. Its counts and verdict are reported in the Phase 3 handoff; no later live-file state is certified by this document.
