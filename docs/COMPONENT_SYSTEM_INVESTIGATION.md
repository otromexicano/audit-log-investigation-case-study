# Investigation Component System — Phase 08B2

Updated: 2026-09-23. Scope: Figma page 06 — Components only.
[Figma component library](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK?node-id=1-7)

## Stage and evidence
FACT: Existing Foundations and Core Components were reused. The approved core remains 15 sets / 159 native components. Foundations remain 147 variables, 10 text styles and 3 effect styles.
FACT: This phase creates investigation component patterns and documentation, not product screens, backend behavior or usability findings.
DESIGN DECISION: Resume and extend the existing Phase 08B2 content. Preserve approved H5 case-centered architecture, H2 query refinement, qualified H3 timeline and H4 preservation semantics. Retain V2 visual direction.
ASSUMPTION: Source systems provide supported query capabilities, timestamps, provenance and operation outcomes. Specimens demonstrate conditional UI contracts.
OPEN QUESTION: Exact backend query, retention, identity-resolution, preservation and package-integrity contracts remain to be confirmed before implementation.

## Resume reconciliation
Filtering, query coverage, semantic markers, relationships, event cells, four row states and native row slot were COMPLETE at reconciliation. Supported column sorting and event detail were PARTIAL. Timeline, evidence package, comprehensive resilience specimens and this documentation were MISSING. Completed components were reused, not recreated. Construction checks repaired shared-default state copy, nested Fill behavior, independent selection/focus, component-set radius bindings and horizontal viewport alignment.

## Inventory and complexity
25 reusable definitions: 13 sets with 49 variants plus 12 standalone components = 61 native components. Every set has only one State axis. No event type, actor, timestamp, row count or source record is a variant dimension. A standalone count of 1 means a component, not a variant set.
Property totals below are direct APIs. Named/exposed nested instances carry additional field, marker, control and state APIs. All accessibility PASS results mean design-system support, not runtime conformance.

| Component | Variant Count | Properties | Semantic Token Adoption | Auto Layout | Accessibility | Status |
|---|---:|---|---|---|---|---|
| Filter Chip | 3 | 1 TEXT, 1 BOOLEAN, 1 INSTANCE_SWAP, 1 VARIANT | PASS | PASS | PASS | Complete |
| Result Count | 3 | 2 TEXT, 1 VARIANT | PASS | PASS | PASS | Complete |
| Capped / Incomplete Results Indicator | 3 | 1 TEXT, 1 VARIANT | PASS | PASS | PASS | Complete |
| Query Status | 6 | 1 TEXT, 1 BOOLEAN, 1 VARIANT | PASS | PASS | PASS | Complete |
| Evidence Marker | 2 | 1 VARIANT | PASS | PASS | PASS | Complete |
| Relationship Reference | 3 | 2 TEXT, 1 BOOLEAN, 1 VARIANT | PASS | PASS | PASS | Complete |
| Event Cell | 3 | 2 TEXT, 1 BOOLEAN, 1 VARIANT | PASS | PASS | PASS | Complete |
| Event Row | 4 | 1 INSTANCE_SWAP, 3 BOOLEAN, 1 TEXT, 1 VARIANT | PASS | PASS | PASS | Complete |
| Event Column Header | 4 | 1 TEXT, 1 INSTANCE_SWAP, 1 VARIANT | PASS | PASS | PASS | Complete |
| Timeline Connector / Sequence Indicator | 4 | 1 TEXT, 1 VARIANT | PASS | PASS | PASS | Complete |
| Timeline Event | 3 | 7 TEXT, 1 INSTANCE_SWAP, 5 BOOLEAN, 1 VARIANT | PASS | PASS | PASS | Complete |
| Evidence Item | 5 | 6 TEXT, 3 BOOLEAN, 1 VARIANT | PASS | PASS | PASS | Complete |
| Evidence Package Status | 6 | 2 TEXT, 1 VARIANT | PASS | PASS | PASS | Complete |
| Date / Time Range Control | 1 | 2 TEXT | PASS | PASS | PASS | Complete |
| Advanced Filter Group | 1 | 2 TEXT | PASS | PASS | PASS | Complete |
| Filter Bar | 1 | 3 TEXT, 2 BOOLEAN | PASS | PASS | PASS | Complete |
| Inference Marker | 1 | Nested API / fixed semantic marker | PASS | PASS | PASS | Complete |
| Analyst Note Marker | 1 | Nested API / fixed semantic marker | PASS | PASS | PASS | Complete |
| Data Gap Marker | 1 | Nested API / fixed semantic marker | PASS | PASS | PASS | Complete |
| Event Table / Header | 1 | 1 BOOLEAN, 1 TEXT | PASS | PASS | PASS | Complete |
| Event Table | 1 | 1 SLOT, 1 TEXT | PASS | PASS | PASS | Complete |
| Event Detail / Content | 1 | 9 TEXT, 3 BOOLEAN | PASS | PASS | PASS | Complete |
| Event Detail Summary | 1 | Nested API / fixed semantic marker | PASS | PASS | PASS | Complete |
| Timeline Group | 1 | 2 TEXT, 1 SLOT | PASS | PASS | PASS | Complete |
| Evidence Group | 1 | 2 TEXT, 1 SLOT | PASS | PASS | PASS | Complete |

