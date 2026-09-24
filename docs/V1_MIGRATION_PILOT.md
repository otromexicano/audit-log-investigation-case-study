# V1 Migration Pilot — Event Explorer

Date: 2026-09-24  
Status: Candidate validation complete; production migration not performed

## Scope

This pilot tests whether the approved V1 Enterprise Security visual direction can be applied to the approved H5 investigation experience without changing its product architecture, content model, evidence semantics, or production assets.

- **FACT:** The approved H5 flow and the current production design remain the product baseline.
- **FACT:** All Figma work created by this pilot is additive and lives on `90 — Candidates`.
- **FACT:** Pages `00–11` and `99` were not modified.
- **DESIGN DECISION:** Treat V1 as a visual-system migration, not a new UX hypothesis.
- **DESIGN DECISION:** Keep the production seven-column Event Explorer architecture intact.
- **ASSUMPTION:** A separate candidate token layer is the safest way to validate the mixed light/dark theme without changing V2 variable resolution.
- **OPEN QUESTION:** Whether an optional row/detail split should be evaluated in a later hypothesis round. It is not approved UX and is not part of this pilot.

## Figma deliverables

Created on `90 — Candidates`:

1. `V1 Candidate — Foundations Pilot`
2. `V1 Candidate — Component Pilot`
3. `V1 Candidate — Event Table State Components`
4. `V1 Production Pilot — Event Explorer`

The production Event Explorer (`07 — Hi-Fi`, node `147:3`) and production Timeline Event (`06 — Components`, node `134:1483`) remain unchanged.

## Foundation architecture

### Token model

The pilot preserves the existing Primitive → Semantic → Component architecture.

- `V1 Candidate Primitives`: 28 candidate color variables, one `Value` mode.
- `V1 Candidate Semantic`: 52 semantic color variables, one `Pilot` mode.
- Candidate semantic variables alias candidate primitives.
- Existing production `Primitives` remain at 54 variables in `Value` mode.
- Existing production `Semantic` remains at 93 variables in `Dark` mode.
- Existing spacing, size, radius, border-width, and focus-width meanings are reused. No numbered spacing token was redefined.

### Mixed light/dark roles

The candidate semantic collection explicitly separates:

- workspace background and light product surfaces;
- primary, secondary, tertiary, and link text;
- default, subtle, strong, focus, and selected boundaries;
- restrained primary action and on-primary content;
- dark shell background, surface, text, secondary text, and border;
- dark navigation background, selected state, text, and secondary text;
- dark table-header background, text, secondary text, and border;
- operational status, evidence type, data gap, and unresolved relationship roles.

This prevents light-content text tokens from being overloaded in dark contexts.

### Typography

Six candidate styles were created:

- IBM Plex Sans SemiBold 28/36 — Page Title
- IBM Plex Sans SemiBold 18/24 — Heading
- IBM Plex Sans Regular 14/20 — Body
- IBM Plex Sans SemiBold 13/20 — Label
- IBM Plex Sans Regular 12/16 — Metadata
- IBM Plex Mono Regular 13/20 — Data

### Density

Density is configured by purpose, not by globally shrinking the interface:

- navigation remains a stable target size;
- existing compact/default control intent is retained;
- dense table content uses 13/20 data typography;
- supplementary metadata uses 12/16;
- rows grow when values wrap;
- panels retain restrained internal spacing and clear group separation;
- the table preserves intrinsic column width and uses horizontal overflow at constrained widths.

## Event Explorer production pilot

The candidate screen preserves the production architecture and supplied investigation content:

- case shell and four-step navigation;
- scope and selected-anchor context;
- working query and two selected criteria;
- original source-time range;
- draft/not-executed state;
- unknown match count and unknown coverage;
- four supplied observations;
- selected 09:19 administrator-role assignment;
- selected-event detail;
- evidence preservation, analyst-note, and inference actions;
- unresolved session relationship;
- unavailable device identifier;
- explicit limitations on authorization, intent, causality, retention, and completeness.

### Event table

All seven production columns remain present:

1. Timestamp
2. Actor / role
3. Event type
4. Source
5. Resource
6. Status
7. Evidence

The pilot validates:

- dark table header;
- compact default rows;
- pale-blue selected row with a blue boundary;
- distinct hover treatment;
- 2 px keyboard-focus boundary;
- explicit observed-evidence labels;
- late-arrival marking;
- long actor, source, resource, and evidence values;
- automatic row growth from 62–64 px to 142 px in the long-value test;
- no overlap, clipping, or removed columns.

The optional row/detail split remains an alternative for future evaluation only.

## Timeline Event adaptation

`V1 Candidate / Timeline Event — Pilot` is an additive visual adaptation, not a production replacement family.

It preserves the 14-property production contract:

- Position context — text
- Event title — text
- Timing — text
- Provenance — text
- Evidence marker — instance swap
- Arrival qualification — text
- Show late arrival — boolean
- Clock qualification — text
- Show clock qualification — boolean
- Show inference marker — boolean
- Gap detail — text
- Show data gap — boolean
- Show keyboard focus — boolean
- State — Default / Selected / Focus

