# Phase 06 — UX Hypothesis Evaluation

**Status:** Phase 06 approved by the Product Designer. H5 — Selected Direction is the approved interaction architecture for visual exploration.

**FACT — Basis:** This document records the comparison of the five low-fidelity states in each of [H1 — Investigation-First](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation-%E2%80%94-Case-Study?node-id=26-2), [H2 — Search-First](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation-%E2%80%94-Case-Study?node-id=26-5), [H3 — Timeline-First](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation-%E2%80%94-Case-Study?node-id=31-2), and [H4 — Evidence-First](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation-%E2%80%94-Case-Study?node-id=31-5); the subsequent human selection of [H5 — Selected Direction](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation-%E2%80%94-Case-Study?node-id=42-2); and H5’s targeted remediation. The work is evaluated against the [brief](BRIEF.md), [UX assumptions](UX_ASSUMPTIONS.md), [information architecture](INFORMATION_ARCHITECTURE.md), and [primary flow](PRIMARY_FLOW.md). The brief is an approved fictional challenge baseline. The IA and Primary Flow documents still label their detailed decisions “proposed for human review”; Phase 06 uses them as the project’s working flow without treating unresolved capabilities as proven.

**ASSUMPTION — Evaluation limit:** Scores estimate how the represented interaction structures would support the supplied scenario. The screens are static, low-fidelity proposals. No analyst behavior, system performance, source coverage, preservation mechanism, package verification, or accessibility conformance has been tested. Equal presentation detail is not evidence of equal implementation feasibility.

## 1. Hypotheses

| Hypothesis | Core interaction model | What leads the analyst’s next action |
| --- | --- | --- |
| **H1 — Investigation-First** | A persistent case rail holds the question, scope, anchor, unresolved links, and evidence status while a guided working surface moves from finding to inspection, correlation, and preservation. | The current case state and the next investigative decision. |
| **H2 — Search-First** | A persistent query surface, dense event grid, inline source inspector, and evidence tray support repeated narrowing and drill-down. The case context is available in a smaller, collapsible area. | The effective query and the currently selected result. |
| **H3 — Timeline-First** | A before/anchor/after event canvas is the primary workspace. A time lens discovers events; an adjacent inspector qualifies source timing, relationships, and gaps. | The anchor moment and surrounding activity, with event-time versus ingestion-time comparison. |
| **H4 — Evidence-First** | A case ledger separates live source intake, confirmed retained evidence, analyst reasoning, and audit/package activity. An observation advances only after a visible preservation outcome. | The record’s provenance and readiness for a defensible claim or package. |

**FACT — Common coverage:** Every hypothesis depicts Investigation Overview, Event Explorer, Activity Reconstruction, Evidence Package, and the five requested moments: context, discovery, event inspection, reconstruction, and preservation. None supplies an actual actor mapping, session link, device identifier, timezone, retained source payload, or generated hash.

## 2. Comparative Scorecard

**ASSUMPTION — Scoring method:** Scores use the same 1–5 scale for all four static proposals. A **5** means the interaction model strongly supports the criterion in the supplied scenario; a **1** means it creates a substantial structural obstacle. For **cognitive load, 5 means the lowest burden and 1 the highest**. “Scalability” estimates navigational capacity for large result sets, not measured technical performance. “Resilience” estimates how visibly the model carries the six specified edge conditions without converting uncertainty into fact. The prior Phase 06A/06B scores were compared against these shared definitions; none is a measured usability result or an aggregate product ranking.