## Filtering architecture
Filter Bar composes approved Search Input, Buttons, Filter Chip and Advanced Filter Group. Case scope and working query remain separate. Active filters and advanced controls are independently visible. Filter Chip exposes editable label, removable Boolean and removal-action instance swap; Default/Hover/Focus states do not encode filter values.
Advanced Filter Group composes actor/identity role, resource, event type, source and Date / Time Range controls. Original time, timezone, boundary inclusion and precision remain explicit. Unsupported Boolean operators, facets, relative presets and impact counts are not invented.
Applied-query text distinguishes pending edits from the last executed query. Q1, proposed Q2 and the selected anchor remain accessible even if refinement excludes the anchor; restoring criteria does not claim restored historical results.
Fields and actions wrap. A minimum field wrapping constraint is layout geometry, not a new global spacing or size token.

## Query coverage model
Query Status: Complete, Large Result Set, Capped, Incomplete Coverage, Loading, Error. Execution state and source coverage are independent. Completion says the query finished, never that available records are complete.
Result Count: Exact, Lower bound, Unknown, with separate count and loaded range. Missing query counts default to Unknown. Synthetic 1,234,567+ specimens explicitly use Lower bound. Capped and incomplete warnings cannot be hidden by the optional coverage Boolean.
Coverage indicator: Capped, Incomplete Coverage, Unknown Coverage; editable source/interval/cap metadata accompanies fixed state meaning. Retrieval caps, incomplete source coverage and documented retention gaps are distinct. Missing matches do not establish a retention gap.
Refinement guidance uses supported time, event, source and source-qualified identifiers. No cap number, latency guarantee, automatic split query or live query result is asserted.

## Event table architecture
Event Cell has Text/Timestamp/Header presets and editable primary/supporting values. Event Row composes seven named cell instances; state = Default/Hover/Selected/Focus. Optional markers and analyst flags are properties. Independent keyboard-focus Boolean supports selected + focused without variant multiplication.
Event Column Header supports Not sortable, Sortable, Ascending, Descending. It exposes label text and nested action swap, with explicit textual ordering. Default table columns are Not sortable until service support is known.
Event Table / Header and Event Row share 1200 px content geometry: 144/176/192/152/200/128/160 columns, 12 px side padding, six 4 px gaps. Columns are Timestamp, Actor/role, Event type, Source, Resource, Status, Evidence. Text wraps and cells grow from a 40 px minimum.
Event Table uses a native Event rows slot: dataset length does not create variants. Narrow content uses a labeled horizontal viewport, retaining readable columns and result qualifications. It starts at the Timestamp column. Clipping is intentional only at this scroll viewport.
OPEN QUESTION: Pagination/virtualization, total ordering, tie handling, sorting scope, result cursors, column persistence and keyboard table/grid behavior require product/backend implementation decisions.

