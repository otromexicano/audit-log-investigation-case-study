# PHASE 02 — UX ASSUMPTIONS

Status: Phase 02 approved by the Product Designer. Phase 03 is explicitly on hold.

## Purpose and evidence boundaries

Document what remains unknown before product and design decisions are made.

**FACT — Sources:** This register uses the approved [Phase 01 brief](BRIEF.md) and the project rules in [AGENTS.md](../AGENTS.md). References below point to sections of that brief. Challenge statements describe a fictional scenario; they are not validated user research. No interviews, usability results, analytics, customer feedback, or engineering verification were supplied for this phase.

**FACT — Phase authorization:** The current instruction authorizes Phase 02, superseding the earlier hold recorded in the brief. It does not authorize subsequent design stages.

**ASSUMPTION:** Each numbered entry is a testable proposition, even when a related capability is explicitly required. Evidence of a requirement does not establish how users behave or how the system implements it.

**DESIGN DECISION — Deferred:** Design implications identify decisions that validation could influence. They do not approve features, information architecture, data schemas, interactions, UI, or wireframes. Figma is outside this phase.

**OPEN QUESTION:** Which provisional assumptions will the human designer accept for this portfolio challenge, and with what limits? Recommendations appear at the end.

Priority is a proposed validation order, not a confidence score:

- **Critical:** Could invalidate the investigation or substantially change product architecture; resolve or explicitly bound before dependent decisions.
- **High:** Could materially change workflow, scope, or comprehension; validate before selecting dependent UX solutions.
- **Medium:** Could change efficiency, supporting behavior, or content; validate before detailed design.
- **Low:** Limited consequence and easily reversible. No entry currently meets that threshold given the unresolved baseline.

All validation methods below are proposed future activities, not activities already performed. Security and compliance entries identify questions for responsible stakeholders; they assert no legal or regulatory requirements beyond the brief.

## 1. USER

### U-01 — Analyst expertise

**ASSUMPTION:** The primary analyst can independently investigate a suspicious access event but is not necessarily an expert in query languages or data engineering.

**Evidence:** Brief §2 names a security analyst and explicitly leaves seniority and query expertise unknown. No skill assessment is available.

**Why it matters:** Expected expertise determines how much interpretation and query construction the product can reasonably require.

**Risk if wrong:** Less experienced analysts may misinterpret records; experienced analysts may find the investigation unnecessarily constrained.

**Design implication:** Could influence the supported expertise range and balance between guided and expressive investigation capabilities.

**Validation method:** Research and security operations recruit analysts across relevant seniority levels; observe them working through an existing, sanitized investigation and identify tasks requiring help. Product confirms the intended primary segment.

**Priority:** High.

### U-02 — Security knowledge

**ASSUMPTION:** Analysts understand role assignment, session activity, and export events, including the distinction between the person assigning a role and its recipient.

**Evidence:** Brief §5 requires investigation of these events; §13 A5 explicitly treats this knowledge as an assumption.

**Why it matters:** Correct interpretation depends on distinguishing who acted, who was affected, and what a record actually establishes.

**Risk if wrong:** Analysts could attribute the role assignment or export to the wrong person, or treat sequence as proof of compromise.

**Design implication:** Could influence terminology definitions, attribution semantics, and contextual explanation requirements.

**Validation method:** Ask analysts to interpret sanitized records with different initiators and recipients and explain what can and cannot be concluded. Research records misunderstandings; security specialists assess interpretations.

**Priority:** High.

### U-03 — Investigation frequency

**ASSUMPTION:** Access investigations recur often enough that analysts retain the basic process between cases.

**Evidence:** None. Brief §2 leaves workload and experience unknown; one scenario does not establish frequency.

**Why it matters:** Frequency affects learnability, recall, and the value of repeatable investigation practices.

**Risk if wrong:** Occasional users could struggle to resume the process, while frequent users could lack efficient repetition.

**Design implication:** Could influence support for relearning, reusable investigation context, and recurring work.

**Validation method:** Interview analysts about recent case frequency and compare with authorized, aggregated case activity or operational records. Distinguish individual usage from team totals.

**Priority:** Medium.

### U-04 — Familiarity with audit logs

**ASSUMPTION:** Analysts can interpret familiar source logs but need additional context for unfamiliar source schemas and inconsistent identifiers.

**Evidence:** Brief §§1–2 describe differing identifiers and data quality; the proposed familiarity boundary has no user evidence.

**Why it matters:** Source-specific knowledge affects whether normalized data is sufficient or original event context is needed.

**Risk if wrong:** Analysts may overlook source-specific meanings or lose essential detail through excessive normalization.

**Design implication:** Could influence the relationship between normalized event information, source vocabulary, and access to original records.

**Validation method:** Observe analysts interpreting equivalent events from familiar and unfamiliar supported sources. Engineering explains normalization losses; research identifies where source context changes interpretation.

