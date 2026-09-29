import { useEffect, useReducer, useRef, useState } from 'react'
import { canExport, coverageFor, filterEvents, packageBlockers, resolvedPackageStage, selectionReducer } from './domain'
import { emptyFilters, investigationSequence, mockEvents } from './mockData'
import type { AnalystRecord, Area, AuditEvent, Filters, PackageStage, PreservationState } from './types'
import { EvidenceItem, EventCards, EventDetail, EventTable, FilterBar, QueryStatus, TimelineEvent } from './components/investigation'
import { Badge, Button, Panel, SectionHeader, StatusMessage } from './components/ui'

const areas: { id: Area; label: string; symbol: string }[] = [
  { id: 'overview', label: 'Investigation Overview', symbol: '▦' },
  { id: 'events', label: 'Event Explorer', symbol: '⌕' },
  { id: 'reconstruction', label: 'Activity Reconstruction', symbol: '≡' },
  { id: 'package', label: 'Evidence Package', symbol: '▣' },
]

const initialPreservation = Object.fromEntries(mockEvents.map((event) => [event.id, 'Not Preserved'])) as Record<string, PreservationState>

function CaseShell({ area, navigate, mobileOpen, setMobileOpen }: { area: Area; navigate: (area: Area) => void; mobileOpen: boolean; setMobileOpen: (open: boolean) => void }) {
  return <>
    <header className="mobile-chrome">
      <div><strong>{areas.find((item) => item.id === area)?.label}</strong><span>Administrator role assignment before customer export</span><span>In progress · 09:19 selected anchor · retention unconfirmed</span></div>
      <Button aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>All areas <span aria-hidden="true">→</span></Button>
    </header>
    <aside className={`case-shell ${mobileOpen ? 'is-open' : ''}`} id="mobile-navigation" aria-label="Investigation areas">
      <div className="case-shell__identity"><span>AUDIT LOG INVESTIGATION / MOCK CASE ALI-1047</span><strong>Administrator role assignment before customer export</strong></div>
      <Badge tone="info">Investigation in progress</Badge>
      <p className="case-shell__analyst">Marcos · security analyst</p>
      <nav><ul>{areas.map((item) => <li key={item.id}><button aria-current={area === item.id ? 'page' : undefined} onClick={() => { navigate(item.id); setMobileOpen(false) }}><span aria-hidden="true">{item.symbol}</span>{item.label}{area === item.id && <span aria-hidden="true">✓</span>}</button></li>)}</ul></nav>
      <div className="case-shell__context"><p><strong>SCOPE</strong> 09:14–09:41 supplied sequence · date/timezone unknown · authorized sources only</p><p><strong>ANCHOR</strong> 09:19 assignment · retention unconfirmed · identity/session unresolved</p></div>
    </aside>
  </>
}

function OverviewPage({ navigate }: { navigate: (area: Area) => void }) {
  return <>
    <SectionHeader title="Investigation Overview" description="Review the case question, inspect the anchor, and carry unresolved findings forward." />
    <div className="overview-grid">
      <Panel title="Investigation question" className="overview-question"><h3>Is the role assignment related to the customer export?</h3><p>An administrator role was assigned at 09:19, followed by a customer export start at 09:26. Authorization, intent, and causality are not established.</p><div className="button-row"><Button variant="primary" onClick={() => navigate('events')}>Inspect 09:19 assignment</Button><Button onClick={() => document.getElementById('declared-scope')?.scrollIntoView()}>Review declared scope</Button></div></Panel>
      <Panel title="Working status"><Badge tone="info">Anchor selected · source observation</Badge><ul className="plain-list"><li>Finding: inspect the original assignment.</li><li>Correlation: actor and session unresolved.</li><li>Evidence: retained content not confirmed.</li><li>Package: required support not ready.</li></ul></Panel>
      <Panel title="Activity under investigation" className="overview-activity"><p>Supplied original time labels · date/timezone unknown · display order does not establish causality.</p><ol className="event-strip">{investigationSequence.map((event) => <li key={event.id}><span className="mono">{event.time}</span><strong>{event.eventType}</strong><span>{event.status}</span></li>)}</ol></Panel>
      <Panel title="Declared scope & preservation intent" className="overview-scope" labelledBy="declared-scope"><p id="declared-scope">09:14–09:41 supplied incident sequence. Date, timezone, and precise query boundaries remain unknown. Search only authorized sources. Temporary filters do not change this scope.</p><p>Preserve relevant source events and contrary context after inspection. Selection does not retain content.</p></Panel>
      <Panel title="Known limitations"><Badge tone="warning">Data Gap</Badge><p>Device ID unavailable for sign-in. Session and cross-source identity mappings remain unresolved.</p><p>Identity-log clock verified. Export-source clock quality and exact ingestion timestamp unknown.</p></Panel>
      <Panel title="Actors & resources"><div className="relationship"><strong>Assigning identity / role recipient · identifiers supplied only by mock fixtures</strong><Badge tone="warning">Unresolved</Badge><p>Keep candidate identities separate until supported.</p></div><p>Resources: administrator role and customer export.</p></Panel>
      <Panel title="Evidence & case activity"><Badge tone="warning">No retained content confirmed</Badge><p>Review source-event preservation before citing retained evidence. Case access, evidence additions, and export integrity remain separate handling records.</p><Button onClick={() => navigate('package')}>Review evidence package</Button></Panel>
    </div>
  </>
}