## Event detail architecture
Summary → approved Panel / Surface Container → native Content slot → Event Detail / Content. Exposes event identity/type, original timestamp, ingestion timestamp, clock quality, actor/recipient, source, resource, observed facts and preservation status. Session and device use Relationship Reference.
Unknown fields are explicitly not supplied. The brief's 09:19 administrator assignment is not an authorization, intent or causality finding. Identity-log clock verification does not verify export-source clock quality. Actor and role recipient are not merged.
Analyst Note and Analyst Inference are separate optional labeled regions. Preserve, annotate and infer actions are distinct; preservation is a request until a confirmed outcome.

## Timeline semantics
Timeline Event: Default/Selected/Focus; position, title, timing, provenance and qualifications use Text Properties. Late arrival, clock qualification, inference and gap are independent regions; retained/source marker uses an instance swap. Focus can coexist with selection.
Timeline Group uses a native Sequence entries slot. Connector meanings: Displayed order, Observed order, Inferred relationship, Unknown timing confidence. Ordering basis remains explicit and source-qualified.
Spatial order, adjacency and spacing are not causality or elapsed-time claims. Event time is separate from ingestion time. Export's reported four-minute late arrival does not rewrite the original 09:26 event time. Cross-source clock comparability is unknown. Missing device data does not establish a retention interval.
The four supplied illustrative times are 09:14 sign-in, 09:19 administrator assignment, 09:26 export started and 09:41 revocation. Date/timezone, actual source identifiers, actor/session mappings, export completion and causal links remain unspecified.

## Evidence semantics and package model
Observed Source Event differs from Observed Evidence — retained. Evidence Marker has these two presets. Inference, Analyst Note and Data Gap are standalone semantic markers, with distinct explicit labels and shapes. Observation, interpretation and annotation occupy different regions.
Evidence Item states: Not requested, Pending, Retained, Failed, Reference only. Nonretained items are source/preservation receipts, not retained-evidence claims. Item APIs support source reference, provenance, inclusion record, note, inference and gap. Approved Checkbox enables draft inclusion only for Retained. Retention, inclusion and export are independent.
Evidence Group uses native Evidence entries slot; membership and length remain content.
Package states: Draft, Incomplete, Ready for Review, Ready for Export, Exported, Error. Required missing evidence, failed preservation and unresolved required gaps block affected readiness. Disclosed nonessential limitations may accompany a qualified package. Ready for Review means analyst self-review, not an invented reviewer permission model.
Ready for Export requires the exact authorized snapshot and required manifest/integrity checks. Exported is a successful operation on a fixed version, not proof of delivery, truth or completeness. Error distinguishes transfer recovery from integrity/membership invalidation in guidance.
OPEN QUESTION: Retention receipt, immutability, provenance schema, permissions, required dependencies, manifest/integrity verification, export retry behavior and precise lifecycle transitions require implementation contracts. Presets never assert these capabilities exist today.

## Relationship and uncertainty representation
Relationship Reference: Unresolved, Confirmed, Unavailable. Entity and supporting source reference are text. Basis meaning is fixed to state; inspect action is optional and absent in Unavailable. Actor, session, device, resource and event are content, not variants.
Confirmed requires a supporting source relationship; it does not establish physical authorship or causality. Unresolved keeps candidate identities separate. Unavailable means no relationship data, not proof of no relationship.
Unknown field, unresolved association, inferred interpretation, analyst note, incomplete coverage and documented data gap are separately labeled concepts.