**Priority:** High.

### U-05 — Technical terminology

**ASSUMPTION:** Analysts do not consistently use “actor,” “user,” “principal,” “session,” and “resource” with identical meanings across systems.

**Evidence:** Brief §9 leaves actor/user equivalence unspecified and §1 identifies inconsistent identifiers. Terminology comprehension has not been studied.

**Why it matters:** Ambiguous terms can change the scope of a search or the interpretation of a relationship.

**Risk if wrong:** A vocabulary strategy could either obscure useful distinctions or add needless explanation for well-understood concepts.

**Design implication:** Could influence the product vocabulary and whether source-specific terms require explicit mappings.

**Validation method:** Research asks analysts to explain terms using actual supported-source examples; product and engineering compare those meanings with source schemas and document conflicts.

**Priority:** High.

### U-06 — Workload and interruption

**ASSUMPTION:** Analysts handle competing work and may interrupt an investigation before reaching a conclusion.

**Evidence:** None. Brief §2 explicitly leaves workload unknown.

**Why it matters:** Interruptions create a need to recover scope, reasoning, and unfinished work without relying on memory.

**Risk if wrong:** The product could lose essential context or invest in recovery behavior that is not important to the target workflow.

**Design implication:** Could influence persistence boundaries and how unfinished investigation work is represented conceptually.

**Validation method:** Use analyst diaries and contextual interviews to examine interruptions, concurrent cases, and recovery practices; compare with authorized session activity if available.

**Priority:** High.

### U-07 — Collaboration

**ASSUMPTION:** One analyst leads the case, but another person may review findings or receive a handoff asynchronously.

**Evidence:** Brief §§4 and 14 leave case recipients, ownership, and review unresolved. Recorded case access is required, but does not prove a collaboration model.

**Why it matters:** Team structure affects ownership, provenance, access, and interpretation of another analyst’s work.

**Risk if wrong:** A single-owner model could fail for shared investigations; unnecessary collaborative editing could expand scope and complexity.

**Design implication:** Could influence case ownership, reviewer roles, attribution, and whether concurrent editing is needed.

**Validation method:** Map a recent case with analysts and security operations, including reviewers and recipients. Product confirms responsibility boundaries; engineering assesses concurrent work requirements only if observed.

**Priority:** High.

## 2. INVESTIGATION BEHAVIOR

### B-01 — How investigations begin

**ASSUMPTION:** Analysts begin with an identifiable suspicious event and enough context to define an initial, revisable scope.

**Evidence:** Brief §5 starts the critical path around the role assignment. It does not specify the alert, referral, or discovery mechanism, or establish that other investigations begin this way.

**Why it matters:** Starting information determines what can be known at case creation.

**Risk if wrong:** Investigations beginning with a person, report, or vague time range may not fit the assumed entry conditions.

**Design implication:** Could influence case initiation requirements and whether an anchor event is optional.

**Validation method:** Review sanitized recent cases with analysts and classify their actual starting artifacts. Product defines which entry conditions this product must support.

**Priority:** High.

### B-02 — How analysts search

**ASSUMPTION:** Analysts start with known identifiers or event attributes and refine searches repeatedly rather than composing one definitive query.

**Evidence:** Brief §5 specifies user/resource filtering followed by session expansion; §13 A6 proposes iterative narrowing. No observed search behavior is supplied.

**Why it matters:** Iteration requires analysts to understand how each change affects scope and results.

**Risk if wrong:** A workflow centered on refinement may poorly support analysts who primarily use established queries or complex query expressions.

**Design implication:** Could influence query expressiveness, query reuse, and recovery of prior search context.

**Validation method:** Observe investigation searches in current tools and, where authorized, analyze query sequences. Identify starting terms, revisions, failures, and reuse without assuming the existing tool defines the desired behavior.

**Priority:** High.

### B-03 — How analysts narrow scope

**ASSUMPTION:** Analysts temporarily narrow by actor, resource, time, and source, then widen scope when new evidence challenges their initial hypothesis.

**Evidence:** Brief §7 FR-02 requires these filter dimensions and §13 A6 assumes iteration. Re-expansion behavior remains unvalidated.

**Why it matters:** Investigative scope must not silently become a claim that excluded activity is irrelevant.

**Risk if wrong:** Useful evidence may be excluded, or excessive scope revision support may complicate a simpler process.

**Design implication:** Could influence the distinction between case scope and exploratory query scope, and whether scope changes need a record.

**Validation method:** Have analysts reconstruct a case where the initial explanation changed. Research documents narrowing and expansion decisions; product clarifies whether they alter formal case scope.

**Priority:** High.

### B-04 — How analysts correlate activity

**ASSUMPTION:** Analysts assess provenance and identifier quality before accepting a relationship, and can leave relationships unresolved when evidence is insufficient.