| Criterion | H1 | H2 | H3 | H4 | Comparative reason |
| --- | ---: | ---: | ---: | ---: | --- |
| Investigation efficiency | 4 | 4 | 4 | 3 | H1 limits case switching, H2 accelerates interrogation, and H3 accelerates before/after reconstruction; H4 adds preservation and record review steps. |
| Cognitive load *(5 = lowest)* | 4 | 2 | 3 | 2 | H1 exposes a guided next step; H2’s query/grid/inspector/tray and H4’s four simultaneous record lanes require more active monitoring; H3 sits between them. |
| Event discoverability | 3 | 5 | 4 | 3 | H2 gives filtering and dense scanning primacy; H3 offers a bounded time lens; H1 and H4 route discovery through a case step or intake queue. |
| Relationship understanding | 4 | 3 | 5 | 4 | H3 keeps the sequence and relationship basis adjacent; H1 preserves case context; H4 connects claims to source records; H2’s result-oriented layout makes correlation a pivot. |
| Evidence traceability | 5 | 3 | 3 | 5 | H1 keeps evidence status with the case and H4 makes source-to-retention-to-claim explicit; H2 and H3 have evidence actions but center another object. |
| Scalability | 3 | 5 | 3 | 3 | H2’s query refinement and grid best accommodate large volumes conceptually; a guided surface, time canvas, or ledger needs a strong narrowing mechanism. |
| Learnability | 4 | 3 | 4 | 3 | H1’s progression and H3’s before/after model are easier to grasp initially; H2 assumes filter literacy and H4 requires understanding record states. |
| Resilience to edge cases | 4 | 3 | 4 | 5 | H4 makes missing support and preservation status explicit; H1 carries case limitations; H3 is strong on timing but weaker on result volume; H2 needs safeguards outside the fast grid. |

## 3. Product Requirement Coverage

The four areas are peer capabilities in the working IA, not mandatory sequential gates. “Strongest” and “weakest” below describe **relative emphasis**, not removal of a requirement.

| Area and required responsibility | H1 | H2 | H3 | H4 |
| --- | --- | --- | --- | --- |
| **Investigation Overview:** question, scope, preservation intent/outcome, limitations, case activity | **Strongest:** persistent case rail keeps these available through work. | Compact context supports return, but is less prominent than the query. | Temporal orientation makes anchor/window clear; broader case governance is secondary. | Case record and audit lane make state and handling explicit; orientation competes with ledger density. |
| **Event Explorer:** authorized actor/action/resource/time/source filters, visible query, result qualifications, source inspection | Guided discovery and inspection are present; high-volume scanning is H1’s weakest area. | **Strongest:** query builder, dense grid, refinement, execution comparison, inline inspection. | Time lens supports bounded discovery; non-temporal filtering and very large sets are less central. | Intake queue and source inspection are present; rapid interrogation is H4’s weakest area. |
| **Activity Reconstruction:** qualified sequence, relationships, timing basis, notes/inference | Case-linked correlation is clear; timeline has less workspace than H3. | Query-linked pivot supports reconstruction, but context can fragment across search and timeline. | **Strongest:** before/anchor/after canvas, timing provenance, and unresolved relationship inspector. | Source/retained/claim alignment makes support inspectable, but chronology is compressed into ledger content. |
| **Evidence Package:** preserved inventory, exact support/revisions, omissions, manifest, integrity and audit | Preservation is available while working; case status and readiness remain visible. | Tray offers capture and package access, but may be peripheral during heavy search. | Moment selection leads to preservation; package composition is secondary to the time canvas. | **Strongest:** retention outcome, exact citation, notes/inference separation, audit and package lanes. |

**DESIGN DECISION — Boundary to retain:** A quick action in any area may open the owning area or shared record, but must not silently alter declared scope, turn live results into preserved evidence, accept a proposed relationship, or change package membership. This follows the working IA’s five-state persistence boundary and cross-navigation rules.

## 4. Critical Scenario Fit

**FACT — Supplied scenario:** Marcos investigates a 09:19 administrator-role assignment after a 09:14 sign-in and before a 09:26 customer export start and 09:41 revocation. The identity clock is verified, the export event arrives four minutes late, and the device identifier is unavailable. Source payloads, date/timezone, actor and session mappings, export completion, and causation are not supplied. The large export is the suspected customer-data activity, distinct from the later evidence-package export.

