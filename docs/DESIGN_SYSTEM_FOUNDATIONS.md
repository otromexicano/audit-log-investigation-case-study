# Design System Foundations — Phase 08A

Status: foundation construction and final read-only audit complete. Human final quality approval remains with the Product Designer.

**FACT — Authorization:** This phase was explicitly authorized to create foundations. Canvas writes were restricted to **05 — Foundations** (`1:6`). Figma collections and styles are document-level assets; they were created with that page active and are used only by its new documentation. No product screens, production components, component tokens, or other-page changes were made.

**FACT — Sources:** [Brief](BRIEF.md), [UX assumptions](UX_ASSUMPTIONS.md), [Information architecture](INFORMATION_ARCHITECTURE.md), [Primary flow](PRIMARY_FLOW.md), [UX hypotheses](UX_HYPOTHESES.md), and [Visual direction](VISUAL_DIRECTION.md). H5 (`42:2`), V2 (`52:9`), and the selected V2 consolidation (`60:244`) were inspected. H5 and the later selection records govern the approved UX; older IA/flow proposal labels do not supersede those records. Technical capabilities and research assumptions remain unvalidated.

## 1. Foundation philosophy

**DESIGN DECISION:** Carry V2's layered navy workspace and selective analytical emphasis into a maintainable native system. Use cyan for interaction, green for source/evidence meaning, violet for interpretation, amber for uncertainty, blue for information, and rose for critical failure. Preserve H5's case context and distinctions between working query, source event, retained Evidence item, inference, note, and fixed package.

Density comes from consistent hierarchy, spacing and progressive detail—not 9–11 px type or hidden uncertainty. The production type ramp begins at 12 px, with essential dense content at 13 px or larger. No visual treatment proves that an observation is preserved, a relationship is supported, or a result set is complete.

**ASSUMPTION:** The dark analytical environment and selected density will remain comfortable during long investigations. No analyst testing, fatigue study or usability result is claimed.

## 2. Architecture and inventory

Primitive → Semantic → Component is the long-term hierarchy. This phase creates only the first two layers.

| Native collection | Mode | Contents | Count |
| --- | --- | --- | ---: |
| Primitives | Value | 31 colors (including 2 alpha utilities), 23 shared dimensions | 54 |
| Semantic | Dark | 51 colors, 13 spaces, 6 radii, 19 sizes, 4 border/focus dimensions | 93 |

Ten native text styles and three native effect styles complete the foundation layer. Typography and shadow geometry are controlled composite styles; they are not duplicated into speculative variables. Shadows bind their color to `color/elevation/shadow`.

**DESIGN DECISION:** A single Dark semantic mode reflects the approved direction. Light mode, density modes and component tokens are deferred. New themes should change semantic mappings rather than product bindings. Future components must alias these semantic roles. Do not create one-off primitive color bindings in product UI.

**FACT — Discovery:** The workspace contained documentation and no application token source. The Figma file had no local variables, text styles or effect styles; Foundations was empty. Library discovery returned community kits. Targeted searches found a different Simple Design System background taxonomy and no Manrope styles. The local system follows V2 instead of introducing an unrelated library dependency.

## 3. Naming and binding

- Variable paths are lowercase, slash-delimited, with hyphens within compound role names.
- Primitive CSS mapping: `color/brand/400` → `var(--ali-primitive-color-brand-400)`.
- Semantic CSS mapping: `color/surface/selected` → `var(--ali-color-surface-selected)`.
- Dimensional CSS mapping: `space/16` → `var(--ali-space-16)`.
- These are reserved handoff names stored in native code syntax. This phase does not claim a CSS implementation exists.
- Primitive scopes are empty to hide them from normal property pickers. Semantics use specific fill, text, stroke, gap, radius or size scopes. No `ALL_SCOPES`.
- All semantic variable values directly alias primitives. Shared raw values can support distinct semantic meanings without duplicate primitives.
- Marker-only roles expose shape and stroke scopes, not text. Their associated base status/evidence role supplies readable labels.

## 4. Color strategy

The neutral scale follows V2's original canvas/shell/panel tones. The tertiary text tone was raised to `#8A9FB2` because a darker candidate failed the selected-surface contrast check. The exploration violet was also replaced with a lighter label/marker pair for dependable use on dark surfaces. These are authorized foundation decisions; the original explorations were preserved.