**Evidence:** Brief §§5, 7, and 11 require relationship tracing, distinguish inference, and describe mismatched identifiers. The analyst’s actual acceptance criteria are unknown.

**Why it matters:** A relationship between events is not automatically verified attribution or causation.

**Risk if wrong:** Analysts may accept weak links as facts or be unable to use a product that relies on specialist correlation judgment.

**Design implication:** Could influence relationship provenance, analyst confirmation, and treatment of disputed or unresolved links.

**Validation method:** Ask analysts to assess sanitized examples with strong, weak, and conflicting links and explain their reasoning. Security specialists and engineering compare those criteria with available metadata.

**Priority:** Critical.

### B-05 — How analysts preserve evidence

**ASSUMPTION:** Analysts preserve selected relevant events while exploring, including evidence that challenges their current explanation.

**Evidence:** Brief §7 FR-06 requires preservation and saved findings. Selection timing and treatment of contradictory evidence are unspecified.

**Why it matters:** Preservation practice affects what survives to support or qualify a conclusion.

**Risk if wrong:** Evidence may expire before selection, or a selectively preserved record may overstate the case.

**Design implication:** Could influence whether preservation is selective, scope-based, or both, and its relationship to exploration.

**Validation method:** Review preservation decisions from sanitized cases with analysts and evidence owners. Compare evidence selected during exploration with final packages, including omitted contradictory records and retention exposure.

**Priority:** Critical.

### B-06 — How analysts document conclusions

**ASSUMPTION:** Analysts need to connect conclusions to supporting events while recording alternative explanations and unresolved gaps separately from observations.

**Evidence:** Brief §7 FR-09 requires distinctions among observations, notes, and inference. The expected structure of a conclusion is not specified.

**Why it matters:** Reviewers must understand the reasoning and limits of a conclusion.

**Risk if wrong:** Documentation could be too burdensome or insufficient for the actual review decision.

**Design implication:** Could influence relationships between findings, source evidence, notes, and qualifications without prescribing their presentation.

**Validation method:** Examine sanitized case reports with analysts and recipients; ask recipients to identify support, uncertainty, and missing context. Product confirms the minimum useful conclusion record.

**Priority:** High.

### B-07 — How analysts return later

**ASSUMPTION:** Returning analysts need their previous scope and reasoning preserved while being able to distinguish newly available data from what they previously reviewed.

**Evidence:** Brief §7 mentions saved queries and findings; §11 includes late arrivals. Resumption behavior and version expectations are unspecified.

**Why it matters:** A repeated query may produce a different record set without any deliberate scope change.

**Risk if wrong:** Analysts may mistake new results for previously assessed evidence or lose the basis of an earlier conclusion.

**Design implication:** Could influence investigation persistence, review checkpoints, and the distinction between live results and preserved evidence.

**Validation method:** Observe analysts resuming interrupted cases and discuss a late-arrival scenario. Engineering tests whether prior result membership or reviewed state can be recovered; product defines expected continuity.

**Priority:** High.

## 3. DATA

### D-01 — Event volume

**ASSUMPTION:** Scoped searches can reduce the available corpus to reviewable results with operationally acceptable latency and explicit result limits.

**Evidence:** Brief §1 says logs may contain millions of records; §11 includes an overly broad saved query. Neither actual volumes nor performance targets are provided.

**Why it matters:** Scale determines whether an analyst can inspect the relevant evidence and understand result completeness.

**Risk if wrong:** Slow or truncated results could prevent investigation or be mistaken for a complete search.

**Design implication:** Could influence the query execution model, progressive retrieval, and explicit handling of incomplete results.

**Validation method:** Engineering benchmarks representative source volumes and query shapes; analysts evaluate acceptable waiting and review effort. Product agrees performance and completeness criteria from that evidence rather than inventing targets.

**Priority:** Critical.

### D-02 — Data freshness

**ASSUMPTION:** Source and ingestion metadata can identify late arrivals sufficiently to explain changes in investigation results.

**Evidence:** Brief §5 supplies one export event arriving four minutes late; §7 FR-08 requires ingestion time. This does not establish a universal delay or a source completeness guarantee.

**Why it matters:** An analyst needs to know whether the available record could still change.

**Risk if wrong:** The product could imply completeness or a stable sequence while relevant data remains unreceived.

**Design implication:** Could influence freshness semantics, reassessment of findings, and case or package version behavior.

**Validation method:** Engineering measures per-source ingestion delays and identifies available ingestion-status metadata. Analysts assess cases with arrivals after review or export; product agrees how such changes affect a case.

**Priority:** Critical.

### D-03 — Timestamp reliability

**ASSUMPTION:** Available clock-quality metadata lets analysts establish at least partial ordering while retaining uncertainty where clocks cannot be compared reliably.