function EventsPage({ filters, setFilters, appliedFilters, setAppliedFilters, selection, select, preservation, preserve, records, addRecord, navigate }: { filters: Filters; setFilters: React.Dispatch<React.SetStateAction<Filters>>; appliedFilters: Filters; setAppliedFilters: (filters: Filters) => void; selection: string | null; select: (event: AuditEvent) => void; preservation: Record<string, PreservationState>; preserve: (event: AuditEvent) => void; records: AnalystRecord[]; addRecord: (type: 'note' | 'inference') => void; navigate: (area: Area) => void }) {
  const [loading, setLoading] = useState(false)
  const [mobileDetail, setMobileDetail] = useState(false)
  const timerRef = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timerRef.current), [])
  const run = () => { setLoading(true); window.clearTimeout(timerRef.current); timerRef.current = window.setTimeout(() => { setAppliedFilters(filters); setLoading(false) }, 350) }
  const coverage = coverageFor(appliedFilters)
  const allMatches = filterEvents(mockEvents, appliedFilters)
  const visibleEvents = coverage === 'Capped' ? allMatches.slice(0, 8) : allMatches
  const selected = mockEvents.find((event) => event.id === selection) ?? null
  const onSelect = (event: AuditEvent) => { select(event); if (window.matchMedia('(max-width: 430px)').matches) setMobileDetail(true) }
  return <>
    <SectionHeader title={mobileDetail && selected ? 'Event Detail' : 'Event Explorer'} description={mobileDetail && selected ? 'Review the selected source observation, provenance, uncertainty, and preservation state.' : 'Refine authorized source events while keeping the 09:19 assignment in context.'} />
    {mobileDetail && selected ? <div className="mobile-detail-only"><EventDetail event={selected} preservation={preservation[selected.id]} onPreserve={() => preserve(selected)} onReconstruct={() => navigate('reconstruction')} onBack={() => setMobileDetail(false)} records={records.filter((record) => record.id.startsWith(selected.id))} onAddRecord={addRecord} /></div> : <>
      <FilterBar filters={filters} setFilters={setFilters} onApply={run} loading={loading} />
      <div className="query-summary"><Panel title="Query execution"><Badge tone="info">{loading ? 'Loading' : appliedFilters === emptyFilters ? 'Broad query' : 'Client-side mock query'}</Badge><p><strong>{visibleEvents.length}</strong> visible of {mockEvents.length} mock events</p></Panel><QueryStatus coverage={coverage} visible={visibleEvents.length} total={allMatches.length} loading={loading} /></div>
      <div className="desktop-results"><EventTable events={visibleEvents} selectedId={selection} onSelect={onSelect} /></div><div className="mobile-results"><EventCards events={visibleEvents} selectedId={selection} onSelect={onSelect} /></div>
      {selected && <div className="events-detail-layout"><EventDetail event={selected} preservation={preservation[selected.id]} onPreserve={() => preserve(selected)} onReconstruct={() => navigate('reconstruction')} records={records.filter((record) => record.id.startsWith(selected.id))} onAddRecord={addRecord} /><Panel title="Selected anchor"><Badge tone="info">{selected.time} · selected source observation</Badge><p>The selected event persists while refining the working query, even if later criteria exclude it.</p><Button variant="primary" onClick={() => navigate('reconstruction')}>Open Activity Reconstruction</Button></Panel></div>}
    </>}
  </>
}

