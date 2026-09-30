# Phase 12 — Accessibility Audit

Status: baseline complete; remediation not started.

## Executive Summary

The functional prototype has a strong accessibility foundation, but the WCAG 2.2 AA baseline does not pass yet. Automated testing found no detectable WCAG A/AA violations across 23 representative scans, and the implementation generally uses native HTML, explicit labels, real table markup, textual evidence semantics, visible focus, responsive reflow, and reduced-motion handling.

Manual keyboard and focus testing identified three significant implementation barriers: focus is not moved or restored when application views change, the full-screen mobile navigation behaves visually like an overlay without modal keyboard behavior, and package-readiness changes are not announced. Two lower-risk issues affect programmatic selection state and touch-target robustness.

This is a read-only baseline. No Figma node, React source file, CSS file, or component was modified.

### Baseline counts

- Critical: 0
- Major: 3
- Minor: 2

### Final scorecard

| Area | Result |
| --- | --- |
| Automated Accessibility | PASS |
| Semantic HTML | PASS |
| Keyboard Navigation | FAIL |
| Focus Visibility | PASS |
| Focus Management | FAIL |
| Forms | PASS |
| Event Table | PASS |
| Timeline | PASS |
| Evidence Semantics | PASS |
| Dynamic Status | FAIL |
| Color Contrast | PASS |
| Target Size | PASS |
| Responsive Accessibility | FAIL |
| Screen-reader Readiness | FAIL |
| Reduced Motion | PASS |

## Scope

Two layers were audited separately:

1. **Design system / Figma:** `05 — Foundations`, `06 — Components`, `07 — Hi-Fi`, `08 — Responsive`, and `09 — Prototype` in file `33KL5MbUxw5x38J7V6AjvK`.
2. **Functional React implementation:** the Vite/React application in `prototype/`, including Investigation Overview, Event Explorer, Activity Reconstruction, Evidence Package, mobile navigation, mobile Event Detail, preservation failure, and package/export states.

The audit reviewed the approved product and implementation documents listed in the Phase 12 request. Design support is not treated as implementation compliance.

## WCAG 2.2 AA Target

The target is WCAG 2.2 Level AA. Findings reference WCAG success criteria where applicable. A zero-violation automated scan does not establish conformance; keyboard behavior, focus management, live announcements, assistive-technology behavior, and product meaning require separate evaluation.

## Automated Findings

axe-core 4.10.3 was run in Chromium against the local functional prototype using the WCAG 2.0 A/AA, WCAG 2.1 A/AA, and WCAG 2.2 AA rule tags.

Representative scans:

- Investigation Overview, Event Explorer, Activity Reconstruction, and Evidence Package at 1440, 1280, 1024, 768, and 390 px.
- Mobile navigation open at 390 px.
- Mobile Event Detail at 390 px.
- Preservation Failed at 1440 px.

Result: **0 axe violations in 23 scans.** There are therefore no automated findings to enumerate. Manual findings below remain valid because axe does not determine whether SPA focus moved correctly, an overlay traps/restores focus, a status change is announced at the right time, or an interaction model is understandable.

## Findings Register

### A11Y-001 — View and detail transitions do not manage focus

- **Severity:** MAJOR
- **WCAG:** 2.4.3 Focus Order; 2.4.11 Focus Not Obscured (Minimum) is not currently violated but is part of the remediation acceptance check.
- **Screen / component:** All product-area navigation; mobile Event Explorer → Event Detail → return; Event Detail / reconstruction transitions.
- **Problem:** Visual content changes without moving focus to the new view or restoring it to the originating control.
- **Evidence:** After keyboard activation of `Event Explorer`, the `h1` changed to “Event Explorer” while focus remained on the side-navigation button. At 390 px, activating the 09:19 event card replaced the list with Event Detail and left focus on `body`; returning to results also left focus on `body`. `navigate()` scrolls but does not focus the new view (`prototype/src/App.tsx:104`), and the mobile detail state only toggles React state (`prototype/src/App.tsx:58-61`).
- **User impact:** Keyboard and screen-reader users can lose their location, may not know that a view changed, and must restart navigation from the document beginning.
- **Recommended remediation:** Establish a route/state focus contract. On area changes, focus the new `h1` or `main` with an appropriate announcement strategy. On mobile detail open, focus the Event Detail heading. On close, restore focus to the originating event card and preserve its scroll position. Restore focus after reconstruction/detail transitions as well.
- **Design / Code / Both:** Code. Design and responsive documentation already call for focus restoration.