| Flow moment | H1 | H2 | H3 | H4 |
| --- | --- | --- | --- | --- |
| Initial discovery | Case question and anchor guide the starting point. | Query launch gets quickly to candidate records. | Time window around 09:19 makes surrounding activity immediately visible. | Case record establishes preservation intent before intake. |
| Filtering | Guided filters retain case scope; high-volume iteration may be slower. | Most expressive and visible effective-query refinement. | Time brushing is direct; actor/resource/source filters need equal clarity. | Filters exist in Event Explorer, but the ledger slows repeated interrogation. |
| Event inspection | Source details sit beside case context and next steps. | Inline inspector preserves grid position and query. | Inspector retains the selected moment’s before/after context. | Source observation and preservation outcome sit in separate lanes. |
| Actor/session investigation | Unresolved identity and session remain visible in the case rail. | Fast pivot is possible, but expansion must disclose changed criteria. | Relationship inspector explains basis against the sequence. | Unsupported links cannot become claims or retained-source facts. |
| Chronological reconstruction | A guided correlation step shows all four activities. | A separate query-linked pivot is needed. | Primary canvas excels at before/after comparison, provided visual order stays qualified. | Chronology is reviewable through source rows but less spatially legible. |
| Uncertainty | Case status retains missing device, weak links, clock and coverage limits. | Query/result qualifications are available; some limits may recede behind scanning. | Event time, ingestion, clock quality and unknown coverage are central. | Unknowns travel with the source item, claim, and proposed package. |
| Evidence preservation | Contextual actions support preserving as the analyst works. | Tray allows rapid capture but risks postponing confirmation. | Moments can be selected from the sequence; outcomes must be checked elsewhere. | Preservation outcome is an explicit transition between intake and evidence. |
| Final package preparation | Readiness follows the guided path and retains case limitations. | Package tab exists, with more reconstruction of context from search state. | Selected moments and timing limits feed the package. | Exact retained items, reasoning revisions, omissions and audit are most prominent. |

**ASSUMPTION — Scenario-fit limit:** The screens illustrate supplied observations, not executed searches or successfully preserved records. In any selected direction, the product must preserve original timestamps, distinguish assigning identity from role recipient, expose source/ingestion/clock quality, and show whether evidence is live, pending, retained, failed, or reference-only. A plausible-looking sequence must not stand in for a supported same-actor, same-session, or causal relationship.

## 5. Edge Case Resilience

The Primary Flow’s **ALLOW WITH UNCERTAINTY / WARN / BLOCK** policy applies to the affected claim or action, regardless of hypothesis. These are comparative UI affordances, not claims that detection or recovery already works.

| Edge case | H1 | H2 | H3 | H4 |
| --- | --- | --- | --- | --- |
| **Mismatched actor identifiers** | Persistent unresolved status helps avoid a premature single-actor story; comparison needs a dedicated drill-down. | Source-qualified filters support separate candidates; rapid pivots risk silently broadening or conflating them unless scope changes are explicit. | Adjacent events make candidate relationships visible; temporal proximity could still look like identity equivalence. | Separate source records and qualified inference keep a mapping from becoming an observation; dense ledger may slow comparison. |
| **Late-arriving events** | Case status can prompt reassessment, but previous and current result membership need an explicit comparison. | Query re-execution and comparison are most natural; a saved query must never imply frozen membership. | Ingestion-versus-event-time view makes the four-minute delay salient; the canvas must update without rewriting prior review. | Addition and package history distinguish newly arrived evidence from an older fixed export; discovery may be slower. |
| **Clock drift / uncertain order** | A case warning follows the analyst, though the correlation view must prevent a falsely exact sequence. | Grid sorting can separate event and ingestion times, but row order can be overread. | Strongest timing inspection; the before/after arrangement must mark cross-source order as unproven when quality is unknown. | Clock provenance travels with each item and claim; comparing a long uncertain sequence is less direct. |
| **Overly broad queries** | Guided narrowing helps, but the working surface has limited dense-scan capacity. | Strongest refinement and capped-result affordance; must block claims of complete review from an unreviewable set. | Time brush narrows a window, but bursty volumes within a short interval remain hard to scan. | Intake queue could hide unreviewed volume; selection cannot imply the whole result set was considered. |
| **Missing device identifier** | Limitation stays in persistent case context. | Inspector shows the missing field, but a fast result scan may overlook it. | Sign-in moment shows the missing device field beside later events; no device lane/link may be fabricated. | Missing field remains attached to the source item and any inference/package limitation. |
| **Retention gaps** | Case-level limit persists; must distinguish unknown coverage from a confirmed interval. | Query coverage can qualify results and no-match states; incomplete search cannot be presented as a retention gap. | A confirmed interval could sit on the time canvas; the present scenario has unknown coverage, not a documented gap. | Gap basis can travel into the ledger and package; a missing field must not be mislabeled a retention gap. |

## 6. Tradeoffs