function ReconstructionPage({ selectedId, select, preservation, preserve, records, addRecord, navigate }: { selectedId: string | null; select: (event: AuditEvent) => void; preservation: Record<string, PreservationState>; preserve: (event: AuditEvent) => void; records: AnalystRecord[]; addRecord: (type: 'note' | 'inference') => void; navigate: (area: Area) => void }) {
  const selected = mockEvents.find((event) => event.id === selectedId) ?? investigationSequence[1]
  return <>
    <SectionHeader title="Activity Reconstruction" description="Examine the supplied sequence around the assignment. Displayed order is not a causal relationship." actions={<Button onClick={() => navigate('events')}>Return to Event Explorer</Button>} />
    <div className="reconstruction-layout"><section aria-labelledby="timeline-heading"><h2 id="timeline-heading">Before / anchor / after</h2><p className="qualification">09:14–09:41 supplied labels · date/timezone unknown. Spacing is not elapsed time.</p><div className="timeline">{investigationSequence.map((event, index) => <div key={event.id}>{index > 0 && <div className="timeline-connector">— Displayed order · not a causal link</div>}<TimelineEvent event={event} selected={selected.id === event.id} preservation={preservation[event.id]} onSelect={() => select(event)} onPreserve={() => preserve(event)} /></div>)}</div></section><aside className="reasoning-rail"><Panel title="Relationship basis"><div className="relationship"><strong>Actor / session · no supported mapping</strong><Badge tone="warning">Unresolved</Badge><p>No source-qualified association is supplied.</p></div><div className="relationship"><strong>Device · identifier unavailable</strong><Badge tone="neutral">Unavailable</Badge></div></Panel><Panel title="Reasoning · draft"><Badge tone="inference">Analyst Inference</Badge><h3>The assignment may relate to the export start.</h3><p>Same actor, same session, and causality are not established. Exact retained citations are required before package inclusion.</p><Button onClick={() => addRecord('inference')}>Add inference</Button></Panel><Panel title="Analyst working notes"><Badge tone="neutral">Analyst Note</Badge><p>{records.find((record) => record.type === 'note')?.text ?? 'No note added yet.'}</p><Button onClick={() => addRecord('note')}>Add note</Button></Panel><Panel title="Timing & coverage limits"><Badge tone="warning">Data Gap</Badge><p>Export arrived four minutes late. Source coverage is unknown. Missing device data does not establish a retention gap.</p><Button onClick={() => navigate('package')}>Review evidence package</Button></Panel></aside></div>
  </>
}

function EvidencePackagePage({ preservation, preserve, records, gapAcknowledged, setGapAcknowledged, stage, setStage, exportPackage }: { preservation: Record<string, PreservationState>; preserve: (event: AuditEvent) => void; records: AnalystRecord[]; gapAcknowledged: boolean; setGapAcknowledged: (value: boolean) => void; stage: PackageStage; setStage: (stage: PackageStage) => void; exportPackage: () => void }) {
  const blockers = packageBlockers(preservation, gapAcknowledged)
  const effectiveStage = resolvedPackageStage(stage, blockers)
  useEffect(() => { if (effectiveStage !== stage) setStage(effectiveStage) }, [effectiveStage, setStage, stage])
  return <>
    <SectionHeader title="Evidence Package" description="Trace observations through preservation to exact evidence citations and a fixed mock package version." />
    <Panel className="package-status" title="Package readiness"><Badge tone={effectiveStage === 'Export Complete' ? 'success' : blockers.length ? 'warning' : 'info'}>{effectiveStage}</Badge><p>No real package, manifest, hash, file, destination, or delivery behavior is implemented.</p>{blockers.length > 0 && <div role="alert"><strong>Blocking conditions</strong><ul>{blockers.map((blocker) => <li key={blocker}>{blocker}</li>)}</ul></div>}<div className="button-row">{stage === 'Draft' && <Button variant="primary" onClick={() => setStage('Incomplete')}>Review package readiness</Button>}{effectiveStage === 'Ready for Review' && <Button variant="primary" onClick={() => setStage('Ready for Export')}>Confirm fixed mock snapshot</Button>}<Button variant="primary" onClick={exportPackage} disabled={!canExport(effectiveStage, blockers)}>{effectiveStage === 'Export Processing' ? 'Export processing…' : effectiveStage === 'Export Complete' ? 'Export complete' : 'Simulate export'}</Button></div>{effectiveStage === 'Export Complete' && <StatusMessage tone="success" live><strong>Export Complete</strong><br />The simulated transition finished. No file was generated.</StatusMessage>}</Panel>
    <section aria-labelledby="evidence-items-heading"><h2 id="evidence-items-heading">Source observations → preservation outcomes</h2><p>Observed source events remain distinct from retained Evidence items.</p><div className="evidence-grid">{investigationSequence.map((event) => <EvidenceItem key={event.id} event={event} state={preservation[event.id]} onPreserve={() => preserve(event)} />)}</div></section>
    <div className="package-lower"><div><Panel title="Analyst Inference · separate record"><Badge tone="inference">Analyst Inference</Badge><p>{records.find((record) => record.type === 'inference')?.text ?? 'The assignment may relate to the export start. This remains qualified interpretation.'}</p><p>Inference cannot be converted to observed evidence.</p></Panel><Panel title="Analyst Notes · separate record"><Badge tone="neutral">Analyst Note</Badge><p>{records.find((record) => record.type === 'note')?.text ?? 'Check whether the administrator change had an approved purpose.'}</p></Panel></div><div><Panel title="Unresolved limitations"><Badge tone="warning">Data Gap</Badge><p>Device ID unavailable; actor/session mapping unresolved; cross-source ordering uncertain.</p><label className="checkbox"><input type="checkbox" checked={gapAcknowledged} onChange={(e) => setGapAcknowledged(e.target.checked)} />Acknowledge this required limitation in the mock package</label></Panel><Panel title="Case handling record"><p>Mock case access, evidence additions, and export integrity are represented separately from source events. No persistence service is used.</p></Panel></div></div>
  </>
}