### A11Y-002 — Full-screen mobile navigation lacks overlay keyboard behavior

- **Severity:** MAJOR
- **WCAG:** 2.1.1 Keyboard; 2.4.3 Focus Order; 1.3.1 Info and Relationships; 4.1.2 Name, Role, Value.
- **Screen / component:** Mobile `All areas` navigation at 768 and 390 px.
- **Problem:** The navigation covers the viewport like a modal overlay, but it has no dialog/modal semantics, does not move focus into the overlay, does not contain focus, and does not close with Escape.
- **Evidence:** Opening `All areas` leaves focus on the trigger. The open container has neither `role="dialog"` nor `aria-modal`. Pressing Escape leaves it open. Tabbing moves through four navigation items and then into visually obscured main-page actions. The implementation only toggles `mobileOpen` and CSS display/position (`prototype/src/App.tsx:17-27`; `prototype/src/styles.css:193-195`).
- **User impact:** Keyboard users can interact with hidden background content and may struggle to understand or dismiss the overlay. Screen-reader users are not told that a modal interaction context has opened.
- **Recommended remediation:** Either implement the navigation as a true modal disclosure with an accessible name, initial focus, focus containment, Escape close, background inertness, and trigger-focus restoration, or redesign it as an in-flow nonmodal disclosure where underlying content remains visible and operable. Keep `aria-expanded` and `aria-controls`.
- **Design / Code / Both:** Code. Figma and responsive strategy indicate a collapsed navigation pattern but do not prove runtime modal behavior.

### A11Y-003 — Package-readiness changes are not announced

- **Severity:** MAJOR
- **WCAG:** 4.1.3 Status Messages.
- **Screen / component:** Evidence Package / Package readiness.
- **Problem:** Readiness can change from Draft/Incomplete to Ready for Review and Ready for Export without a live status message. The visible badge updates, but the central polite live region is not updated for these transitions.
- **Evidence:** `effectiveStage` is synchronized with state in an effect (`prototype/src/App.tsx:81`). The acknowledgement checkbox and the “Review package readiness” / “Confirm fixed mock snapshot” buttons update package state without calling `setAnnouncement` (`prototype/src/App.tsx:84-86`). Export Processing and Export Complete do call the announcement channel, showing that an implementation mechanism already exists (`prototype/src/App.tsx:129-131`).
- **User impact:** A nonvisual user may not learn that blockers were resolved, that readiness advanced, or that export became available.
- **Recommended remediation:** Announce only meaningful readiness transitions in a dedicated `role="status"`/polite live region. Announce blocking failures immediately with `role="alert"` only when urgent. Avoid repeating the full blocker list on every minor change.
- **Design / Code / Both:** Code. Design support for status states is present; runtime announcement is missing.

### A11Y-004 — Mobile selected-event state is visual only

- **Severity:** MINOR
- **WCAG:** 1.3.1 Info and Relationships; 4.1.2 Name, Role, Value.
- **Screen / component:** Event Explorer mobile event cards; selected Event Table control wording.
- **Problem:** Mobile cards apply `.is-selected` visually but expose no programmatic selected/current/pressed state. The desktop table exposes `aria-selected` on the row, but the selection button continues to be named “Select …” after selection.
- **Evidence:** `EventCards` changes only the class name (`prototype/src/components/investigation.tsx:56`). `EventTable` sets `aria-selected` on each row, while the button label remains `Select {time} {eventType}` (`prototype/src/components/investigation.tsx:49`).
- **User impact:** Assistive-technology users reviewing or returning to the result set receive weaker confirmation of the persistent anchor than sighted users receive from the blue selected treatment.
- **Recommended remediation:** Expose selected state on the interactive card/control using the interaction pattern chosen for the list (for example `aria-current`, `aria-pressed`, or explicit selected text, not conflicting roles). Change the action name to reflect the selected state where appropriate. Preserve the desktop row semantics and verify them with a screen reader.
- **Design / Code / Both:** Code. Figma includes explicit “Selected” labels and separates selection from focus.