| Hypothesis | Primary strength | Primary weakness | Primary UX risk | Best context of use | Preserve even if not selected |
| --- | --- | --- | --- | --- | --- |
| **H1** | Continuous case question, scope, status and evidence progress. | Less capacity for rapid interrogation of a large corpus. | Guidance may become a rigid sequence even though the four areas are peers and investigation loops. | A focused case resumed over time or handed to a reviewer. | Compact persistent case context; visible declared-versus-working scope and preservation outcome. |
| **H2** | Fast query refinement and result-to-source inspection. | Context, relationship reasoning and evidence confirmation receive less attention. | Speed may encourage treating a live selected row or tray item as preserved support. | High-volume triage around known event attributes. | Effective query/limits strip, dense grid, preserved result position, and explicit pivot criteria. |
| **H3** | Strong before/after understanding with timing provenance. | Large event volumes and package inventory fit poorly in the time canvas. | Visual adjacency can imply reliable order, shared actor/session, or causation without support. | Reconstructing activity around a known anchor or explaining a late event. | Event-time/ingestion-time comparison, clock-quality annotation, and qualified relationship inspector. |
| **H4** | Source-to-retained-evidence-to-inference traceability with audit context. | Record-state management makes exploratory discovery heavier. | Analysts may spend effort maintaining the ledger before learning which events matter. | Evidence review, preservation verification, and package preparation. | Explicit preservation-outcome transition; separate observation, inference and note records; package membership and audit trail. |

## 7. Hybrid Opportunities

**DESIGN DECISION — Proposed options, not a selected architecture:** Borrow one bounded pattern to address a specific weakness. Retain the four peer areas and shared-record semantics; do not place every H1–H4 surface on one screen.

| Possible combination | Base architecture | Specific borrowed pattern | Why it may help | Complexity introduced |
| --- | --- | --- | --- | --- |
| **H1 + H2 query workbench** | H1’s case-led workspace | H2’s effective-query strip, dense result grid, inline source inspector and explicit return-to-result position **within Event Explorer only**. | Addresses H1’s weaker high-volume discovery while keeping case scope and evidence status visible across the investigation. | Competing persistent case and query context can crowd the desktop; case scope versus temporary query scope needs a clear boundary. |
| **H1 + H3 timing inspection** | H1’s case-led workspace | H3’s event-time/ingestion-time comparison and clock-quality/ambiguous-order inspector **within Activity Reconstruction only**. | Improves the supplied late-export and uncertain cross-source chronology without making a timeline the entire product. | Two ordering modes and qualified relationships need careful labels and return state; extra timeline controls may burden ordinary cases. |
| **H2 + H4 preservation receipt** | H2’s search workspace | H4’s explicit pending/retained/failed/reference-only transition and exact evidence receipt **at the evidence tray handoff**. | Reduces the risk that fast selection is mistaken for successful preservation. | A per-item confirmation step can interrupt rapid scanning; tray status and package inventory must stay synchronized. |

The first two are alternative enhancements to H1, not a request to install both. The third is an alternative base direction for teams that prioritize search throughput. H4’s full four-lane ledger is not proposed as an overlay on H1 or H2.

## 8. Recommendation Options

These are reviewable choices for the Product Designer, **not a final product decision**. They describe different priorities; the scores above do not prove which priority the target analysts value most.

| Option | Direction | Rationale | Main tradeoff and validation need |
| --- | --- | --- | --- |
| **A — strongest single hypothesis** | **H1 — Investigation-First**, as drawn. | It provides the most balanced path from the supplied anchor to qualified reasoning and evidence while keeping case context and limits visible. | High-volume search may feel slow or constrained. Test whether analysts can narrow and inspect a large, capped set without losing the case thread. |
| **B — strongest hybrid approach** | **H1 base + H2 query workbench in Event Explorer** (the first hybrid above). | Keeps H1’s continuity and evidence status while improving the clearest weakness in event interrogation. | Additional query density could erode H1’s low cognitive burden. Test scope comprehension, return context, and preservation status during repeated pivots. |
| **C — safest / lowest evidentiary-risk approach** | **H4 — Evidence-First**, with its explicit retention and citation transitions. | Makes unsupported claims, missing retained content, and package provenance hardest to overlook in the static proposal. | It is not the lowest learning or workload risk. Test whether analysts can discover and correlate events without excessive record-management overhead. |