### Primitive palette

| Family | Tonal steps and values |
| --- | --- |
| neutral | 50: `#E5F0F7` · 200: `#A3B8C9` · 400: `#8A9FB2` · 500: `#6F859B` · 700: `#2E4057` · 800: `#142436` · 850: `#111C2B` · 900: `#0A121D` · 950: `#060B13` |
| brand | 200: `#8BE5ED` · 300: `#63D4DF` · 400: `#38C2D1` · 500: `#29A8B8` · 950: `#103740` |
| info | 300: `#91BCFF` · 500: `#538FF2` · 950: `#122640` |
| success | 300: `#75D9A5` · 500: `#47BF87` · 950: `#102E24` |
| warning | 300: `#F5C579` · 500: `#F0A83D` · 950: `#362711` |
| critical | 300: `#FFA2A9` · 500: `#F57580` · 950: `#3A1C27` |
| violet | 300: `#B9ADFF` · 500: `#9988F5` · 950: `#292140` |
| alpha | shadow: `#00000066` · scrim: `#000000B3` |

Nine neutral steps cover structure, boundaries and readable content. Five cyan steps support interaction states and selection. Information, success, warning, critical and violet each have three useful tones: label, marker and tinted surface. The alpha utilities provide black at 40% for shadows and 70% for modal scrims. No unused primitive remains.

### Semantic color register

Each row aliases `Primitives / {target}`.

| Semantic variable | Primitive target |
| --- | --- |
| `color/background/default` | `color/neutral/950` |
| `color/background/subtle` | `color/neutral/900` |
| `color/background/elevated` | `color/neutral/850` |
| `color/surface/default` | `color/neutral/850` |
| `color/surface/subtle` | `color/neutral/900` |
| `color/surface/raised` | `color/neutral/800` |
| `color/surface/hover` | `color/neutral/800` |
| `color/surface/selected` | `color/brand/950` |
| `color/text/primary` | `color/neutral/50` |
| `color/text/secondary` | `color/neutral/200` |
| `color/text/tertiary` | `color/neutral/400` |
| `color/text/inverse` | `color/neutral/950` |
| `color/text/disabled` | `color/neutral/500` |
| `color/text/link` | `color/brand/300` |
| `color/border/default` | `color/neutral/500` |
| `color/border/subtle` | `color/neutral/700` |
| `color/border/strong` | `color/neutral/400` |
| `color/border/focus` | `color/brand/200` |
| `color/border/selected` | `color/brand/400` |
| `color/action/primary` | `color/brand/400` |
| `color/action/primary-hover` | `color/brand/300` |
| `color/action/primary-active` | `color/brand/500` |
| `color/action/disabled` | `color/neutral/700` |
| `color/action/on-primary` | `color/neutral/950` |
| `color/status/info` | `color/info/300` |
| `color/status/info-marker` | `color/info/500` |
| `color/status/info-surface` | `color/info/950` |
| `color/status/success` | `color/success/300` |
| `color/status/success-marker` | `color/success/500` |
| `color/status/success-surface` | `color/success/950` |
| `color/status/warning` | `color/warning/300` |
| `color/status/warning-marker` | `color/warning/500` |
| `color/status/warning-surface` | `color/warning/950` |
| `color/status/critical` | `color/critical/300` |
| `color/status/critical-marker` | `color/critical/500` |
| `color/status/critical-surface` | `color/critical/950` |
| `color/evidence/observed` | `color/success/300` |
| `color/evidence/observed-marker` | `color/success/500` |
| `color/evidence/observed-surface` | `color/success/950` |
| `color/evidence/inference` | `color/violet/300` |
| `color/evidence/inference-marker` | `color/violet/500` |
| `color/evidence/inference-surface` | `color/violet/950` |
| `color/evidence/note` | `color/neutral/200` |
| `color/evidence/note-surface` | `color/neutral/800` |
| `color/evidence/data-gap` | `color/warning/300` |
| `color/evidence/data-gap-surface` | `color/warning/950` |
| `color/relationship/unresolved` | `color/warning/300` |
| `color/relationship/unresolved-surface` | `color/warning/950` |
| `color/focus/separator` | `color/neutral/950` |
| `color/overlay/scrim` | `color/alpha/scrim` |
| `color/elevation/shadow` | `color/alpha/shadow` |

