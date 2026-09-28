# Phase 10 — Responsive Product Design Strategy

Status: responsive strategy defined for implementation in `08 — Responsive`. H5 and the approved V1 production screens in `07 — Hi-Fi` remain the source of truth.

## Evidence and decision labels

- **FACT:** The approved product has four peer areas: Investigation Overview, Event Explorer, Activity Reconstruction, and Evidence Package. The approved production file uses IBM Plex Sans, IBM Plex Mono, semantic variables, linked production components, and a compact V1 enterprise-security visual language.
- **ASSUMPTION:** Analysts may need to review the investigation in narrower workspaces or in a mobile/narrow context. No usage frequency, device distribution, or usability study was supplied.
- **DESIGN DECISION:** Responsive work changes hierarchy, simultaneous density, navigation presentation, panel arrangement, and investigation interaction patterns without changing H5 records, terminology, or product-area ownership.
- **OPEN QUESTION:** Prototype validation must determine whether the 390 px pattern supports real investigation work or should be limited to triage and sequential review.

## Breakpoint strategy

| Width | Navigation | Content and panels | Event Explorer | Timeline | Evidence Package |
| --- | --- | --- | --- | --- | --- |
| 1440 | **KEEP** full operational shell. | **KEEP** approved multi-panel compositions. | **KEEP** full seven-column table and inline detail. | **KEEP** timeline plus reasoning rail. | **KEEP** multi-column evidence review. |
| 1280 | **KEEP** shell; reduce nonessential whitespace. | **REFLOW** panel ratios; retain two columns where readable. | **KEEP / SCROLL** full table within the available workspace. | **REFLOW** timeline and reasoning widths. | **REFLOW** evidence cards while retaining parallel review. |
| 1024 | **COLLAPSE** side shell into compact horizontal area navigation. | **STACK** secondary panels; keep persistent case strip. | **SCROLL** the seven-column table; **STACK** query, coverage, and detail. | **STACK** qualified sequence before reasoning. | **STACK** package status, evidence, inference, notes, and blockers. |
| 768 | **COLLAPSE** to top operational bar and area disclosure. | **STACK** into a single review column; use progressive disclosure for secondary detail. | **REFLOW** filters; **SCROLL** table where comparison is required; **PRIORITIZE** selected-event transition. | **STACK** event cards; preserve timing qualifications adjacent to each event. | **PRIORITIZE** readiness and blockers, then sequential evidence review. |
| 390 | **COLLAPSE** to drawer trigger plus current-area label. | **PRIORITIZE** case identity, status, scope, anchor, and blocking states; **DEFER** secondary metadata behind labeled disclosure. | **REFLOW** into event summary cards and a dedicated detail view; never force seven columns into the viewport. | **STACK** one event at a time with observed time, ingestion/clock qualification, evidence state, and relationship uncertainty. | **STACK** readiness, evidence items, inference, notes, gaps, and generation blockers as distinct sections. |

## Navigation adaptation

The four product areas remain peers at every width. Desktop uses the approved persistent side shell. At 1024 px, the shell becomes compact horizontal area navigation paired with a persistent case strip. At 768 and 390 px, a top operational bar identifies the current area and exposes an “All areas” navigation disclosure. This is a presentation change, not a second information architecture.

Case context remains available through case identity, investigation status, declared scope, the 09:19 anchor, retention state, and unresolved identity/session state. Narrow views prioritize these fields and move long explanatory text into sequential panels; they do not remove uncertainty or blockers.

## Event Explorer and table strategy

At 1440 and 1280 px, use the complete production Event Table. At 1024 and 768 px, preserve all seven columns in a labeled horizontal viewport with the Timestamp column as the starting position and maintain selected-row return context. Query status, result count, coverage state, active filters, and reset/refine actions remain outside the scrolling region.

At 390 px, use event summary cards with this visible priority: observed time, event type, actor/role, source, evidence state, and uncertainty. Resource and additional status metadata remain available in the event detail view. Selecting a card transitions to dedicated detail rather than opening a competing side panel. This is not arbitrary column removal: it is a row-to-detail interaction change that retains access to every production field.