**Evidence:** Brief §§5 and 11 identify a verified identity clock, late ingestion, and possible clock drift. Precision, timezone, and drift tolerances are unknown; original timestamps must be preserved under §7 FR-14.

**Why it matters:** The suspected connection depends on chronology, but ingestion delay and event-clock error are different conditions.

**Risk if wrong:** An apparently ordered sequence could support a false narrative about the role change and export.

**Design implication:** Could influence ordering semantics, treatment of ambiguous sequence, and separation of original time from derived representations.

**Validation method:** Engineering audits sample source timestamp fields, timezone handling, precision, and clock-quality provenance. Analysts interpret deliberately ambiguous sequences; security specialists assess whether conclusions respect the uncertainty.

**Priority:** Critical.

### D-04 — Actor identity reliability

**ASSUMPTION:** Some cross-source identifiers have authoritative mappings, while ambiguous identities can remain distinct until supported by evidence.

**Evidence:** Brief §§1 and 11 state that identifiers differ; §13 A1 explicitly leaves trustworthy relationships unverified. No identity mapping service or universal identifier is specified.

**Why it matters:** Reliable attribution is foundational to narrowing and reconstruction.

**Risk if wrong:** Different people or service identities could be merged, or one actor’s activity could be fragmented beyond investigation.

**Design implication:** Could influence the identity model, provenance of mappings, and treatment of conflicting attribution.

**Validation method:** Engineering profiles supported-source identifiers and tests mappings against authoritative identity records, including renamed accounts, service identities, and collisions. Analysts review ambiguous examples; security owners define acceptable attribution evidence.

**Priority:** Critical.

### D-05 — Session availability

**ASSUMPTION:** The scenario’s role assignment can be linked to a session using available records, although session identifiers need not exist consistently across every source.

**Evidence:** Brief §7 FR-03 requires expansion to an associated session. It supplies neither a session identifier nor the linking mechanism.

**Why it matters:** A required step depends on a relationship the supplied mock data does not substantiate.

**Risk if wrong:** The critical path could require an unsupported link or fail when a session is missing or ambiguous.

**Design implication:** Could influence whether session expansion is direct, qualified, or unavailable and how reconstruction proceeds without it.

**Validation method:** Engineering traces the role-change event through representative authentication and application records. Analysts assess missing, reused, and conflicting session examples; product clarifies the minimum viable scenario.

**Priority:** Critical.

### D-06 — Device availability

**ASSUMPTION:** An investigation can produce a qualified finding without device-level attribution when the device identifier is unavailable.

**Evidence:** Brief §5 explicitly lacks a device identifier while retaining the investigation objective. No alternative device identifier or recovery method is supplied.

**Why it matters:** Missing device data may limit what the case can establish without preventing all useful investigation.

**Risk if wrong:** The product may imply device attribution without support or permit a conclusion that the recipient considers insufficient.

**Design implication:** Could influence evidence sufficiency criteria and how unresolved device attribution affects case readiness.

**Validation method:** Analysts and recipients assess what conclusions remain supportable in the supplied missing-device scenario; engineering confirms which device fields can actually be absent or recovered.

**Priority:** High.

### D-07 — Cross-system correlation

**ASSUMPTION:** Supported sources expose enough compatible actor, resource, action, session, and timing context to relate relevant events with documented provenance.

**Evidence:** Brief §7 FR-04/05 requires linking and reconstruction; §§9 and 14 leave schemas and authoritative relationships unresolved. A required outcome does not establish connector capability.

**Why it matters:** Even correct actor mapping does not prove that a particular role change, session, and export belong to one related activity sequence.

**Risk if wrong:** Reconstruction could depend on unverifiable joins or require additional data integrations beyond the challenge scope.

**Design implication:** Could influence supported-source scope, event normalization, and the boundary between direct links and analyst inference.

**Validation method:** Engineering performs a field-level feasibility walkthrough across representative sources; analysts reconstruct a sanitized case from those records alone and identify unsupported joins. Product confirms acceptable coverage limits.

**Priority:** Critical.

### D-08 — Retention gaps

**ASSUMPTION:** Source coverage metadata can identify at least some retention gaps and distinguish them from a search that simply found no matching events.

**Evidence:** Brief §7 FR-13 and §10 require visible documented retention gaps. Their detection mechanism and completeness are not supplied.

**Why it matters:** Absence of results must not be treated as proof that no activity occurred.

**Risk if wrong:** The product could mislabel an unknown period as covered or assign a retention explanation without evidence.

**Design implication:** Could influence coverage metadata and distinctions among known gaps, unknown coverage, and no matches within known coverage.

**Validation method:** Engineering compares retention configuration, ingestion coverage, and actual source availability using known gap examples. Analysts interpret the resulting coverage statements; security checks disclosure boundaries for inaccessible sources.