### Usage contracts

**DESIGN DECISION:**
- Default canvas → subtle shell → default panel → raised/hover surface provides tonal hierarchy without decorative shadows.
- Use `text/inverse` or `action/on-primary` for dark text on bright action fills. Do not place white text on the cyan primary action.
- Use `border/default` to identify controls when the edge is required; `border/subtle` is for decorative separators only.
- Selected content combines `surface/selected`, a 2 px `border/selected` and an explicit Selected indicator.
- Keyboard focus uses a 2 px `border/focus` ring with a 2 px dark separation gap (`color/focus/separator`). It remains distinct from selection. Components must preserve the entire ring without clipping and keep the target visible.
- Disabled colors are limited to truly inactive controls. Read-only source values, unavailable evidence explanations, placeholders and required limitations remain readable with normal text roles.
- Status/evidence surface tones are paired with their same-family readable foreground, not marker-only colors for small text.
- Successful operations and observed evidence are separate semantics even when they share a green primitive. A green marker alone must never mean preservation succeeded.

| Meaning | Required non-color cue | Boundary |
| --- | --- | --- |
| Observed Source Event | Solid marker plus explicit label | Source content is not automatically a retained Evidence item. |
| Analyst Inference | Diamond plus explicit label | Interpretation needs citations and qualifications. |
| Analyst Note | Note/list symbol plus explicit label | Authored context makes no source-evidence claim. |
| Data Gap | Warning symbol plus explicit limitation | Name a documented source/interval; do not invent a retention gap. |
| Unresolved Relationship | Question/uncertainty cue and explicit label | Distinct from an authored inference. |
| Pending/failed/reference-only preservation | Explicit outcome words | None may be represented as retained content. |

**DESIGN DECISION:** Markers are foundation specimens, not a production icon set. Components must choose accessible icons and programmatic names. Unknown coverage, missing fields, capped retrieval and documented gaps remain distinct text states. Colors can be shared; meanings cannot be collapsed.

## 5. Spacing, radius, sizing and borders

Spacing is a 4 px rhythm with 2 and 6 px adjustments for tightly related metadata: `0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64`. Use 8–12 px for compact interiors, 16–24 px for related groups, 32–48 px for work areas and 64 px for major documentation separation. Density changes layout and content priority; it does not create arbitrary spacing.

Radius values: `0, 2, 4, 8, 12, full`. Default compact controls use 4 px, containers 8 px, large dialogs may use 12 px. `full` aliases 9999 and is reserved for circular markers, not pill-shaped default UI.

| Shared sizing variable | px |
| --- | ---: |
| `size/control/compact` | 32 |
| `size/control/default` | 40 |
| `size/control/touch` | 48 |
| `size/icon/small` | 16 |
| `size/icon/default` | 20 |
| `size/icon/large` | 24 |
| `size/navigation/rail` | 64 |
| `size/navigation/sidebar` | 240 |
| `size/panel/compact` | 320 |
| `size/panel/default` | 400 |
| `size/panel/wide` | 480 |
| `size/row/compact` | 32 |
| `size/row/default` | 40 |
| `size/row/comfortable` | 48 |
| `size/container/reading` | 720 |
| `size/container/content` | 1200 |
| `size/container/wide` | 1440 |
| `size/target/minimum` | 24 |
| `size/target/recommended` | 44 |

Sizes are starting constraints or maximum widths, not immutable component boxes. Compact 32 px rows apply to suitable desktop content; multiline content must grow. Icons describe glyph sizes rather than hit areas. A 400 px panel must adapt rather than overflow a 390 px viewport.

| Border / focus variable | px | Use |
| --- | ---: | --- |
| border/width/default | 1 | Functional boundary |
| border/width/selected | 2 | Persistent selected edge |
| focus/width | 2 | Keyboard focus ring |
| focus/offset | 2 | Dark gap between target and ring |

## 6. Typography

