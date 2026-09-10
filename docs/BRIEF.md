# Audit Log Investigation

Phase 01 — Product Brief · Status: approved by the Product Designer

**FACT — Project approval:** The Product Designer approved Phase 01 in this task and explicitly instructed that Phase 02 must not start yet. Figma modification remains out of scope.

**DESIGN DECISION — Approved product understanding:** This brief is the approved Phase 01 baseline. Approval accepts the problem framing, scope, and documented provisional understanding; it does not turn assumptions into research findings or resolve open questions.

Source: [UI Coach — Audit Log Investigation](https://www.uicoach.io/challenges/audit-log-investigation). The complete challenge was reviewed, including its background, user context, objective, required experience, critical path, requirements, constraints, edge states, mock data, deliverable, and optional resources.

Evidence labels used throughout:

- **FACT** — stated in the challenge; describes a fictional design brief, not validated user research. Project instructions are explicitly attributed separately.
- **ASSUMPTION** — provisional interpretation, proposed criterion, or potential risk requiring validation.
- **DESIGN DECISION** — a choice requiring human ownership. Phase 01 product understanding is approved; information architecture, UI, visual direction, and implementation choices remain deferred.
- **OPEN QUESTION** — unresolved information to clarify with the indicated stakeholder.

## 1. Product Problem

**FACT — Background / Product problem:** Audit logs may contain millions of records. Identifiers, timestamps, and data quality differ, complicating investigation across actors and systems. Analysts need to narrow the relevant records, trace relationships, save evidence, and document a defensible case while exposing gaps and preserving original logs.

**ASSUMPTION — Why it matters:** An incorrect connection between records could lead to an unsupported accusation or an overlooked access incident. Hidden gaps or interpretations presented as observations could make a conclusion appear stronger than its evidence warrants.

## 2. Primary User

**FACT — User context:** The named primary user is Marcos, a security analyst investigating an administrator role assignment shortly before a large export. He needs to connect the change with a session, device, and export without modifying source logs.

**ASSUMPTION:** Marcos understands basic security events but may need help interpreting inconsistent records across systems. His seniority, query expertise, workload, accessibility needs, and team structure are unknown.

**OPEN QUESTION — Security Analysts:** Who performs this investigation in practice, and what knowledge can the product reasonably expect?

## 3. User Goal

**FACT — Objective / Critical path:** Trace the access incident from the role assignment through related activity, preserve the relevant source events, mark an inference separately, and export a hashed case package.

**ASSUMPTION:** The ultimate investigative outcome is a supportable explanation of what happened, what can be connected, and what remains uncertain. Suspicion alone does not establish wrongdoing.

## 4. Business / Security Goal

**FACT — Product problem / Requirements:** Support a defensible investigation record through preserved evidence, documented interpretation, visible gaps, recorded case access and evidence additions, and export integrity.

**ASSUMPTION:** This supports organizational incident assessment and subsequent review. Regulatory compliance, legal admissibility, loss reduction, and response-time improvements are not demonstrated outcomes or specified guarantees.

**OPEN QUESTION — Product / Security Operations:** Which organizational decision should a completed case enable, and who receives it?

## 5. Investigation Scenario

**FACT — User context:** A new administrator role is assigned shortly before a large export, prompting Marcos to investigate. The brief does not establish authorization, intent, compromise, or causation.

| Label | Supplied time | Mock activity |
| --- | --- | --- |
| FACT | 09:14 | Sign-in from a new device |
| FACT | 09:19 | Administrator role assigned |
| FACT | 09:26 | Customer export started |
| FACT | 09:41 | Role revoked |

**FACT — Evidence quality:** The identity log clock is verified; the export event arrives four minutes late; the device identifier is unavailable. The source gives no date, timezone, export completion, record count, or revocation initiator.

**FACT — Critical path:** Marcos creates a case around the role assignment, filters by user and resource, expands to the associated session, follows the sign-in/change/export/revocation sequence, marks one inference, preserves source events, and exports a hashed package.

**ASSUMPTION — Investigation objective:** Establish which relationships the records support and whether the administrative change is relevant to the export, without treating temporal proximity as proof.

**OPEN QUESTION — Security Analysts:** What inference is Marcos expected to mark? The challenge leaves its content unspecified.

## 6. Jobs To Be Done

These are **ASSUMPTION** statements synthesized from the brief, not interview quotations or research findings.

- **ASSUMPTION — Main job:** When an administrator role assignment occurs shortly before a suspicious export, I want to trace the relevant activity across authorized systems and preserve its evidence, so I can produce a defensible account of the incident and its uncertainties.
- **ASSUMPTION — Scope:** When I begin investigating, I want to establish the case boundary and preservation settings, so I can focus the investigation and retain relevant evidence.
- **ASSUMPTION — Explore:** When many records could be relevant, I want to narrow them precisely and understand the active query, so I can assess what the results include and exclude.
- **ASSUMPTION — Reconstruct:** When records use inconsistent identities or timing, I want to evaluate their relationships and limitations, so I can avoid unsupported conclusions.
- **ASSUMPTION — Record:** When I interpret an event, I want to distinguish my interpretation from observations, so a reviewer can understand the basis of my conclusion.
- **ASSUMPTION — Deliver:** When I finish gathering findings, I want to export verifiable evidence, so another party can assess the case record.

## 7. Functional Requirements

Every entry below is an explicit **FACT** from the challenge. Splitting compound requirements does not add functionality.

| ID | Explicit requirement | Challenge section |
| --- | --- | --- |
| FR-01 | Start a case with scope and preservation settings. | Required experience |
| FR-02 | Support fast, precise event filtering by actor, action, resource, time, and source; keep query state visible. | Product problem; Required experience; Requirements |
| FR-03 | Filter by user and resource, then expand to the associated session. | Critical path |
| FR-04 | Trace relationships and link related sessions and administrative actions. | Product problem; Required experience |
| FR-05 | Connect sign-in, role change, export, and revocation in a sequence view. | Critical path |
| FR-06 | Save findings and preserve source events. | Required experience; Critical path |
| FR-07 | Keep raw events immutable. | Requirements |
| FR-08 | Display event source, ingestion time, and clock quality. | Requirements |
| FR-09 | Distinguish observed evidence, analyst notes, and inference; support marking an inference. | Requirements; Critical path |
| FR-10 | Record case access, evidence additions, and export integrity. | Requirements |
| FR-11 | Export a verifiable, hashed case/evidence package. | Required experience; Critical path |
| FR-12 | Restrict search to sources within the investigator's authorization. | Constraints |
| FR-13 | Make data gaps visible, including documented retention gaps. | Product problem; Constraints; Deliverable |
| FR-14 | Preserve original timestamps when converting timezones. | Constraints |
| FR-15 | Cover Investigation Overview, Event Explorer, Activity Reconstruction, and Evidence Package. | Screens and states |
| FR-16 | Ultimately deliver four desktop screens showing evidence, inference, and data-gap states. | Deliverable |

**FACT — States worth considering:** A saved query returning too many records is explicitly included. Saved-query creation, management, sharing, and remediation behavior are not specified.

**OPEN QUESTION — Product / Engineering:** What does each requirement mean operationally, especially preservation settings, linking, query performance, and package verification?

## 8. Core Product Areas

**FACT:** The challenge names all four areas. The responsibility summaries below are **ASSUMPTION** mappings of its requirements, not an approved information architecture.

| Area | Provisional purpose and responsibilities |
| --- | --- |
| Investigation Overview | **ASSUMPTION:** Establish the case context, scope, and preservation settings; orient the analyst to the investigation and known limitations. |
| Event Explorer | **ASSUMPTION:** Narrow authorized events using precise filters and visible query state; expose source and timing quality; support examining relevant evidence. |
| Activity Reconstruction | **ASSUMPTION:** Examine relationships among actors, sessions, administrative actions, and export activity; distinguish observation from interpretation and acknowledge uncertain ordering. |
| Evidence Package | **ASSUMPTION:** Bring saved evidence and interpretations into a verifiable export with the required integrity record. Exact contents remain unresolved. |

**DESIGN DECISION — Deferred:** Navigation, boundaries between areas, information hierarchy, interactions, and placement of shared responsibilities require later human approval.

## 9. Important Data Entities

This is a conceptual vocabulary, not a database schema or UI specification. **FACT** entries are concepts present in the challenge; their fields, cardinality, and implementation are unspecified.

| Entity | Status and relevance |
| --- | --- |
| Case | **FACT:** Investigation container with scope and preservation settings; access is recorded. |
| Actor | **FACT:** Filtering and relationship concept; identifiers may differ between systems. |
| User | **FACT:** A filter used in the critical path. Its equivalence to an actor is unspecified. |
| Administrator | **FACT:** A role is assigned and later revoked. **ASSUMPTION:** Treat this as role context rather than assuming a separate person or entity type. |
| Event | **FACT:** Immutable source record used as evidence. |
| Timestamp | **FACT:** Original timestamps must survive conversion; ingestion time and clock quality matter. |
| Session | **FACT:** Related activity can be expanded and linked through a session. |
| Device | **FACT:** Relevant to the sign-in; the sample lacks its identifier. |
| Resource | **FACT:** An event-filter dimension. Concrete resource types are unspecified. |
| Source System | **FACT:** Logs span systems; event source is displayed and source access is authorized. |
| Evidence | **FACT:** Observed material is preserved; additions are recorded. |
| Inference | **FACT:** Analyst interpretation distinguished from observed evidence. |
| Analyst Note | **FACT:** Separately distinguished from observation and inference. |
| Export | **FACT:** Customer export activity under investigation. Completion is not supplied. |
| Evidence Package | **FACT:** Hashed, verifiable investigation output; distinct from the customer export. |
| Query / Saved Query | **FACT:** Query state is visible; a saved query may return excessive records. |
| Role Assignment / Revocation | **FACT:** Administrative actions in the supplied sequence. |
| Data Gap / Clock Quality | **FACT:** Evidence limitations the investigation must expose. |
| Case Audit Record | **ASSUMPTION:** A conceptual name for the required record of access, additions, and export integrity; no storage model is implied. |

**OPEN QUESTION — Engineering:** How do identities, resources, events, and sessions relate across supported sources, and which relationships are authoritative?

## 10. Constraints

- **FACT — Challenge:** Raw records remain immutable; investigation must not alter source logs.
- **FACT — Challenge:** Search is limited to authorized sources.
- **FACT — Challenge:** Retention windows can leave documented gaps.
- **FACT — Challenge:** Timezone conversion cannot replace original timestamps.
- **FACT — Challenge:** Evidence, notes, and inference remain distinguishable.
- **FACT — Challenge:** Source, ingestion time, and clock quality must be displayed.
- **FACT — Challenge:** Case access, evidence additions, and export integrity must be recorded; the package must be hashed and verifiable.
- **FACT — Challenge:** The target is desktop web and the eventual deliverable is four screens. The page labels difficulty as Hard and effort as four hours plus; this is challenge metadata, not an agreed project deadline.
- **FACT — Challenge:** The palette, font pairing, and visual resources are optional. They establish no approved visual direction.
- **FACT — Project instructions:** Phase 01 is documentation only. Subsequent stages follow AGENTS.md with human ownership of product and UX decisions, read-only phase audits, later responsive validation at 1440/1280/1024/768/390, and a WCAG 2.2 AA target. These are project rules, not challenge-derived requirements.

**OPEN QUESTION — Compliance / Legal / Engineering:** Which retention, preservation, audit, and verification policies apply? No legal admissibility guarantee, hash algorithm, signature scheme, or chain-of-custody protocol is specified.

## 11. Edge Cases

All six cases are explicitly supported by the challenge. Consequences below are provisional reasoning.

| Edge case | Source-supported fact | Potential consequence |
| --- | --- | --- |
| Mismatched actor identifiers | **FACT:** Actor identifiers differ across systems. | **ASSUMPTION:** Records could be incorrectly merged or separated. |
| Late-arriving events | **FACT:** Events may arrive late; sample export arrival is four minutes late. | **ASSUMPTION:** The available case record may change after initial review. |
| Clock drift | **FACT:** Drift can change sequence order. | **ASSUMPTION:** Apparent order could be mistaken for reliable chronology. |
| Overly broad queries | **FACT:** A saved query returns too many records. | **ASSUMPTION:** Relevant evidence could be difficult to locate or completeness misunderstood. |
| Missing device information | **FACT:** The sample device identifier is unavailable. | **ASSUMPTION:** Device-level attribution may remain unresolved. |
| Retention / data gaps | **FACT:** Retention windows may leave documented gaps. | **ASSUMPTION:** Absence of a record could be mistaken for absence of activity. |

**OPEN QUESTION — Engineering / Security Analysts:** How are these conditions detected, documented, and assessed today? No automatic correction or recovery behavior is prescribed.

## 12. Known Information

- **FACT:** The primary scenario concerns Marcos, an administrator role assignment, and a subsequent large customer export.
- **FACT:** Investigation spans actors and systems with inconsistent identifiers, timing, and quality.
- **FACT:** The sample sequence includes sign-in, assignment, export start, and revocation.
- **FACT:** The identity clock is verified, export ingestion is delayed, and the device identifier is unavailable.
- **FACT:** The required experience covers case setup, filtering, relationship reconstruction, saved findings, and evidence export.
- **FACT:** Original evidence and timestamps are protected; interpretation and gaps must remain visible.
- **FACT:** Search authorization, investigation audit records, and export verification are required.
- **FACT:** Four desktop areas are named; optional styling resources are not mandatory.

## 13. UX Assumptions

- **ASSUMPTION A1 — High risk:** Available records contain enough trustworthy relationships to investigate across systems without guessing identity equivalence.
- **ASSUMPTION A2 — High risk:** Preservation remains meaningful when source retention expires; its actual mechanism is unknown.
- **ASSUMPTION A3 — High risk:** Analysts can assess chronology uncertainty if timing provenance is available; available precision and tolerances are unknown.
- **ASSUMPTION A4 — High risk:** Intended recipients can verify and interpret the exported package; their tools and criteria are unknown.
- **ASSUMPTION A5:** Marcos has sufficient domain knowledge to distinguish a role recipient from the actor who assigned it.
- **ASSUMPTION A6:** Narrowing the case is an iterative activity; the frequency of revisiting earlier findings is unknown.
- **ASSUMPTION A7:** The four named areas can support the required work coherently; their navigation and responsibility boundaries remain unvalidated.
- **ASSUMPTION A8:** Accessibility needs and different levels of query expertise will affect later interaction design; no participant evidence is available.

## 14. Open Questions

| Stakeholder | Questions |
| --- | --- |
| Security Analysts | **OPEN QUESTION:** What makes the assignment suspicious? Which links are sufficient to support an inference? How are alternative explanations and unresolved identities handled? What makes a case ready for review? |
| Product | **OPEN QUESTION:** Who consumes the case? What is the intended investigation boundary? Is saved-query management in scope? What qualitative outcome takes priority? |
| Engineering | **OPEN QUESTION:** Which sources and identifiers exist? What clock-quality metadata is reliable? How are late events detected? What does preservation retain? How are large result sets handled? Which package format and integrity checks are feasible? |
| Compliance | **OPEN QUESTION:** Which retention and audit policies apply? What must access and evidence-addition records contain? How should known gaps be documented? |
| Legal | **OPEN QUESTION:** What evidentiary or disclosure expectations apply to the intended use? Are sensitive customer data or preservation obligations relevant? What language avoids overstating certainty or admissibility? |
| Security Operations | **OPEN QUESTION:** How are search permissions determined? Who owns escalation and case review? How is a completed package handled? Does newly arriving evidence require reassessment after export? |

## 15. Initial Product Success Criteria

These are **ASSUMPTION** proposals for qualitative evaluation, not measured outcomes, numeric targets, or approved acceptance criteria.

- **ASSUMPTION:** An analyst can establish a comprehensible case scope and preservation intent.
- **ASSUMPTION:** The analyst can explain what the active query includes and excludes within authorized sources.
- **ASSUMPTION:** The case account connects relevant activity without claiming unsupported identity equivalence or causation.
- **ASSUMPTION:** An analyst or reviewer can distinguish source observations, notes, inference, and unresolved gaps.
- **ASSUMPTION:** Timing provenance supports an honest explanation of ordering and uncertainty.
- **ASSUMPTION:** Relevant source evidence stays intact through investigation and package production.
- **ASSUMPTION:** The intended reviewer can verify the exported package and understand the recorded access, additions, and integrity information.

## 16. Risks

| Provisional risk | Assumption that could cause it | Needed clarification |
| --- | --- | --- |
| **ASSUMPTION — High:** Wrong actor attribution | Different identifiers can be safely equated. | Authoritative correlation methods and ambiguity rules. |
| **ASSUMPTION — High:** False causal narrative | Displayed times establish a reliable order or explain intent. | Clock quality, arrival handling, and evidentiary standards. |
| **ASSUMPTION — High:** Misleading completeness | Missing records mean no activity occurred. | Retention coverage, authorization boundaries, and other gaps. |
| **ASSUMPTION — High:** Evidence becomes unavailable | Preservation automatically outlives source retention. | Preservation semantics and storage responsibilities. |
| **ASSUMPTION — High:** Overstated trust in export | Hashing proves truth, completeness, or legal admissibility. | Verification scope and recipient expectations. |
| **ASSUMPTION — Medium:** Important records overlooked | Broad-query results are manageable and complete. | Result limits and analyst review practices. |
| **ASSUMPTION — Medium:** Workflow mismatch | The assumed user expertise and area responsibilities are correct. | Analyst practice and human review before IA. |

## 17. Phase 01 Summary

**FACT — What we know:** The brief defines a security analyst's investigation, a supplied event sequence, four required product areas, explicit evidence protections, and six evidence/query edge cases. These are challenge inputs, not research findings.

**OPEN QUESTION — What we do not know:** Actual analyst practices, authoritative identity links, source capabilities, preservation semantics, operational scale, package recipients, verification procedures, and policy obligations remain unresolved.

**ASSUMPTION — Highest risk:** Identity correlation, reliable chronology, durable preservation, and meaningful package verification are possible with the available systems. These need validation before dependent solutions are selected.

**DESIGN DECISION — Deferred:** Do not yet choose information architecture, navigation, query controls, relationship visualization, automatic linking, uncertainty presentation, export format, visual direction, components, or responsive behavior. Do not classify the activity as malicious or assume the export completed.

### HUMAN REVIEW REQUIRED — Completed for Phase 01

**FACT — Approval record:** The Product Designer approved Phase 01. The review checklist below is retained as the record of what was presented for approval; its questions are no longer a pending Phase 01 approval request. Stakeholder questions elsewhere in this document remain unresolved.

Original Phase 01 review checklist:

- **OPEN QUESTION:** Is the product-problem framing and primary-user interpretation faithful to the challenge?
- **OPEN QUESTION:** Are the main and supporting JTBD suitable provisional formulations?
- **OPEN QUESTION:** Is the explicit requirement inventory complete, with the proposed area responsibilities clearly remaining unapproved?
- **OPEN QUESTION:** Are A1–A4 the highest-priority assumptions to examine, and which stakeholder questions should be addressed first?
- **OPEN QUESTION:** Are the proposed qualitative success criteria and risk framing appropriate?
- **OPEN QUESTION:** Is the boundary between challenge facts, project constraints, assumptions, and deferred decisions clear enough to authorize Phase 02?

**DESIGN DECISION — Phase boundary:** Phase 01 is approved and complete. Phase 02 remains on hold under the Product Designer's explicit instruction and requires a separate instruction to begin. Approval of this brief does not approve an information architecture, UI, visual direction, or implementation approach.