### A11Y-005 — Advanced-filter disclosure relies on the target-spacing exception

- **Severity:** MINOR
- **WCAG:** 2.5.8 Target Size (Minimum).
- **Screen / component:** Event Explorer / `Advanced filters` summary at all breakpoints.
- **Problem:** The disclosure target is 20 px high. It passes the AA spacing exception in the audited layout, but it is less robust than the 44–48 px touch-oriented controls used elsewhere.
- **Evidence:** Runtime measurement returned a 20 px-high `<summary>` at 1440, 1280, 1024, 768, and 390 px. No other visible target was below 24 px. CSS supplies margin but no minimum target height (`prototype/src/styles.css:128`).
- **User impact:** Users with limited dexterity may find the disclosure harder to activate, particularly under zoom or on touch devices.
- **Recommended remediation:** Increase the summary hit area to at least 44 px, preferably the existing 48 px touch token at narrow widths, without shrinking its text or removing native disclosure semantics.
- **Design / Code / Both:** Both. The implementation and design system should use the same disclosure target contract.

## Keyboard Findings

The critical interaction inventory was reviewed through keyboard-driven Chromium checks plus semantic code inspection.

Passing behavior:

- Skip link is first in the tab sequence and becomes visibly focused.
- Product-area controls, buttons, native inputs, selects, checkbox, `<details>/<summary>`, table selection buttons, timeline selection/preservation actions, evidence actions, and export actions are keyboard-operable with native Enter/Space behavior.
- Shift+Tab follows reverse DOM order; no persistent trap was found in ordinary page content.
- Event-results horizontal scroll region is keyboard-focusable and labeled.
- Native `window.prompt` note/inference input supports browser-provided keyboard and Escape behavior, but its assistive-technology experience was not claimed as compliant.

Failures are A11Y-001 and A11Y-002. The mobile navigation problem is focus escape, not a keyboard trap.

## Focus

The global `:focus-visible` rule uses a 2 px outline with 3 px offset (`prototype/src/styles.css:64`). Measured contrast is 5.20:1 on white and 3.63:1 on the dark shell, meeting the 3:1 non-text threshold. Focus is visually distinct from the row/card selected boundary because it appears on the focused control at a different geometry.

No clipping was observed in the table scroll region, cards, buttons, or sticky chrome. The skip link is visible when focused. Focus visibility passes; focus management fails under A11Y-001 and A11Y-002.

## Semantic HTML

- `<html lang="en">` is present.
- Document title is “Audit Log Investigation Prototype.” It describes the application, though including the current area would improve orientation.
- Landmark structure includes navigation, complementary case context, `main`, page-level headers, and a footer.
- One `h1` is rendered for the active view. Panels use `h2`; nested item headings use `h3` where present.
- Headings represent content hierarchy rather than being used only for visual size.

Result: PASS. Dynamic-view focus remains a separate failure.

## Forms

Search, time inputs, selects, and the package checkbox have visible programmatic labels. Placeholder text supplements rather than replaces the Search label. Disabled states use native `disabled`. No field is currently required and no form-validation error state is implemented, so required/error associations are not applicable to the audited flow.

The note/inference authoring interaction uses a browser-native prompt. It is keyboard-operable, but production authoring should use a designed labeled dialog or inline editor with validation and revision semantics, as already acknowledged in project documentation.

Result: PASS for the current prototype scope.

## Event Table

Desktop/tablet uses a native `<table>` with caption, `<thead>`, `<tbody>`, and `scope="col"` headers. Event selection is a native button, and the selected row carries `aria-selected`. The horizontally scrolling data region is separately labeled and focusable. Cell content remains meaningful without relying on its position alone.