export default function App() {
  const [selection, dispatchSelection] = useReducer(selectionReducer, { area: 'overview', selectedEventId: 'evt-003' })
  const area = selection.area as Area
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>({ ...emptyFilters })
  const [appliedFilters, setAppliedFilters] = useState<Filters>({ ...emptyFilters })
  const [preservation, setPreservation] = useState(initialPreservation)
  const [attempts, setAttempts] = useState<Record<string, number>>({})
  const [records, setRecords] = useState<AnalystRecord[]>([])
  const [gapAcknowledged, setGapAcknowledged] = useState(false)
  const [packageStage, setPackageStage] = useState<PackageStage>('Draft')
  const [announcement, setAnnouncement] = useState('Prototype ready.')
  const timers = useRef<number[]>([])
  useEffect(() => () => timers.current.forEach(window.clearTimeout), [])
  const navigate = (nextArea: Area) => { dispatchSelection({ type: 'navigate', area: nextArea }); window.scrollTo({ top: 0, behavior: 'auto' }) }
  const select = (event: AuditEvent) => { dispatchSelection({ type: 'select', id: event.id }); setAnnouncement(`${event.time} ${event.eventType} selected.`) }
  const preserve = (event: AuditEvent) => {
    if (preservation[event.id] === 'Preserving' || preservation[event.id] === 'Preserved') return
    const attempt = (attempts[event.id] ?? 0) + 1
    setAttempts((current) => ({ ...current, [event.id]: attempt }))
    setPreservation((current) => ({ ...current, [event.id]: 'Preserving' }))
    setAnnouncement(`Preserving ${event.time} ${event.eventType}.`)
    const timer = window.setTimeout(() => {
      const failed = event.preservationFailureOnce && attempt === 1
      setPreservation((current) => ({ ...current, [event.id]: failed ? 'Failed' : 'Preserved' }))
      setAnnouncement(failed ? `Preservation failed for ${event.time}. Retry is available.` : `${event.time} preserved as evidence.`)
    }, 650)
    timers.current.push(timer)
  }
  const addRecord = (type: 'note' | 'inference') => {
    const promptText = type === 'note' ? 'Add an analyst note. Notes remain separate from observed evidence.' : 'Add an analyst inference. Inferences remain qualified interpretation.'
    const text = window.prompt(promptText, type === 'note' ? 'Check whether the administrator change had an approved purpose.' : 'The assignment may relate to the export start; actor, session, and causality remain unresolved.')
    if (!text?.trim()) return
    const eventId = selection.selectedEventId ?? 'case'
    setRecords((current) => [...current, { id: `${eventId}-${type}-${current.length + 1}`, type, text: text.trim() }])
    setAnnouncement(`Analyst ${type} added.`)
  }
  const exportPackage = () => {
    const blockers = packageBlockers(preservation, gapAcknowledged)
    if (!canExport(packageStage, blockers)) { setAnnouncement('Export blocked. Resolve the listed package conditions.'); return }
    setPackageStage('Export Processing'); setAnnouncement('Simulated export processing.')
    const timer = window.setTimeout(() => { setPackageStage('Export Complete'); setAnnouncement('Simulated export complete. No file was generated.') }, 800)
    timers.current.push(timer)
  }
  const page = (() => {
    if (area === 'overview') return <OverviewPage navigate={navigate} />
    if (area === 'events') return <EventsPage filters={filters} setFilters={setFilters} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} selection={selection.selectedEventId} select={select} preservation={preservation} preserve={preserve} records={records} addRecord={addRecord} navigate={navigate} />
    if (area === 'reconstruction') return <ReconstructionPage selectedId={selection.selectedEventId} select={select} preservation={preservation} preserve={preserve} records={records} addRecord={addRecord} navigate={navigate} />
    return <EvidencePackagePage preservation={preservation} preserve={preserve} records={records} gapAcknowledged={gapAcknowledged} setGapAcknowledged={setGapAcknowledged} stage={packageStage} setStage={setPackageStage} exportPackage={exportPackage} />
  })()
  return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to main content</a><CaseShell area={area} navigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /><main id="main-content" tabIndex={-1}>{page}<footer><strong>MOCK DATA</strong> · Deterministic implementation fixtures for interaction validation. Not research, analytics, or customer data.</footer></main><div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div></div>
}