**OPEN QUESTION — Risk meaning:** If “safest” instead means lowest adoption risk for less experienced analysts, H1 is the safer starting point; H4 is the safer option specifically for traceability and misrepresentation risk. The Product Designer must state which risk is primary before selecting C.

## 9. Human Decision Required — Comparison Outcome

The comparison presented the following decisions to the Product Designer before H5 was created:

1. Which objective leads the experience: case continuity, search throughput, temporal explanation, or evidentiary traceability? Choose A, B, C, another explicitly bounded hybrid, or request another exploration; no score automatically selects it.
2. Whether the four required areas remain visibly peer destinations and what case context must persist while moving between them. Approve the boundary between declared case scope, temporary query, live result, preserved evidence, analyst revisions, and fixed package version.
3. Which specific borrowed pattern, if any, earns its added complexity. In particular, decide whether Event Explorer needs H2’s dense query workbench inside an H1 base, and whether timing inspection requires H3’s dual-time treatment regardless of base.
4. What the selected flow may claim when identity/session mapping is unresolved, source clocks disagree, the device identifier is missing, results are capped, or coverage is unknown. Confirm that unsupported attribution or causality cannot become a package-ready inference.
5. Which preservation outcomes and package dependencies block progression, what an authorized reviewer needs to verify, and whether a qualified package may proceed with disclosed missing material. Product, security, engineering, and intended recipients still need to validate the underlying preservation, authorization, and integrity contracts.
6. What evidence would change the selection: observed analyst search/correlation behavior, representative volume and query benchmarks, source timing/coverage metadata, preservation-after-retention tests, and recipient verification of a sample package. These are proposed validation activities, not completed research.
**FACT — Resolution:** The Product Designer resolved these questions by selecting H1 as the base architecture and explicitly authorizing bounded patterns from H2, H3, and H4. Sections 10–14 record that decision, the resulting H5 architecture, remediation, and final approval.

**Read-only comparison audit:** **Critical — none observed** in the four low-fidelity boards against the stated scope. **Major —** H1/H3/H4 needed a tested answer for large result sets; H2 risked delayed preservation; H3 risked perceived causality from spatial order; H4 risked excessive record-state burden. **Minor —** dense labels in the H2/H4 static states should be tested for scanning and accessibility during later design. These are design-review findings, not measured defect rates or a WCAG conformance result.

## 10. Human Product Design Decision

**DESIGN DECISION — Approved:** Use **H1 — Investigation-First** as the base product architecture for **H5 — Selected Direction**.

The selected direction preserves:

- one case-centered shell;
- four peer investigation areas: Investigation Overview, Event Explorer, Activity Reconstruction, and Evidence Package;
- one persistent investigation-context model;
- one navigation model;
- one terminology system;
- one evidence model; and
- a clear progression from finding → correlation → evidence without making the areas mandatory sequential gates.

**DESIGN DECISION — Approved borrowing boundary:** Patterns from H2, H3, and H4 are used only inside the area whose responsibility they strengthen. H5 is one interaction architecture, not a collage of the four explorations.

| Area | Approved architectural emphasis |
| --- | --- |
| Investigation Overview | H1’s persistent case question, declared scope, working status, known limitations, preservation intent, and next investigative action. |
| Event Explorer | H2’s rapid refinement, advanced filters, dense scanning, inline source-event inspection, and preserved return context. |
| Activity Reconstruction | H3’s before/anchor/after orientation, event-time versus ingestion-time inspection, clock-quality qualification, late-event visibility, and direct links to source events. |
| Evidence Package | H4’s source → preservation outcome → Evidence item → claim traceability; explicit Observed Evidence, Analyst Inference, Analyst Notes, unresolved relationships/data gaps, package readiness, and audit context. |

The Product Designer did not approve automatic actor or session mapping, inferred device relationships, an invented timezone, unsupported causal claims, automatic completeness claims, or a production preservation/integrity implementation.

## 11. H5 — Selected Direction

**DESIGN DECISION — Approved architecture:** H5 uses a shared shell that persists the Case, analyst, anchor, declared scope, current working state, evidence status, and unresolved relationships. Each peer area then owns its detailed task state. This prevents duplicated scope, navigation, and evidence concepts while allowing iterative movement between discovery, reconstruction, and evidence review.