At 390 px, the table transforms into event-summary cards rather than hiding columns arbitrarily. Time, event type, actor/role, source, evidence state, and uncertainty remain textual, with complete detail available in the dedicated Event Detail state.

Result: PASS, with the mobile programmatic-selection improvement in A11Y-004.

## Timeline

Activity Reconstruction provides a textual ordered sequence in DOM order. Each item includes event time, event type, original time, ingestion time, evidence state, late-arrival text where applicable, clock qualification, and the repeated statement that displayed order does not prove causality. Connector labels are text, not line-only meaning.

Result: PASS.

## Evidence Semantics

Observed Source Event, retained Evidence Event, Analyst Inference, Analyst Note, Data Gap, and unresolved/unavailable relationships use explicit text. Color is paired with symbols and labels. Inference and notes remain separate records and are not converted to observations.

Result: PASS.

## Dynamic Status

Appropriate current behavior:

- Query loading, no-results, capped, incomplete, and complete states use status regions.
- Preservation start/success/failure and export processing/completion update the central polite announcement channel.
- Preservation failure uses an alert-style critical message.

Required remediation:

- Package-readiness transitions require a concise polite announcement (A11Y-003).
- The initial “Prototype ready.” live message is nonessential and should be removed or justified to reduce announcement noise.

Result: FAIL.

## Contrast

axe-core found no color-contrast violations in any scanned state. Selected measured ratios:

| Pair | Ratio |
| --- | ---: |
| Primary text / white | 16.27:1 |
| Secondary text / white | 8.07:1 |
| Tertiary text / white | 4.70:1 |
| White / dark shell | 18.91:1 |
| Shell secondary / dark shell | 12.26:1 |
| Primary action / white | 6.70:1 |
| Focus / white | 5.20:1 |
| Focus / dark shell | 3.63:1 |
| Warning text / warning surface | 7.59:1 |
| Critical text / critical surface | 5.90:1 |
| Inference text / inference surface | 6.43:1 |
| Success text / success surface | 6.16:1 |

The subtle border is 1.29:1 on white; it is used as nonessential grouping/division rather than the sole indicator of a control. Form-control borders are 4.70:1. Disabled controls are visually subdued and use native disabled semantics.

Result: PASS.

## Target Size

All visible runtime controls except the Advanced filters summary measured at least 24 px in each dimension. Mobile navigation and stacked actions use 48 px minimum heights. The 20 px summary passes via spacing but is recorded as A11Y-005 for robustness.

Result: PASS under WCAG 2.5.8 AA.

## Responsive Accessibility

At 1440 and 1280 px the full table and persistent shell remain usable. At 1024 and 768 px, the page reflows and the table is isolated in a labeled horizontal scroll region; the overall page does not require horizontal scrolling. At 390 px, event cards and dedicated detail avoid page-level horizontal scrolling and preserve readable text and actions.

No clipping, text overlap, hidden primary control, or focus-ring clipping was observed in the saved QA renders or runtime inspection. The responsive score fails because the mobile full-screen navigation pattern has the keyboard/focus behavior in A11Y-002 and the detail transition has A11Y-001.

Result: FAIL.

## Screen-reader Readiness

This is a **SCREEN-READER READINESS** assessment, not a screen-reader compliance claim.

Strengths include native controls, labels, headings, landmarks, table semantics, caption and headers, decorative-symbol hiding in navigation/badges, text-based evidence semantics, live query/preservation/export messaging, and meaningful DOM order.

Readiness fails pending remediation of state-transition focus, mobile overlay semantics, package-readiness announcements, and mobile selection state. No real screen reader was tested.

Result: FAIL.

## Motion

CSS implements `prefers-reduced-motion: reduce`, disables smooth scrolling, reduces transition/animation duration, and limits iteration count (`prototype/src/styles.css:65`). Preservation and export use timed state changes but do not communicate essential information through animation. Their results are represented as text and status.

Result: PASS.

## Focus Management

Programmatic focus is required when:

- navigating among the four product areas;
- opening or closing mobile Event Detail;
- opening or closing the mobile navigation overlay;
- moving from Event Detail into reconstruction and returning to Explorer;
- completing or failing preservation if the resulting message/action appears outside the current viewport;
- reaching a newly available package action after readiness changes;
- completing export if completion feedback is not adjacent to the focused control.