**Priority:** Critical.

## 4. PRODUCT

### P-01 — Case creation

**ASSUMPTION:** Analysts can set a useful initial scope and preservation intent when creating a case, then revise them as understanding develops.

**Evidence:** Brief §7 FR-01 requires scope and preservation settings. Required inputs, defaults, editability, and policy controls are unspecified.

**Why it matters:** Early commitments may be made before the analyst knows which evidence matters.

**Risk if wrong:** Case creation could delay investigation or allow changes that invalidate preservation expectations.

**Design implication:** Could influence the case lifecycle, minimum creation information, and governance of scope and preservation changes.

**Validation method:** Analysts walk through case initiation using recent examples; product defines minimum case information; engineering and policy owners clarify which settings can change and with what effect.

**Priority:** High.

### P-02 — Saved investigations

**ASSUMPTION:** A persistent case retains scope, findings, evidence references, and reasoning; a saved query alone is insufficient to resume the investigation.

**Evidence:** Brief §7 requires cases, saved findings, and preservation, and mentions saved queries. It does not specify a separate saved-investigation feature or persistence contract.

**Why it matters:** Search criteria, result membership, evidence, and interpretation have different lifetimes.

**Risk if wrong:** Analysts could assume work is retained when only a query is saved, or the product could create unnecessary parallel containers.

**Design implication:** Could influence persistence boundaries and relationships among a case, saved query, live results, and preserved evidence.

**Validation method:** Analysts identify what must survive closing and reopening a case. Product defines the persistence contract; engineering tests which objects and versions can be restored, including after source data changes.

**Priority:** Critical.

### P-03 — Search behavior

**ASSUMPTION:** The search system can expose effective query scope and execution limits well enough for analysts to explain what a result set includes and excludes.

**Evidence:** Brief §7 FR-02 requires visible query state and FR-12 limits sources to authorized ones. Matching rules, time boundaries, result caps, and execution behavior remain unspecified.

**Why it matters:** Search results can only support an investigation if their scope is understood.

**Risk if wrong:** Analysts may treat partial, differently matched, or authorization-limited results as exhaustive.

**Design implication:** Could influence the search contract, time semantics, and representation of incomplete execution without selecting controls.

**Validation method:** Engineering documents actual matching, boundary, authorization, and limit behavior; analysts predict results for representative queries and compare predictions with controlled datasets. Product resolves consequential mismatches.

**Priority:** Critical.

### P-04 — Filtering

**ASSUMPTION:** Actor, action, resource, time, and source filters can be combined meaningfully across supported sources while preserving distinctions in source data.

**Evidence:** Brief §7 FR-02 requires these dimensions. AND/OR behavior, missing values, normalization, and source-specific values are unspecified.

**Why it matters:** Identical-looking filters may otherwise include different kinds of activity or exclude records with missing fields.

**Risk if wrong:** Relevant events could disappear silently or unrelated actions could be treated as equivalent.

**Design implication:** Could influence shared filter semantics and handling of unsupported or absent fields.

**Validation method:** Engineering tests combinations against known datasets with missing and conflicting values; analysts explain expected inclusion and exclusion. Product approves semantics only after discrepancies are understood.

**Priority:** High.

### P-05 — Evidence preservation

**ASSUMPTION:** Preserving selected source events retains their original content and provenance independently of subsequent source retention expiry.

**Evidence:** Brief §7 FR-06/07 requires preserved immutable events; §13 A2 explicitly leaves preservation after retention expiry unresolved. No storage mechanism is specified.

**Why it matters:** A saved reference may cease to provide evidence when the referenced source record disappears.

**Risk if wrong:** A case could appear preserved while its evidence is no longer recoverable or verifiable.

**Design implication:** Could influence whether preservation means retained content, references with explicit limits, or a policy-managed process, and the lifecycle of preserved evidence.

**Validation method:** Engineering traces preservation through source expiry, case reopening, and export in a controlled environment. Security and policy owners define retention and deletion constraints; product agrees exactly what preservation promises.

**Priority:** Critical.

### P-06 — Analyst notes

**ASSUMPTION:** Notes can be associated with case context or specific evidence and need attributable revision history when reasoning changes.

**Evidence:** Brief §7 FR-09 distinguishes notes from evidence and inference. Note attachment, editing, history, and audit requirements are unspecified.

**Why it matters:** Later readers need to understand who supplied context and whether it reflects the current interpretation.

**Risk if wrong:** Silent revisions could obscure earlier reasoning; excessive note governance could hinder routine work.

**Design implication:** Could influence note ownership, attachment relationships, revision behavior, and distinction from formal findings.

**Validation method:** Review sanitized note-taking practices with analysts and reviewers. Product and audit owners distinguish informal working notes from records requiring history; engineering evaluates that boundary.

**Priority:** High.