### Unified state and terminology

H5 retains the working IA’s five state boundaries:

1. **Declared case scope:** The investigation question and intended boundary. Temporary query refinements do not silently rewrite it.
2. **Working investigation context:** Effective query criteria, execution status, selected source event, area, and return position. Saved criteria do not freeze result membership.
3. **Observed source event:** An immutable source observation. Selection, pinning, inspection, or citation does not make it preserved evidence.
4. **Case Evidence item:** Confirmed retained source content and provenance with an explicit preservation outcome. Pending, failed, or reference-only states cannot be called retained content.
5. **Analyst and exported records:** Analyst Inference and Analyst Notes remain separate, attributable records. A generated Evidence Package is a fixed manifest with exact included revisions and an integrity record.

**DESIGN DECISION — Approved terminology:** Use **Observed Source Event**, **Evidence item**, **Analyst Inference**, **Analyst Note**, **Unresolved Relationship**, **Data Gap**, **working query**, and **package version** consistently. A missing field, unknown source coverage, capped retrieval, and a documented retention gap are distinct conditions.

### H5 representative flow

| H5 state | Purpose and behavior |
| --- | --- |
| **01 — Investigation Overview / establish the case** | Establishes the question, declared scope, anchor, preservation intent, known limits, and next investigative action. |
| **02 — Event Explorer / find the suspicious event** | Shows the effective query, result qualifications, dense scan, selected candidate, and contextual inspector while preserving case context. |
| **02A — Event Explorer / recover from a capped result set** | Appears conditionally when an execution is capped or otherwise unreviewable; documents the targeted Phase 06E remediation in §13. |
| **03 — Event Explorer / inspect without losing results** | Opens the selected source observation inline while retaining the effective query, sort/scroll position, and return path. |
| **04 — Activity Reconstruction / qualify the sequence** | Compares before/anchor/after activity, event and ingestion times, clock quality, relationship basis, uncertainty, notes, and draft inference. |
| **05 — Evidence Package / preserve and prepare a fixed version** | Reviews preservation outcomes, exact citations, analyst content, unresolved limitations, package readiness, manifest/integrity dependencies, and case activity. |

H5 retains the critical path from the Primary Flow while allowing loops back to discovery, event inspection, source evidence, and reconstruction. It does not treat the visible five-step representation as a product wizard.

## 12. Patterns Retained from Each Hypothesis

| Source hypothesis | Retained pattern | H5 placement | Reason retained | Boundary |
| --- | --- | --- | --- | --- |
| **H1 — Investigation-First** | Persistent investigation context; visible scope/status; guided finding → correlation → evidence progression; low context switching. | Shared case shell and contextual next actions across all H5 states. | Provides continuity, resumption support, and a defensible relationship between temporary work and the durable Case. | Guidance must not turn peer areas into irreversible stages. |
| **H2 — Search-First** | Effective-query strip; advanced actor/action/resource/time/source filtering; dense result scan; inline source inspector; explicit return to the selected row and prior criteria. | Event Explorer states 02, 02A, and 03. | Addresses large-volume interrogation without making search the whole product architecture. | Query state remains working context; selected or saved results are not Evidence. |
| **H3 — Timeline-First** | Before/anchor/after orientation; event-time and ingestion-time comparison; clock-quality and late-event qualification; direct source-event navigation. | Activity Reconstruction state 04. | Supports the supplied late-arriving export and qualified chronological reconstruction. | Visual order cannot imply reliable cross-source order, shared session/actor, elapsed time, or causation. |
| **H4 — Evidence-First** | Explicit preservation outcomes; source-to-evidence-to-claim traceability; separate inference and notes; unresolved gaps; readiness and audit checks. | Evidence Package state 05, with preservation status visible from contextual actions elsewhere. | Makes the investigation record reviewable without forcing evidence-led bookkeeping into early discovery. | Only confirmed retained content becomes an Evidence item; package inclusion is explicit and versioned. |

## 13. H5 Targeted Remediation — Large Result Sets

### Review finding

**Major finding after the initial H5 build:** The search/result model did not sufficiently explain how an analyst works through an unreviewably large or capped result set. The initial grid named the broad-query condition but did not show a complete recovery path.

