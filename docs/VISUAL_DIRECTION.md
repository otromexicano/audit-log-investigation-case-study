# Audit Log Investigation

Phase 07 — Visual Direction · Status: approved by the Product Designer

**FACT — Human Product Design decision:** The Product Designer selected **V2 — Modern Intelligence Platform** as the primary visual direction. V1 — Enterprise Security and V3 — Calm Investigation Workspace remain preserved in Figma as exploration evidence and are not selected as the product's primary direction.

**DESIGN DECISION — Approved foundation:** Future visual design and Design System work will use **H5 — Selected Direction** for the UX architecture and **V2 — Modern Intelligence Platform** for the visual language. This decision does not alter the approved navigation model, information hierarchy, investigation flow, evidence model, terminology, or product requirements.

## 1. Selected Direction

V2 presents the product as an analytical intelligence platform for enterprise security investigations. It uses a dark, data-centered workspace; compact information structures; strong state differentiation; and focused visualizations to support rapid scanning without weakening evidence discipline.

The approved representative screens are:

- Investigation Overview
- Event Explorer
- Activity Reconstruction

The selected direction preserves the H5 case-centered shell and four peer product areas:

- Investigation Overview
- Event Explorer
- Activity Reconstruction
- Evidence Package

Only the first three areas were consolidated during Phase 07. Evidence Package remains an approved H5 capability and will receive the selected visual language during later product production.

## 2. Why V2 Was Selected

**DESIGN DECISION:** V2 best communicates the intended combination of analytical intelligence, enterprise security, high trust, and advanced investigation tooling.

The direction was selected because it:

- supports high information density while maintaining a clear hierarchy;
- gives queries, result coverage, selected events, temporal relationships, and uncertainty distinct visual roles;
- makes large event sets and temporal patterns easier to scan;
- feels appropriate for an expert security workflow without depending on decorative styling;
- provides a strong foundation for structured tables, investigation panels, temporal views, evidence markers, and status communication;
- remains compatible with H5's persistent case context and low-context-switching architecture; and
- can be translated into semantic tokens and reusable components without changing the approved UX.

**ASSUMPTION:** The dark analytical workspace will feel credible and efficient to security analysts during sustained use. This has not been validated through user research or usability testing.

## 3. V1 Tradeoffs

V1 — Enterprise Security emphasized a compact operational console, restrained navy and neutral surfaces, dense tables, monospace data, and explicit status bands.

### Strengths retained as guidance

- operational clarity;
- compact event scanning;
- strong trust and reliability cues;
- visible case status, scope, and uncertainty; and
- precise treatment of timestamps and identifiers.

### Reasons it was not selected as the primary direction

- its dense, utilitarian presentation creates more visual compression;
- it provides less room for relationship visualization and analytical pattern recognition;
- it can feel closer to a conventional administrative console than an intelligence platform; and
- additional metadata could increase fatigue unless density is managed carefully.

**DESIGN DECISION:** V1 remains exploration evidence. Its disciplined density, operational clarity, and data readability should inform V2 implementation where they strengthen analyst efficiency.

## 4. V3 Tradeoffs

V3 — Calm Investigation Workspace emphasized lower visual noise, generous spacing, narrative reconstruction, evidence clarity, and deliberate pacing.

### Strengths retained as guidance

- clear separation of evidence, inference, notes, and gaps;
- careful uncertainty language;
- calm reading rhythm for sustained investigation work;
- strong case context; and
- evidence-focused interpretation.

### Reasons it was not selected as the primary direction

- its lower density requires more vertical movement;
- its spacious event treatment is less efficient for large result sets;
- urgent operational states receive less emphasis; and
- its calm presentation may slow experienced analysts working under time pressure.

**DESIGN DECISION:** V3 remains exploration evidence. Its restraint, evidence clarity, and long-session qualities should influence V2 without reducing the selected direction's analytical density.

## 5. Visual Principles

### 5.1 Analytical, not decorative

Visual emphasis must help the analyst interpret scope, results, relationships, state, or evidence. Charts, accent colors, icons, and surface changes must have a functional meaning.

### 5.2 High trust

The interface should appear precise, stable, and reviewable. Source information, timestamps, uncertainty, result coverage, and evidence state must remain explicit. Visual treatment must not imply that an unresolved relationship or analyst inference is verified.

### 5.3 Dense but ordered

The product should show enough information for efficient investigation without presenting every detail at equal prominence. Persistent context, primary actions, selected events, and exceptions receive stronger emphasis than supporting metadata.

### 5.4 Consistent semantic emphasis

Interaction, evidence, inference, uncertainty, and selection each require a stable visual role. These roles should remain consistent across overview cards, result tables, inspectors, timelines, and the Evidence Package.

### 5.5 Evidence before interpretation

Observed source events and preserved evidence remain visually distinct from analyst inference, analyst notes, unresolved relationships, and data gaps.

### 5.6 Explicit coverage and quality

Capped results, incomplete coverage, late events, clock-quality concerns, missing fields, and identifier mismatches must be visible in context rather than hidden in secondary details.

## 6. Density Strategy

The selected direction uses high density selectively.

- **Persistent shell:** Compact case context and navigation remain visible without dominating the workspace.
- **Overview:** Summary cards and activity visualization compress status, scope, evidence, and uncertainty into a fast scan.
- **Event Explorer:** Query controls, refinement feedback, a dense result table, and inline inspection share one workspace.
- **Activity Reconstruction:** Relationship lanes summarize the sequence while qualification cards explain evidence, inference, and clock quality.
- **Supporting metadata:** Small labels and compact tags are acceptable when contrast and readability remain sufficient.
- **Progressive detail:** Secondary details appear in panels or inspection states rather than expanding every event row.