### P-07 — Inference

**ASSUMPTION:** An inference is an analyst-authored claim linked to supporting evidence and limitations, which can be revised without changing source observations.

**Evidence:** Brief §7 FR-09 requires marking an inference separately. Its content, authorship mechanism, structure, and lifecycle are not specified.

**Why it matters:** Interpretation must remain distinguishable from what source records directly establish.

**Risk if wrong:** An unsupported claim could gain the appearance of observed fact, or the product could impose an unsuitable reasoning structure.

**Design implication:** Could influence the inference model, attribution, evidence dependencies, and treatment of later conflicting evidence. It does not establish a requirement for automated inference.

**Validation method:** Analysts author and revise an inference from sanitized ambiguous records; reviewers identify its supporting observations and limitations. Product agrees the minimum record and whether any automated assistance is in scope.

**Priority:** Critical.

### P-08 — Export packages

**ASSUMPTION:** The intended recipient needs a self-contained package containing preserved source evidence, relevant reasoning, provenance, and documented limitations, plus a usable verification method.

**Evidence:** Brief §7 FR-11 requires a verifiable hashed package; §§13–14 leave recipient tools, criteria, contents, and format unknown.

**Why it matters:** Export success depends on whether a recipient can use and assess the package outside the analyst’s working context.

**Risk if wrong:** The output may be unreadable, omit essential context, expose unnecessary data, or fail the recipient’s verification process.

**Design implication:** Could influence the package boundary, recipient access, export versioning, and verification workflow without choosing a format or algorithm.

**Validation method:** Product identifies recipients; research reviews their actual handoff requirements; engineering produces a technical test package for recipients to inspect and verify. Security and policy owners assess permitted contents.

**Priority:** Critical.

## 5. SECURITY / COMPLIANCE

### S-01 — Immutability requirements

**ASSUMPTION:** Raw source records and preserved evidence content must remain unchanged, while corrections to interpretation or derived data can occur separately with provenance.

**Evidence:** Brief §7 FR-07 requires immutable raw events and FR-09 separates interpretation. The scope of immutability across copies, derived fields, and later corrections is unspecified.

**Why it matters:** Investigation records must support correction without silently rewriting the evidence on which earlier reasoning depended.

**Risk if wrong:** Editing derived information could inadvertently alter evidence, or an overly broad restriction could prevent legitimate corrections.

**Design implication:** Could influence boundaries between original records, derived representations, and versioned analyst content.

**Validation method:** Engineering maps data transformations and write paths. Security and policy owners define which records are immutable, which can change, and how corrections are recorded; test a correction without changing the original evidence.

**Priority:** Critical.

### S-02 — Auditability

**ASSUMPTION:** Required records of case access, evidence additions, and export integrity can be attributed to an identity and time and retained in a form usable by authorized reviewers.

**Evidence:** Brief §7 FR-10 requires these records. Required fields, retention, tamper protection, access meaning, and audit-reader permissions are unresolved.

**Why it matters:** A reviewer needs enough context to reconstruct relevant handling of a case.

**Risk if wrong:** An audit record could exist yet fail to explain who accessed or changed the case, or expose sensitive access information unnecessarily.

**Design implication:** Could influence the case audit model, reviewer permissions, and dependencies on identity and timestamp services.

**Validation method:** Security, audit, and policy owners define review questions and required audit events. Engineering traces a controlled access/addition/export sequence; reviewers assess whether the resulting record answers those questions.

**Priority:** Critical.

### S-03 — Evidence integrity

**ASSUMPTION:** Package recipients can compare received content against integrity metadata with an adequately trusted reference to detect changes within a defined verification scope.

**Evidence:** Brief §7 FR-11 requires hashing and verification. Brief §10 specifies no algorithm, signature scheme, chain-of-custody protocol, or admissibility guarantee.

**Why it matters:** “Verified” needs a defined meaning that recipients can reproduce and interpret.

**Risk if wrong:** Recipients may be unable to detect alteration or may overinterpret a successful integrity check as proof of source truth, completeness, or lawful conduct.

**Design implication:** Could influence verification scope, trust in integrity metadata, package provenance, and the language used for verification outcomes.

**Validation method:** Security and engineering define a threat model and verification procedure, then test changed evidence, missing files, and modified verification metadata. Recipients perform the checks and explain what each result establishes; legal/policy owners assess any intended evidentiary claims.

**Priority:** Critical.

### S-04 — Access permissions

**ASSUMPTION:** Authorization can be enforced consistently across search, saved cases, preserved evidence, collaboration, and export, including when a user’s access changes.

**Evidence:** Brief §7 FR-12 explicitly restricts search to authorized sources. Access to retained copies, cases, other analysts’ findings, and exports is not defined.

**Why it matters:** Preserving or sharing evidence may create access paths beyond the original source search.