**DESIGN DECISION — Remediation:** Add a conditional **02A — Event Explorer / recover from a capped result set** state inside H5. This state appears only when the current execution cannot be reliably reviewed. It does not add another permanent navigation destination or redesign the approved shell.

### Recovery model

The remediation makes seven conditions explicit:

1. **The query is too broad:** A prominent state identifies the execution as capped or incomplete and prevents a claim of complete review.
2. **The analyst can narrow it:** Refinement proceeds through a smaller time window, action/source constraints, and source-qualified actor or resource identifiers only when inspected records support them.
3. **The visible subset is explicit:** The UI reports the system’s total count or lower bound, loaded range, retrieval cap, and execution time.
4. **Completeness is explicit:** Every execution says whether review remains incomplete. A cap is distinguished from unknown source coverage and a documented retention gap.
5. **Investigation context persists:** The Case, declared scope, prior broad query Q1, proposed refinement Q2, and reason for the change stay available.
6. **The suspicious event persists:** The selected 09:19 assignment remains an accessible working anchor even if Q2 excludes it or its prior row is outside the loaded subset. It remains a live source observation until preservation succeeds.
7. **Uncertainty travels forward:** If the refined query remains capped, the analyst continues narrowing or divides the investigation into explicitly recorded query scopes. Unseen records cannot be represented as reviewed.

Query history retains criteria and execution metadata; it does not freeze results or preserve events. Restoring Q1 restores its criteria and context, not a guaranteed historical result set.

**ASSUMPTION — Backend-dependent enhancement:** Filter-impact counts or grouped/faceted counts may be displayed only if the query service supplies reliable aggregates. H5 does not require predicted impact counts to perform progressive refinement. Actual result-count semantics, retrieval caps, loaded-range behavior, query-history persistence, and split-query execution require Product and Engineering validation.

### Remediation re-audit

| Criterion | Result |
| --- | --- |
| Investigation efficiency | The analyst can reduce an unreviewable result set through bounded changes without rebuilding case context. |
| Cognitive load | Recovery controls are conditional; normal Event Explorer remains compact. |
| Large-result-set handling | Count/lower bound, loaded range, cap, coverage, incompleteness, and next refinement are explicit. |
| Event discoverability | Time, action, source, and supported identifiers provide an ordered narrowing path. |
| Context preservation | Q1, proposed Q2, declared scope, and the selected source event remain distinct and recoverable. |
| Evidence traceability | The selected event remains a live observation until retained-content confirmation; query history cannot be confused with Evidence. |
| Scalability | Progressive refinement or explicitly recorded query scopes replaces exhaustive manual scanning at the interaction level. |
| Learnability | Numbered steps and visible execution status explain why and how to narrow. |

**Critical:** None identified.

**Major:** None remaining in the Phase 06 architecture review. The previously identified large-result-set issue is resolved at the interaction-model level.

**Minor:** Query-history persistence and system result metadata still require validation. Later visual work must keep the conditional cap/incompleteness status prominent without making recovery feel like a permanent second workspace.

## 14. Final Architecture Approval

**DESIGN DECISION — Product Designer approval:** Phase 06 and the overall H5 direction are approved. H5, including the targeted large-result-set remediation, is the selected interaction architecture for the next design stage.

Approval establishes:

- H1 as the base case-centered architecture;
- the bounded H2, H3, and H4 patterns recorded in §12;
- the single navigation, investigation-context, terminology, and evidence models described in §11;
- the distinction among live results, observed source events, confirmed Evidence items, Analyst Inference, Analyst Notes, unresolved conditions, and fixed package versions;
- preservation of uncertainty for actor/session/device relationships, timing, coverage, and causation; and
- the Phase 06E recovery model for capped or incomplete query results.

Approval does not validate user behavior, technical feasibility, performance, preservation after source expiry, authorization across retained/exported material, package verification, legal admissibility, or WCAG 2.2 AA conformance. Those remain future validation and implementation responsibilities.

**Phase boundary:** Phase 06 is complete. H1–H4 remain visible as preserved explorations. H5 is ready to serve as the architecture for visual exploration; visual direction, tokens, components, high fidelity, responsive behavior, prototype behavior, accessibility conformance, and final design QA remain later stages.

PHASE 06 APPROVED
READY FOR VISUAL EXPLORATION
