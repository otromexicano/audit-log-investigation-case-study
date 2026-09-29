# Phase 11B — Functional React Prototype

Status: implemented in `prototype/`. Human final quality approval and a dedicated accessibility audit remain separate project decisions.

## Implementation architecture

The prototype is a Vite React application written in TypeScript. It keeps one case-centered shell and four peer areas: Investigation Overview, Event Explorer, Activity Reconstruction, and Evidence Package. State remains in React memory so selection, evidence, analyst records, and package state persist while moving between areas. No router is required for this bounded single-case prototype.

Reusable UI and investigation components live in `prototype/src/components/`. Pure query, coverage, selection, and package-readiness rules live in `prototype/src/domain.ts`. Deterministic fixtures live in `prototype/src/mockData.ts` and are explicitly presented as MOCK DATA.

## Relationship to Figma

Implementation follows the approved production screens in `07 — Hi-Fi`, the breakpoint-specific compositions in `08 — Responsive`, the interaction path and branch specimens in `09 — Prototype`, and the approved production component architecture. The current Phase 11B direction uses the V1 light operational workspace, dark persistent shell, and IBM Plex Sans / IBM Plex Mono typography present in the approved production frames.

Historical project documentation also preserves an older V2 / Manrope exploration decision. It was not used to override the Phase 11B source-of-truth instruction or current production frames.

## Token implementation

`prototype/src/styles.css` defines a semantic CSS custom-property layer for workspace, surfaces, text, borders, actions, focus, statuses, evidence types, shell, spacing, radii, controls, and table headers. Components consume these roles instead of scattering raw component-level color values. Primitive values appear only in the root token declarations.

## Component implementation

Implemented shared components include Button, Panel, Badge, status messaging, navigation, FilterBar, QueryStatus, EventTable, mobile EventCards, EventDetail, TimelineEvent, and EvidenceItem. Native HTML elements supply button, form, table, heading, list, description-list, and disclosure semantics.

## Mock-data strategy

Fixtures represent the approved scenario: the suspicious administrator-role assignment, related export start, ordinary surrounding activity, a four-minute-late export event, clock-quality qualification, missing session and device relationships, a coverage gap, successful evidence preservation, and a deterministic first-attempt preservation failure. Fixture identifiers and surrounding events are implementation-only MOCK DATA, not research findings or customer records.

## Interaction states

- Event Explorer runs real client-side filtering for search, actor, event type, source, resource, and original-time range.
- Active filters are removable and the broad, filtered, loading, no-results, capped, and incomplete-coverage states remain distinct.
- Event selection persists across Event Explorer, Event Detail, Activity Reconstruction, and return navigation.
- Preservation transitions from Not Preserved to Preserving to Preserved. The required export event fails on its first attempt and succeeds on retry.
- Analyst Note and Analyst Inference remain separate authored record types. Neither becomes observed evidence.
- Package readiness is calculated from required preservation and a required data-gap acknowledgement. Blockers prevent Ready for Export and simulated export.
- Export Processing advances to Export Complete after a short deterministic delay. No file is generated.

## Responsive behavior

- 1440 and 1280 retain the persistent side shell and full seven-column table.
- 1024 collapses the shell into compact horizontal navigation and allows the table to scroll horizontally.
- 768 uses top operational chrome, stacked panels, wrapped filters, and the scrollable comparison table.
- 390 replaces the seven-column table with prioritized event summary cards and a dedicated Event Detail transition. Evidence and package content become sequential.

## Accessibility implementation

The application uses semantic landmarks and headings, labeled form controls, native buttons and selects, table headers and caption, keyboard-selectable event rows, an explicit skip link, visible `:focus-visible` treatment, `aria-current`, `aria-selected`, status/alert semantics, polite live announcements, and reduced-motion handling. Color is paired with text and symbols. The 390 px disclosure and actions use touch-oriented control sizing.

Runtime screen-reader, forced-colors, browser zoom, and assistive-technology testing remain for the next dedicated accessibility phase; this document does not claim WCAG conformance.

## Tests

Vitest covers filtering, coverage distinctions, selected-event persistence, preservation states, package readiness, and blocked export behavior. Quality commands are:

```text
cd prototype
npm install
npm run typecheck
npm run build
npm test
npm run lint
```

Development server:

```text
cd prototype
npm run dev
```

## Intentional limitations

- No authentication, authorization service, backend query, pagination, virtualization, real correlation, persistence, or concurrent editing.
- No real preservation receipt, immutable storage, retention service, hash, signature, manifest, package file, delivery, or recipient verification.
- No automatic late-arrival reconciliation, clock normalization, or proof of chronology or causality.
- In-memory state resets on reload.
- Analyst text uses a small native prompt interaction for prototype speed; production authoring needs a designed dialog or inline editor with validation and revision history.

## Areas requiring usability testing

- Capped results versus incomplete source coverage.
- Selected-event context across filter changes and area transitions.
- Chronology, timing qualification, and non-causal sequence language.
- Preservation failure, retry, and retained-evidence interpretation.
- Note, inference, observation, and data-gap separation.
- Package blocker discovery and Ready for Review versus Ready for Export.
- The 390 px card-to-detail pattern and suitability for full investigation versus triage.
- Keyboard, screen-reader, zoom, forced-colors, reduced-motion, and touch behavior with representative analysts.