The visual adaptation keeps source observation, inference, data gap, late arrival, clock qualification, selection, and focus as separate meanings.

## Evidence and status semantics

Color is reinforcement only. The pilot uses explicit text and symbolic prefixes:

- `[O]` Observed source event
- `[I]` Inference
- `[N]` Analyst note
- `[!]` Data gap or late-arrival qualification
- `[?]` Unresolved relationship or unknown coverage
- `[C]` Clock qualification
- `[•]` Reported operational status
- `[i]` Informational state

Success, warning, critical, inference, note, observed evidence, data gap, and relationship uncertainty each have separate semantic roles and remain independently labeled.

## Accessibility verification

Target: WCAG 2.2 AA.

Representative contrast results:

| Pair | Ratio | Requirement | Result |
|---|---:|---:|---|
| Primary text / light surface | 16.27:1 | 4.5:1 | PASS |
| Secondary text / light surface | 8.07:1 | 4.5:1 | PASS |
| Shell text / shell background | 18.91:1 | 4.5:1 | PASS |
| Shell secondary text / shell background | 12.26:1 | 4.5:1 | PASS |
| Navigation text / selected navigation | 12.96:1 | 4.5:1 | PASS |
| Table-header text / table-header background | 15.61:1 | 4.5:1 | PASS |
| On-primary text / primary action | 6.70:1 | 4.5:1 | PASS |
| Observed evidence / observed surface | 6.47:1 | 4.5:1 | PASS |
| Inference / inference surface | 6.16:1 | 4.5:1 | PASS |
| Data gap / data-gap surface | 7.59:1 | 4.5:1 | PASS |
| Relationship uncertainty / uncertainty surface | 7.59:1 | 4.5:1 | PASS |
| Critical / critical surface | 5.76:1 | 4.5:1 | PASS |
| Default functional boundary / light surface | 4.70:1 | 3:1 | PASS |
| Table-header boundary / table-header background | 3.32:1 | 3:1 | PASS |

Additional accessibility results:

- focus is not communicated by color alone;
- selection has fill and boundary cues;
- evidence/status meaning is written explicitly;
- long content wraps instead of clipping;
- the table maintains headers and all columns;
- the compact row height is driven by content rather than forcing text into an inaccessible fixed height.

## Structural responsive check

No responsive screens were created.

- **1440:** persistent shell, full seven-column table, two-column detail.
- **1280:** narrower shell; table keeps its intrinsic width inside a horizontal viewport; detail remains two-column when content width permits.
- **1024:** navigation changes to a compact rail/drawer pattern; table scrolls horizontally; detail stacks; the selected anchor remains visible; no column is removed.

## Final read-only audit

Severity scale: Critical / Major / Minor.

### Findings

- **Critical:** None.
- **Major:** None.
- **Minor:** Two layout-only semantic rows initially retained default white fills. The fills were cleared, and the complete audit was rerun.

The rerun found zero unbound visible solid paints across all four candidate deliverables.

### Required checks

| Check | Result | Evidence |
|---|---|---|
| H5 UX PRESERVED | PASS | Existing flow, query, coverage, selected event, detail, actions, uncertainty, and context are retained. |
| V2 PRODUCTION PRESERVED | PASS | No candidate-named nodes on pages `00–11` or `99`; production collections and production Timeline Event remain unchanged. |
| FOUNDATION ARCHITECTURE REUSE | PASS | Primitive → Semantic → Component retained; existing non-color token meanings reused. |
| COMPONENT ARCHITECTURE REUSE | PASS | Timeline API/states preserved; table column and row-state architecture retained in additive pilot components. |
| MIXED LIGHT/DARK THEME | PASS | Explicit shell/navigation/table-header roles coexist with light workspace and panels. |
| EVENT TABLE PILOT | PASS | Seven columns, four supplied events, selection, hover, focus, late arrival, evidence, and long-value behavior verified. |
| TIMELINE PILOT | PASS | 14 properties and Default/Selected/Focus states verified. |
| EVIDENCE SEMANTICS | PASS | Observed, inference, note, gap, uncertainty, and operational status remain distinct and explicitly labeled. |
| ACCESSIBILITY | PASS | Tested text pairs pass 4.5:1, functional boundaries pass 3:1, and non-color cues are present. |

## Production migration guardrails

A future production migration should require human approval and proceed in small, audited batches:

1. Approve the candidate visual direction and semantic naming.
2. Decide whether candidate collections become a production theme/mode or a controlled token migration.
3. Map production components to candidate semantic roles without detaching instances.
4. Migrate one component family at a time, beginning with shell/navigation and table primitives.
5. Revalidate every production screen at 1440, 1280, and 1024 before extending to 768 and 390.
6. Run accessibility and design-QA audits after each batch.
7. Preserve rejected explorations and keep rollback paths until final approval.

V1 MIGRATION PILOT APPROVED — READY FOR PRODUCTION MIGRATION