**DESIGN DECISION:** Density must increase analyst throughput without requiring manual review of every result or obscuring incomplete coverage.

**OPEN QUESTION — Validation:** What information density remains comfortable during multi-hour investigations at the approved responsive widths?

## 7. Typography Principles

- Use a neutral sans serif with clear differentiation between headings, labels, body content, and compact metadata.
- Use a monospace face selectively for timestamps, identifiers, query syntax, hashes, and other structured values.
- Keep headings concise and use weight and scale before introducing additional color.
- Maintain readable body text and avoid relying on very small text to achieve density.
- Use uppercase labels sparingly for compact categories and metadata, not long passages.
- Preserve tabular alignment where it improves scanning across event rows.
- Ensure zoom and text enlargement do not hide investigation state or source details.

**ASSUMPTION:** Manrope and IBM Plex Mono are suitable exploration fonts for the selected direction. Final font families, weights, licensing, platform rendering, and fallback behavior remain deferred.

## 8. Surface Strategy

- Use a dark workspace canvas to establish the analytical environment.
- Use layered navy surfaces to separate the shell, primary work areas, panels, and selected content.
- Use borders and tonal shifts to define structure without heavy shadows or decorative effects.
- Reserve brighter outlines for active navigation, selected events, keyboard focus, and the current inspection target.
- Keep corner treatment and elevation restrained and consistent.
- Avoid surface variation that does not communicate grouping, hierarchy, or state.

The exploration establishes a relative hierarchy rather than final color values:

1. workspace canvas;
2. persistent case shell;
3. primary panels;
4. nested data surfaces;
5. selected or focused surfaces.

## 9. Data-Display Principles

- Tables prioritize timestamp, event, source, actor or relationship, and evidence status.
- Selected rows remain visible while the analyst inspects event details.
- Query scope and result coverage appear adjacent to the results they qualify.
- Capped or incomplete result sets use explicit text and offer refinement paths.
- Temporal charts support scanning and orientation; they do not replace source-event access.
- Activity Reconstruction distinguishes event time from ingestion time where relevant.
- Late-arriving events and clock-quality issues remain visible in the sequence.
- Temporal proximity must not be presented as confirmed causality.
- Visualizations need useful empty, sparse, dense, partial, and error states.
- Structured values should support comparison without truncating the information required to interpret them.

## 10. Evidence and Status Communication

The selected direction uses semantic roles that will later be formalized in the Design System:

| Role | Intended communication |
| --- | --- |
| Interaction and selection | Active navigation, query actions, selected rows, and focused inspection |
| Observed evidence | Verified source-event content and preserved evidence |
| Analyst inference | An interpretation derived from evidence, not a source fact |
| Analyst note | Analyst-authored context without evidentiary status |
| Unresolved relationship | A possible relationship that has not been confirmed |
| Data gap or quality warning | Missing fields, retention gaps, late events, clock issues, or incomplete coverage |
| Package readiness | Whether required evidence and documentation are ready for a fixed package |

Color must not carry these meanings alone. Text labels, status words, symbols or icons, border treatment, and placement must reinforce each state.

**DESIGN DECISION:** Green is reserved conceptually for observed or preserved evidence, amber for uncertainty and data-quality concerns, cyan for interaction and selection, and violet for inference or analytical anchors. These are semantic intentions, not final tokens or approved production color values.

## 11. Accessibility Considerations

- Target WCAG 2.2 AA contrast for text, controls, focus indicators, data visualizations, and state markers.
- Pair every status color with a label, symbol, icon, pattern, or other non-color cue.
- Keep selected and keyboard-focus states visually distinct.
- Preserve readable dense data at supported zoom levels.
- Ensure tables retain headers and meaningful reading order for assistive technology.
- Provide accessible names for icons and icon-only controls.
- Avoid encoding relationships solely through spatial position or connector style.
- Make capped results, incomplete coverage, uncertainty, and errors programmatically identifiable.
- Validate the dark theme for glare, low-contrast secondary text, and long-session fatigue.
- Maintain adequate pointer and touch targets as responsive behavior is defined.
- Ensure charts and timelines have equivalent textual access to their underlying events and states.

**OPEN QUESTION — Accessibility validation:** Exact contrast ratios, focus treatment, reduced-motion behavior, screen-reader semantics, and zoom behavior must be validated after tokens and components exist.

## 12. Decisions Deferred to Design System Creation

The following decisions are intentionally unresolved in Phase 07:

- final primitive, semantic, and component color tokens;
- exact dark-theme color values and contrast pairs;
- final font families, type scale, line heights, weights, and fallback stack;
- spacing scale, density modes, and responsive spacing rules;
- border, radius, elevation, and surface tokens;
- icon family, icon sizing, and accessible icon-label behavior;
- focus-ring tokens and keyboard interaction specifications;
- table row heights, column behavior, truncation, wrapping, and virtualization assumptions;
- chart and timeline tokens, legends, patterns, and accessible alternatives;
- semantic status tokens for evidence, inference, notes, uncertainty, gaps, and readiness;
- component architecture, properties, states, and variants;
- responsive adaptations for 1440, 1280, 1024, 768, and 390 widths;
- light-theme support, if required;
- motion principles and reduced-motion behavior; and
- production validation with real browser rendering and assistive technology.

These decisions must be resolved through the approved token architecture:

Primitive → Semantic → Component

Phase 07 defines the visual direction and semantic intent. It does not establish the production Design System.
