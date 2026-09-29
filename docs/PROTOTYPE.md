# Phase 11A — Figma Interactive Prototype

Status: implemented in `09 — Prototype`; final approval remains with the Product Designer.

## Prototype objective

**DESIGN DECISION:** Demonstrate the approved H5 investigation architecture and V1 production screens as a realistic, stateful path from case overview through query refinement, event inspection, activity reconstruction, evidence preservation, package readiness, and export completion. The prototype does not redesign the product or change the ownership of its four peer areas.

**FACT:** The prototype is composed from approved production screens, linked components, semantic variables, IBM Plex Sans/Mono styles, and the responsive patterns already present in `07 — Hi-Fi` and `08 — Responsive`. Writes are limited to `09 — Prototype`.

## Primary scenario

The analyst opens the investigation concerning an administrator-role assignment before a customer export, enters Event Explorer, narrows an overly broad query, retains the selected 09:19 role assignment in context, inspects its source detail, and pivots into Activity Reconstruction. The sequence keeps the 09:14 sign-in, 09:19 assignment, 09:26 export start, and 09:41 revocation visible while exposing the reported late arrival, cross-source clock uncertainty, unavailable device identifier, and unresolved actor/session relationship.

The analyst then requests preservation, reviews a confirmed preserved state, keeps Observed Evidence separate from Analyst Inference and Analyst Note, reviews package blockers, resolves the blocking branch, reaches Ready for Review and Ready for Export, initiates export, and sees Export Complete.

Temporal proximity is never presented as causation. The inference remains analyst-authored and qualified by unresolved identity, session, device, timing, and coverage conditions.

## Interaction model

- Instant navigation is used for area changes, query refinement, selection, detail inspection, back behavior, and recovery.
- Dissolve is used for preservation confirmation and export state changes where continuity benefits from a brief state transition.
- Export Processing advances to Export Complete after a short timed transition.
- The primary entry point is `START — Investigation Overview`.
- A second entry point starts the representative 390 px sample.
- Desktop area navigation links Investigation Overview, Event Explorer, Activity Reconstruction, and Evidence Package while preserving the same case identity and selected investigation context.
- The narrow sample uses the approved `All areas` pattern, event-card selection, a dedicated Event Detail state, and an explicit return to the selected result.

## State transitions

Primary desktop path:

`START — Investigation Overview` → Broad Query → Filtered Query → Selected Event → Event Detail → Reconstruction Anchor → Preservation In Progress → Evidence Preserved → Package Draft → Package Incomplete → blocker/recovery → Ready for Review → Ready for Export → Export Processing → Export Complete.

Package readiness is monotonic only after blockers are resolved. An incomplete or failed state has no direct export action. Ready for Export uses the approved readiness and inclusion component variants, with required observations represented as retained and included in the fixed snapshot.

## Represented edge cases

- Overly broad query and capped results.
- Incomplete source coverage with no complete-review claim.
- Late-arriving export event.
- Cross-source clock-quality warning.
- Missing session association.
- Missing device identifier.
- Preservation failure.
- Required evidence missing.
- Data gap requiring review or acknowledgement.

These are representative branches, not separate duplicate end-to-end flows.

## Evidence semantics

**FACT:** Source Event, Preservation State, retained Evidence, Analyst Inference, Analyst Note, and Data Gap remain separate visual and semantic records.

**DESIGN DECISION:** Preservation progresses through Not Preserved, Preservation In Progress, Preserved, and Preservation Failed. Failed or pending preservation never becomes retained Evidence. Analyst Inference remains qualified interpretation; Analyst Note remains working context; Data Gap remains a limitation rather than evidence of absence.

## Responsive prototype scope

The primary prototype is 1440 px desktop. The representative 390 px path contains:

- Investigation Overview with collapsed `All areas` navigation.
- Event Explorer using approved event summary cards.
- Dedicated selected Event Detail with explicit return to the selected result.
- Sequential Evidence Review.

It intentionally does not duplicate reconstruction, every error branch, or the full desktop lifecycle at 390 px.

## Accessibility considerations

- Approved explicit labels and non-color cues distinguish selection, observed evidence, inference, note, warning, and data gap.
- Focus and selected-state designs remain separate in the production components.
- Narrow controls retain the approved touch-oriented sizing.
- Back paths preserve selected-event context.
- Status changes use visible text rather than color alone.
- Motion is limited to short dissolves and one timed processing transition; no decorative motion is used.

Static Figma interactions do not validate keyboard operation, screen-reader names, focus trapping/restoration, live-region announcements, forced colors, browser zoom, or reduced-motion implementation.

## Behaviors not simulated

- Real query execution, latency, pagination, virtualization, sorting, cursor behavior, or source aggregation.
- Authentication, authorization changes, protected-data disclosure rules, or policy enforcement.
- Actual preservation, retention receipts, integrity verification, immutable storage, or retry services.
- Real actor/session correlation, device resolution, or clock-normalization logic.
- Package generation, hashing algorithm, signature, download, delivery, or recipient verification.
- Concurrent edits, late evidence arriving after export, version reconciliation, or audit-log persistence.
- Runtime keyboard, screen-reader, touch, focus, scrolling, and live-announcement behavior.

## Assumptions

- **ASSUMPTION:** The supplied observations are sufficient to demonstrate the investigation model, not to establish a true causal account.
- **ASSUMPTION:** The 390 px pattern is useful for sequential review or triage; suitability for full investigation work is unvalidated.
- **ASSUMPTION:** A disclosed nonessential limitation can coexist with Ready for Export only when required evidence, membership, citations, and integrity checks are complete and the package is not misleading.
- **OPEN QUESTION:** Product and Engineering must define the exact blocker rules, preservation contracts, readiness calculation, package format, and verification method.

## Items requiring real usability testing

- Whether analysts understand broad-query recovery and the distinction between capped results and incomplete source coverage.
- Whether selected-event context remains obvious across Explorer, Event Detail, Reconstruction, and return paths.
- Whether displayed order, observed order, timing uncertainty, and inference are distinguishable without prompting.
- Whether preservation states and recovery actions are correctly interpreted.
- Whether reviewers reliably distinguish Observed Evidence, Analyst Inference, Analyst Note, and Data Gap.
- Whether package blockers are noticed before export and the Ready for Review versus Ready for Export distinction is clear.
- Whether the 390 px card-to-detail-to-evidence path supports realistic work and restores focus/result position appropriately.
- Keyboard, screen-reader, zoom, forced-colors, reduced-motion, live-region, and touch behavior in an implemented prototype.

No usability study, participant result, analytics outcome, performance result, or accessibility conformance result is claimed.