## Filters and query feedback

Desktop keeps dense inline filtering. At 1024 px, controls wrap into two rows. At 768 px, primary search, active chips, execution status, and coverage remain visible while advanced fields move into a labeled disclosure surface. At 390 px, the primary query summary, active-filter count/chips, result status, coverage state, and clear/refine actions remain visible; date/time, source, actor, resource, and action fields are reviewed in a dedicated filter surface.

Pending criteria and the last executed query remain distinct. Capped retrieval, incomplete coverage, unknown coverage, no results, loading, and error remain distinct states. Narrow layouts never imply that an exact count establishes source completeness.

## Event detail strategy

Desktop retains the inline selected-event summary and return context. At 1024 px it stacks below results. At 768 px it becomes the next sequential region after the results viewport. At 390 px it becomes a dedicated detail state with an explicit return to the selected result. Original time, ingestion time, clock quality, source provenance, actor/recipient distinction, session/device uncertainty, preservation state, and evidence actions remain available.

## Timeline strategy

The remediated Timeline Event architecture remains the unit of review. At desktop widths, the sequence and authored reasoning can remain side by side. At 1024 px and below, sequence precedes relationship basis, inference, notes, and coverage limits. Narrow views keep connector labels and explicit “displayed order — not causal” language; spacing is not used to imply elapsed time. Late arrival and clock quality remain adjacent to the affected event.

## Evidence strategy

Desktop retains multi-panel review. At narrower widths, the order is: package readiness and blocking conditions; source observations and preservation outcomes; Analyst Inference; Analyst Notes; Data Gaps/unresolved relationships; generation or export action. Observed Evidence, Inference, Notes, and Data Gaps remain visually and semantically distinct. Failed, pending, reference-only, and retained outcomes are never collapsed into a generic evidence state.

## Content prioritization

1. Current product area and case identity.
2. Investigation status, declared scope, selected anchor, and active working query.
3. Blocking conditions, coverage state, timing qualification, and relationship uncertainty.
4. The task’s primary records: events, timeline entries, or evidence items.
5. Current selection and contextual actions.
6. Secondary explanation, supporting metadata, and history through labeled progressive disclosure.

## Accessibility considerations

- Target WCAG 2.2 AA using the approved semantic token contracts.
- Preserve approved typography; reduce simultaneous content, not text size.
- Use 48 px touch controls for new narrow-context triggers where practical and never below the system’s 24 px minimum target.
- Keep focus visibility distinct from selection and avoid clipping outer focus rings.
- Pair every state color with explicit text and the approved marker/icon language.
- Preserve logical reading and focus order when side-by-side panels stack.
- Provide a labeled scroll region for narrow tables and keep headers associated with their columns in implementation.
- Restore focus and selected-result position when returning from mobile detail or filter surfaces.
- Announce query, coverage, preservation, and package-readiness changes in implementation.

## Tradeoffs

- Horizontal table scrolling at 1024/768 preserves comparison and all fields but requires explicit scroll affordance and keyboard/focus validation.
- Mobile event cards improve legibility and target sizing but reduce simultaneous cross-row comparison; a dedicated detail transition preserves the complete record.
- Sequential evidence review increases vertical movement but makes preservation outcomes and blockers harder to miss.
- Collapsed navigation frees investigation space but requires reliable disclosure, focus restoration, and persistent current-area labeling.

## Deferred to prototype validation

- Drawer and filter-surface open/close behavior, focus trap, escape behavior, and focus restoration.
- Keyboard behavior for horizontally scrolling tables and selected-row return.
- Mobile event-card to detail transitions and preservation of result position.
- Timeline connector behavior and textual equivalents at 390 px.
- Whether 390 px is suitable for full investigation or primarily triage/sequential review.
- Live-region timing for query, coverage, preservation, package-generation, and export feedback.
- Browser zoom, 200% text enlargement, screen-reader table semantics, forced colors, and real touch hit areas.