**DESIGN DECISION:** Retain V2's Manrope and IBM Plex Mono families, with explicit line heights. Regular body text is 14/20, dense structured content 13/20, and supplementary captions 12/16. Typography sizes are design choices, not a WCAG minimum font-size rule.

| Native style | Family | Weight | Size / line height (px) |
| --- | --- | --- | --- |
| Display / Page Title | Manrope | SemiBold | 28 / 36 |
| Heading 1 | Manrope | SemiBold | 24 / 32 |
| Heading 2 | Manrope | SemiBold | 20 / 28 |
| Heading 3 | Manrope | SemiBold | 16 / 24 |
| Body | Manrope | Regular | 14 / 20 |
| Body Small | Manrope | Regular | 13 / 20 |
| Label | Manrope | SemiBold | 13 / 20 |
| Label Small | Manrope | SemiBold | 12 / 16 |
| Caption | Manrope | Regular | 12 / 16 |
| Data / Monospace | IBM Plex Mono | Regular | 13 / 20 |

Do not uppercase long passages. Preserve full identifiers and hashes through wrapping, expansion or accessible detail. Do not truncate the sole available value. Use tabular numerals where supported; the mono style is the reliable aligned-data treatment. No fabricated IDs, timezone or result counts are needed to demonstrate typography.

Fallback stacks: `Manrope, system-ui, sans-serif`; `"IBM Plex Mono", ui-monospace, monospace`. Both selected fonts and exact Figma weights were verified available. **OPEN QUESTION:** Font packaging, licensing review, fallback metrics and browser rendering are implementation checks.

## 7. Elevation

Static panels, tables and permanent navigation use no effect. Three native styles cover temporary overlap:

| Style | X / Y / blur / spread (px) | Color | Purpose |
| --- | --- | --- | --- |
| Elevation / Raised | 0 / 2 / 8 / 0 | color/elevation/shadow | Temporary elevated panels |
| Elevation / Floating | 0 / 8 / 24 / 0 | color/elevation/shadow | Menus and nonmodal overlays |
| Elevation / Dialog | 0 / 16 / 48 / 0 | color/elevation/shadow | Modal/dialog with semantic scrim |

The alpha shadow is black at 40%. A modal scrim uses black at 70% and must remain behind dialog content. Visible borders support separation because shadows on dark backgrounds are subtle. Effect geometry lives in the named native style; it is an intentional raw-value exception, not scattered node styling.

## 8. Accessibility contract and evidence

**FACT — Calculated checks:** Relative luminance was calculated from resolved sRGB token values. Comparisons used unrounded ratios; tables round only for display. All 167 planned text/non-text pairs passed, including selected backgrounds, status/evidence surface pairs, action-label contrast and functional borders. Minimum tested text pair: **4.677:1**. Minimum tested non-text pair: **3.351:1**.

| Foreground | Background | Calculated ratio | Tested threshold |
| --- | --- | ---: | ---: |
| color/text/primary | color/surface/selected | 11.04:1 | 4.5:1 |
| color/text/secondary | color/surface/selected | 6.24:1 | 4.5:1 |
| color/text/tertiary | color/surface/selected | 4.68:1 | 4.5:1 |
| color/border/default | color/surface/selected | 3.35:1 | 3:1 |
| color/border/focus | color/surface/selected | 8.85:1 | 3:1 |
| color/action/on-primary | color/action/primary-active | 6.94:1 | 4.5:1 |
| color/evidence/inference | color/evidence/inference-surface | 7.57:1 | 4.5:1 |

The 407 rendered documentation text nodes were separately checked against their composed ancestor surfaces; minimum **6.245:1**, no failures at 4.5:1. This does not mean every possible token combination is valid. Use the documented pair contracts. Disabled text is exempt from normal-text contrast only when genuinely inactive; decorative borders are not substitutes for functional boundaries.