**Risk if wrong:** Sensitive data could become accessible through a case or package, or needed evidence could disappear from an analyst’s view without an explainable policy.

**Design implication:** Could influence the authorization model, preservation ownership, export permissions, and treatment of restricted evidence without disclosing unauthorized source details.

**Validation method:** Security defines a source/case/evidence/export permission matrix, including revocation and reviewer access. Engineering tests each path; analysts and product assess the operational consequences of the resulting policy.

**Priority:** Critical.

### S-05 — Export traceability

**ASSUMPTION:** Each generated package needs a traceable relationship to the exporting actor, generation time, case state, included evidence, and integrity record.

**Evidence:** Brief §7 FR-10/11 requires export integrity recording and a hashed package. Package identifiers, history, recipient tracking, and re-export rules are unspecified.

**Why it matters:** A later review must be able to distinguish what was exported from what the case contains now.

**Risk if wrong:** Different packages could be confused, or later evidence and edits could be incorrectly attributed to an earlier export.

**Design implication:** Could influence export version identity, case-to-package relationships, and traceability boundaries after download.

**Validation method:** Audit owners and recipients define the questions a package record must answer. Engineering tests two exports separated by a case update; reviewers match each package to its originating state. Product separately confirms whether delivery or recipient tracking is required and feasible.

**Priority:** Critical.

## Highest-Risk Assumptions

**ASSUMPTION — Proposed architecture risk ranking:** These clusters could most significantly change the product architecture. The ranking is reasoned from the brief, not measured risk. All remain unresolved.

| Rank | Assumptions | Architecture question | Consequence if wrong | Validation or explicit boundary needed |
| --- | --- | --- | --- | --- |
| 1 | D-04, D-05, D-07, B-04 | What makes an identity or event relationship supportable? | The actor/session relationship model and required reconstruction path may be infeasible; additional integrations or unresolved relationships may be necessary. | Confirm authoritative fields and provenance; do not invent missing links to complete the sequence. |
| 2 | P-05, S-01, B-05 | What is preserved, where, and for how long? | A reference-based case may fail after source expiry; retained evidence may require a different storage, lifecycle, and policy model. | Establish preservation semantics and test survival after source expiry, with policy-defined limits. |
| 3 | S-04, U-07 | Who can access evidence after it enters a case or export? | Source-level search permissions may be insufficient for shared or retained evidence; ownership and authorization boundaries may need to change. | Define and test authorization across source, case, preserved content, export, and revocation. |
| 4 | D-02, D-03, D-08 | What can the product claim about chronology and coverage? | A single stable sequence or complete-result assumption may fail; reconstruction may need uncertain ordering and changing coverage. | Verify timing and coverage metadata; preserve unknowns where detection is unavailable. |
| 5 | P-02, B-07, P-07, S-05 | What persists, and which case state supports a claim or package? | A live query cannot necessarily reconstruct an earlier investigation; evidence, inference, and exports may need distinct version boundaries. | Define persistence and revision semantics using a resume/change/re-export scenario. |
| 6 | P-08, S-03, S-02 | What can the recipient verify, and against which trusted record? | Package contents, verification mechanisms, and audit dependencies could change substantially. | Identify recipients, define verification scope, and validate tamper detection and interpretation. |
| 7 | D-01, P-03, P-04 | Can searches produce interpretable, sufficiently complete results at relevant scale? | Search execution and retrieval may need a different architecture; synchronous exhaustive review may be unrealistic. | Benchmark representative queries and explicitly define matching, limits, and incomplete results. |

**OPEN QUESTION — Human designer / Product:** Which clusters can be explicitly bounded as fictional challenge conditions, and which need stakeholder answers before dependent architecture is explored?

## Traceability to Phase 01

| Brief §13 assumption | Phase 02 coverage |
| --- | --- |
| A1 — Trustworthy cross-system relationships | B-04, D-04, D-05, D-07 |
| A2 — Preservation beyond source retention | B-05, P-05, S-01 |
| A3 — Interpretable chronology uncertainty | D-02, D-03, B-04 |
| A4 — Recipient verification and interpretation | P-08, S-03, S-05 |
| A5 — Role initiator versus recipient knowledge | U-02, U-05 |
| A6 — Iterative narrowing and revisiting | B-02, B-03, B-07, P-02 |
| A7 — Coherence of four named product areas | Remains an OPEN QUESTION for the later IA phase; P-01–P-08 expose responsibility uncertainties without allocating them to screens. |
| A8 — Query expertise and accessibility needs | U-01 addresses query expertise. Specific accessibility needs remain an OPEN QUESTION for recruitment and later validation; no ability profile is assumed. The project’s WCAG 2.2 AA target remains a requirement regardless of participant evidence. |

## Phase 02 read-only audit