## Composition and tokens
Investigation instances reuse approved Buttons, Icon Buttons, Text/Search Input, Select, Checkbox, Badge, Panel, Icons and investigation patterns. Native slots preserve variable-length tables, timelines and evidence groups. No detachment operation was used.
Primitive → Semantic → Component remains the architecture. Product paint bindings use approved Semantic variables; no primitive paint references or new Foundations were introduced. Text uses approved Manrope/IBM Plex Mono styles. Nonzero Auto Layout spacing and radii are bound to semantic tokens.
Viewport dimensions, table column allocations, glyph paths, focus-ring geometry and wrapping constraints are layout geometry, not new visual tokens. Fixed glyph geometry stays within the approved semantic icon box. Focus strokes use approved width/color variables.

## Documentation boards and resilience
Portfolio boards: Filtering (123:626), Query / Coverage (124:738), Event Table (127:1151), Event Detail (134:1326), Timeline (134:1380), Evidence (125:789), Relationships (126:900), Evidence Package (135:1339).
Each documents anatomy, states/properties, composition, semantic roles, intended use, uncertainty and accessibility. Auto Layout boards Hug content.
Content resilience (138:1480) includes 1440, 1280, 1024, 768 and 390 px probes. Additional resilience (140:3403) covers expanded filters and incomplete source coverage at 390 px.
Synthetic stress data exercises long actors/resources/timestamps, missing session/device, multiple markers, capped results, large lower-bound count, long evidence note, separate inference/gap, late arrival and uncertain clock. Synthetic values are visibly identified.
The 1024/768/390 table regions intentionally scroll horizontally; text and rows remain full-size. Cards wrap and grow without unintended overflow. These component probes do not replace later full-screen responsive design.

## Accessibility scope
Design-system target: WCAG 2.2 AA support. Explicit status, evidence/inference labels and different marker shapes avoid color-only meaning. Selected states have text/border treatment. Focus rings remain separate and can coexist with selection. Approved controls provide designed focus/disabled states.
Construction audit: minimum sampled enabled text contrast 6.24:1; glyph contrast 7.05:1; inspected direct action controls have minimum 32 px target dimensions (above the 24 px AA target criterion). Disabled controls are excluded from contrast requirement calculations. Dense desktop control sizing is not a claim of 44 px touch optimization.
Implementation/prototype validation remains required for keyboard interaction, focus restoration/visibility in scrolling, accessible names, table relationships, live-region announcements, screen readers, high-contrast/zoom behavior, touch adaptation and browser accessibility conformance. No runtime conformance claim is made.

## Final read-only QA
Final audit record is stored in docs/investigation/final-audit.json. Figma modifications stop before that audit; local reporting may be updated from its results.

Fresh final read-only audit: 5,919 nodes, 61 components, 13 sets, 1,668 live instances. 3,797 of 3,797 solid paints bind to Semantic variables. No duplicate component identities, unresolved instances, unbound nonzero spacing/radii, unstyled text or Auto Layout component failures. No detach operation was used; current live links all resolve. Three geometric overflow findings are the intentional horizontal table viewports documented above, not defects.
Contrast: 1,101 enabled visible text samples, minimum 6.2445:1; 186 glyph samples, minimum 7.0487:1. Thirty direct interactive instances checked; minimum target dimension 32 px; none below 24 px. Core remains 159 components / 15 sets. Foundations counts unchanged.

CRITICAL: None found.
MAJOR: None found.
MINOR: None found.

| Required check | Result |
|---|---|
| Large Result Set Handling | PASS |
| Event Table Architecture | PASS |
| Event Detail Uncertainty | PASS |
| Timeline Semantics | PASS |
| Evidence / Inference Separation | PASS |
| Relationship Uncertainty | PASS |
| Evidence Package Architecture | PASS |
| Variant Complexity | PASS |

All 13 sets use one State axis, with 2–6 variants each. No variant explosion. Read-only review confirms required coverage warnings cannot be hidden, all native slots remain present and independent keyboard-focus properties remain available. These findings support progression to high fidelity; human final quality ownership and deferred implementation validation remain unchanged.

INVESTIGATION COMPONENTS APPROVED — READY FOR HIGH FIDELITY