The contrast contract follows [W3C SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Target sizing uses [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): 24 × 24 CSS px where applicable, with its defined exceptions. This system additionally recommends 44 × 44 or larger; the 48 px touch control is a design choice.

**DESIGN DECISION — Component acceptance checks:** Maintain a visible, unobscured keyboard focus indicator; provide accessible names, programmatic selected and disabled states, labels and actionable error text. Distinguish invalid input, failed operation and unavailable evidence. Announce status changes appropriately. Provide logical focus order, keyboard access and focus restoration for overlays. Charts/timelines need non-color cues and equivalent textual event access. Validate 200% text enlargement and reflow rather than shrinking type.

**OPEN QUESTION / Deferred validation:** Browser rendering, forced colors, screen readers, keyboard interactions, font substitution, actual touch hit areas and responsive reflow cannot be validated in these static foundation boards. No WCAG conformance claim is made.

## 9. Figma documentation index

All boards use Auto Layout. Their canvas width is 1440 px for readable documentation, not a product-screen or responsive implementation.

| Board | Link |
| --- | --- |
| Color | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=69-2) |
| Semantic Colors | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=70-2) |
| Typography | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=71-2) |
| Spacing | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=71-83) |
| Radius | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=72-2) |
| Sizing | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=72-43) |
| Elevation | [Open board](https://www.figma.com/design/33KL5MbUxw5x38J7V6AjvK/Audit-Log-Investigation?node-id=73-2) |

Color specimens intentionally bind directly to primitives. All other color specimens and documentation styling use semantic aliases. Gap/padding and corner treatments bind to semantic variables. Text specimens use native styles. True-size spacing, radius and sizing demonstrations are labeled. Fixed documentation column widths, swatch geometry and canvas placement are intentionally authored geometry, not product tokens.

## 10. Intentionally deferred to components

**DESIGN DECISION:** Do not produce component tokens or production components in Phase 08A.

Later work must resolve component anatomy and variant matrices; destructive/secondary/tertiary action recipes; loading, error, empty, disabled and validation behavior; keyboard and focus behavior; icon library; dense-table column priorities, wrapping and virtualization; timeline patterns and accessible alternatives; package-readiness state recipes; motion and reduced motion; and semantic component-token mappings. Experimental components belong in **90 — Candidates** under the project rules when that work is authorized.

Responsive validation remains required at **1440, 1280, 1024, 768 and 390**, adapting navigation, panels, density and content priority. Light theme and additional density modes require a separate product need. None is silently inferred from the new foundation scale.

## 11. Final read-only audit

**FACT — Method:** After construction and visual checks, Figma edits stopped. The final pass read variables, modes, aliases, scopes, CSS mappings, native styles, bindings, text contrast, Auto Layout and bounds. Seven board screenshots were inspected. No audit fix was applied after the stop boundary.

| Check | Result |
| --- | --- |
| Primitive → semantic aliases | 93 direct aliases; no missing targets or cycles |
| Expected token values/types | All 147 match the saved plan |
| Scope sets / CSS syntax | All correct; Figma reorders scope arrays, with no semantic difference |
| Duplicate variable names / unused primitives | None |
| Raw solid fills/strokes on Foundations | None |
| Direct primitive color usage | Exactly 31 palette swatches; intentional documentation exception |
| Unbound nonzero Auto Layout padding/gaps | None |
| Unstyled text / text smaller than 12 px | None |
| Frame overflow / non-Auto-Layout containers | None |
| Components / component sets on Foundations | None |
| Palette complexity | 31 colors; all primitives referenced by semantic roles |
| Missing requested semantic concepts | None identified; requested evidence and interaction roles present |
| Scalability | Stable semantic roles; component and theme extension boundaries documented |

**CRITICAL:** None identified within the Phase 08A foundation scope.

**MAJOR:** None identified within the Phase 08A foundation scope.

**MINOR:** No foundation defect identified. Browser/font rendering, interaction accessibility and responsive behavior are recorded follow-ups for the component/implementation phases, not completed validations.

**FACT — Evidence files:** [Token manifest](foundations/token-manifest.json), [phase-one contrast audit](foundations/phase1-audit.json), [final structural audit](foundations/final-audit.json), [manifest comparison](foundations/manifest-verification.json), [order-independent scope verification](foundations/scope-verification.json), and [creation ledger](foundations/design-system-state.json). The initial manifest comparison reported scope-array ordering only; the follow-up set comparison confirmed all 93 scope sets match. No Figma edits were needed.

This readiness assessment permits the human designer to review the foundation deliverable for the next stage; it does not authorize starting that stage or replace human final quality approval.

READY FOR COMPONENT SYSTEM