**FACT — Audit scope:** Documentation review against the user’s Phase 02 request, the approved brief, and AGENTS.md. This is not user validation, design approval, or an accessibility conformance audit.

- **Critical findings:** None identified in the documentation review. Critical-priority assumptions remain unresolved; their priority is distinct from audit severity.
- **Major findings:** None identified. All 35 requested topics have individual assumptions with evidence, UX significance, failure risk, conditional design implication, validation method, and priority.
- **Minor findings:** None identified. Brief assumptions A1–A8 are traced above, including the deferred IA and accessibility questions.

**FACT — Scope check:** This artifact contains no UI designs, wireframes, selected information architecture, fabricated research, or claims of validated compliance. The read-only audit makes no changes to Figma or existing project artifacts.

## HUMAN REVIEW REQUIRED — Completed for Phase 02

**DESIGN DECISION — Proposed only:** Accept the following limited working assumptions temporarily for this portfolio challenge. Acceptance would permit later exploration under declared conditions; it would not validate them or approve a solution. The human designer owns acceptance and any subsequent phase authorization.

| Assumptions | Recommended temporary acceptance | Limits and revisit trigger |
| --- | --- | --- |
| U-01, U-02, U-04, U-05 | Marcos understands basic access/security events, but source and query expertise may vary. | Do not assume expert query syntax or a universal vocabulary. Revisit when target analysts or source schemas are available. |
| U-06, B-02, B-03, B-07 | Investigation is iterative and may be interrupted; returning analysts need prior context. | Do not invent case frequency, workload metrics, or mandatory automation. Revisit with observed search and resumption behavior. |
| B-01, P-01 | This challenge begins with the supplied role-assignment event and a provisional scope. | Apply only to the supplied scenario; creation fields, preservation defaults, and other entry paths remain undecided. |
| U-07 | One analyst leads the scenario and another authorized person may review it asynchronously. | No assumption of real-time collaboration, team size, or approved role permissions. Revisit before defining shared ownership or access. |
| B-06, P-06, P-07 | Findings need attributable reasoning that distinguishes observations, notes, inference, and uncertainty. | Attachment structure, note history, and revision mechanics remain open. No automated-inference requirement is implied. |
| P-02 | A case retains enough investigation context to resume; a saved query is not the entire case record. | Treat this as a proposed persistence need, not a verified backend capability or approved object model. Resolve live versus preserved state before dependent IA decisions. |
| D-06 | The missing device identifier remains unresolved, and a qualified investigation can still be useful. | Do not invent a device identity, recovery method, or attribution. Revisit if intended recipients require device-level proof. |

**DESIGN DECISION — Separate explicit bounds required for architecture-critical assumptions:** Do not silently accept the following as platform facts. For a portfolio-only continuation, the human may approve these narrow fictional conditions, retaining their limitations in later documentation:

| Assumptions | Proposed bounded condition for human consideration |
| --- | --- |
| D-04, D-05, D-07, B-04 | Use only declared supporting relationships in any later mock data. Any added session or identity mapping must be explicitly labeled synthetic and approved; unsupported links remain unresolved. |
| P-05, S-01, B-05 | Model preservation as retaining original selected event content and provenance for the fictional case’s lifetime. Do not claim a real storage implementation, indefinite retention, or a legal hold; preservation policy remains unresolved. |
| D-02, D-03, D-08 | Retain the supplied verified identity clock, four-minute export arrival delay, missing device identifier, and explicit unknowns. Do not assume all clocks are reliable, all gaps detectable, or ingestion complete. |
| S-04 | Limit the scenario to one analyst’s explicitly authorized sources and evidence. Any reviewer or export permissions require their own declared policy before being modeled. |
| P-08, S-03, S-05, S-02 | Treat the recipient as an authorized internal reviewer only if the human selects that audience. Keep format, trusted verification reference, audit fields, and package contents open; no compliance or admissibility claim is supported. |
| D-01, P-03, P-04 | Use an illustrative scoped dataset with declared matching rules and limits. Do not claim measured search performance, production scalability, or completeness outside the declared dataset. |

**FACT — Approval record:** The Product Designer approved Phase 02 and explicitly instructed that Phase 03 must not start. Approval accepts this register and its provisional framing; it does not turn assumptions into research findings. The recommendations above are retained as the material presented for review. No separate per-assumption decisions, recipient selection, or synthetic identity/session mappings were supplied. Investigation frequency (U-03), exact collaboration mechanics, operational data capabilities, and policy obligations remain OPEN QUESTIONS. Retain the stated limits and revisit triggers; these unresolved questions do not constitute a pending request to reapprove Phase 02.

**DESIGN DECISION — Phase boundary:** Phase 02 is approved and complete. Phase 03 — Information Architecture must not start without a separate instruction from the Product Designer. This approval does not select information architecture, UI, wireframes, visual direction, or implementation behavior.