Current focus management fails for area navigation, mobile detail open/close, and the mobile navigation overlay. Preservation/export status is adjacent and announced, so focus should generally remain on the initiating control unless an error requires immediate corrective action.

Result: FAIL.

## Figma vs Implementation

### DESIGN SUPPORT PRESENT + IMPLEMENTATION CORRECT

- Semantic primitive → semantic → component token structure is present in Figma and mirrored by CSS custom properties.
- Explicit evidence labels, icons/markers, and text descriptions are present in both layers.
- Figma documents focus variants for buttons, icon buttons, inputs, selects, checkboxes, tabs, navigation items, filter chips, table/timeline/evidence specimens; the implementation provides a visible global focus indicator.
- Figma explicitly separates selected and focused states; the implementation uses separate selected boundaries and focus outlines.
- Responsive layouts exist for 1440, 1280, 1024, 768, and 390 px and are implemented as breakpoint-specific patterns rather than uniform scaling.
- Timeline and evidence designs include textual uncertainty, clock, late-arrival, and evidence-state information; implementation retains it.

### DESIGN SUPPORT PRESENT + IMPLEMENTATION MISSING

- Responsive documentation calls for focus restoration when returning from mobile detail/filter surfaces; implementation loses focus (A11Y-001).
- The mobile navigation design implies a discrete disclosure/overlay state; implementation lacks the required keyboard/overlay contract (A11Y-002).
- Design and prototype states distinguish package readiness, preservation failure, processing, and completion; package readiness is not announced at runtime (A11Y-003).
- Figma selected specimens include explicit selected labels; mobile implementation exposes only a visual class (A11Y-004).

### DESIGN ISSUE

- The Advanced filters disclosure does not have an explicit shared 44–48 px target contract in the audited design/implementation pair (A11Y-005).
- No other blocking design-layer accessibility issue was confirmed. Static Figma content cannot prove semantics, keyboard behavior, live announcements, or assistive-technology compatibility.

### IMPLEMENTATION-ONLY ISSUE

- Area/detail focus loss and readiness-announcement gaps are implementation-only behaviors.
- The initial polite live message “Prototype ready.” has no corresponding user-relevant state and may add announcement noise.

## Limitations

- No real screen reader was tested; NVDA/Chrome and VoiceOver/Safari coverage remains required before a conformance claim.
- Forced-colors/high-contrast mode was not tested.
- Browser zoom/text-only zoom was assessed through responsive/reflow behavior and source inspection, not a complete 200%/400% browser matrix.
- No physical touch device or switch-control hardware was tested.
- Native browser prompt behavior varies by browser/assistive technology and was not claimed compliant.
- axe-core does not validate usability, focus intent, announcement timing, accessible wording quality, or all WCAG criteria.
- Figma is a static design artifact; its accessibility-supporting tokens and variants are not runtime proof.
- The prototype uses deterministic mock data and does not exercise authentication, real errors, network latency, persistence, or real export files.

## Remediation Plan

Recommended order, subject to Product Designer approval before implementation:

1. **Major — Focus contract:** define and implement area, mobile-detail, and return-focus behavior; verify forward and reverse keyboard order.
2. **Major — Mobile navigation:** choose modal or in-flow semantics, then implement initial focus, containment/inertness where applicable, Escape, and restoration.
3. **Major — Status contract:** map query, preservation, readiness, export, and errors to polite status, alert, or no announcement; add package-readiness messaging without duplication.
4. **Minor — Selection semantics:** expose persistent selected state on mobile cards and align desktop selection control wording.
5. **Minor — Target robustness:** enlarge the Advanced filters disclosure hit area using the existing touch sizing token.
6. Re-run axe on the same 23-state matrix, repeat keyboard-only critical flow at all five widths, then test NVDA/Chrome, VoiceOver/Safari, forced colors, 200% text, and 400% reflow.

**ACCESSIBILITY REMEDIATION REQUIRED**

