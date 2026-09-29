import type { Dispatch, SetStateAction } from 'react'
import { activeFilterEntries } from '../domain'
import type { AnalystRecord, AuditEvent, CoverageState, Filters, PreservationState } from '../types'
import { Badge, Button, Panel, StatusMessage } from './ui'

export function FilterBar({ filters, setFilters, onApply, loading }: { filters: Filters; setFilters: Dispatch<SetStateAction<Filters>>; onApply: () => void; loading: boolean }) {
  const entries = activeFilterEntries(filters)
  const update = (key: keyof Filters, value: string) => setFilters((current) => ({ ...current, [key]: value }))
  const clear = () => setFilters({ search: '', actor: '', eventType: '', source: '', resource: '', start: '', end: '' })
  return (
    <Panel title="Working query" className="filter-bar">
      <div className="filter-bar__primary">
        <label className="field field--grow"><span>Search events</span><input type="search" value={filters.search} onChange={(e) => update('search', e.target.value)} placeholder="Sign-in, role assignment, export…" /></label>
        <Button variant="primary" onClick={onApply} disabled={loading}>{loading ? 'Running…' : 'Run query'}</Button>
        <Button variant="tertiary" onClick={clear} disabled={!entries.length}>Clear filters</Button>
      </div>
      <details className="filter-bar__advanced" open>
        <summary>Advanced filters</summary>
        <div className="filter-grid">
          <label className="field"><span>Actor</span><select value={filters.actor} onChange={(e) => update('actor', e.target.value)}><option value="">Any actor</option><option>m.ortiz@example.test</option><option>admin.ops@example.test</option><option>security.monitor</option></select></label>
          <label className="field"><span>Event type</span><select value={filters.eventType} onChange={(e) => update('eventType', e.target.value)}><option value="">Any event type</option><option>Administrator role assigned</option><option>Customer export started</option><option>Sign-in from new device</option><option>Administrator role revoked</option></select></label>
          <label className="field"><span>Source</span><select value={filters.source} onChange={(e) => update('source', e.target.value)}><option value="">Any authorized source</option><option>Identity Log</option><option>Export Gateway</option><option>Telemetry Archive</option><option>Security Monitor</option></select></label>
          <label className="field"><span>Resource</span><select value={filters.resource} onChange={(e) => update('resource', e.target.value)}><option value="">Any resource</option><option>Administrator role</option><option>Customer export</option><option>Customer dataset</option></select></label>
          <label className="field"><span>Start — original time</span><input type="time" value={filters.start} onChange={(e) => update('start', e.target.value)} /></label>
          <label className="field"><span>End — original time</span><input type="time" value={filters.end} onChange={(e) => update('end', e.target.value)} /></label>
        </div>
      </details>
      <div className="filter-chips" aria-label="Active filters">
        {entries.length ? entries.map(([key, value]) => <button key={key} className="filter-chip" onClick={() => update(key, '')} aria-label={`Remove ${key} filter ${value}`}>{key}: {value}<span aria-hidden="true">×</span></button>) : <span className="muted">No active filters · broad event set</span>}
      </div>
    </Panel>
  )
}

export function QueryStatus({ coverage, visible, total, loading }: { coverage: CoverageState; visible: number; total: number; loading: boolean }) {
  if (loading) return <StatusMessage live><strong>Loading</strong><br />Executing the deterministic client-side query.</StatusMessage>
  if (visible === 0) return <StatusMessage tone="warning" live><strong>No Results</strong><br />No mock events match the active filters. Remove or change a filter.</StatusMessage>
  if (coverage === 'Capped') return <StatusMessage tone="warning" live><strong>Capped Results</strong><br />Showing {visible} of {total} mock records. Refine time, event type, source, actor, or resource.</StatusMessage>
  if (coverage === 'Incomplete Coverage') return <StatusMessage tone="warning" live><strong>Incomplete Coverage</strong><br />Showing {visible} visible mock records. Source coverage is incomplete; the count does not establish completeness.</StatusMessage>
  return <StatusMessage tone="success" live><strong>Complete query execution</strong><br />{visible} mock records match. Complete execution does not claim complete source history.</StatusMessage>
}

export function EventTable({ events, selectedId, onSelect }: { events: AuditEvent[]; selectedId: string | null; onSelect: (event: AuditEvent) => void }) {
  return (
    <div className="table-scroll" role="region" aria-label="Event results table" tabIndex={0}>
      <table>
        <caption className="sr-only">Filtered audit events. Select an event to inspect its details.</caption>
        <thead><tr><th scope="col">Timestamp</th><th scope="col">Actor / role</th><th scope="col">Event type</th><th scope="col">Source</th><th scope="col">Resource</th><th scope="col">Status</th><th scope="col">Evidence</th></tr></thead>
        <tbody>{events.map((event) => <tr key={event.id} className={selectedId === event.id ? 'is-selected' : ''} aria-selected={selectedId === event.id}><td><button className="row-select" onClick={() => onSelect(event)} aria-label={`Select ${event.time} ${event.eventType}`}>{event.time}<span>timezone unknown</span></button></td><td>{event.actor}<span>{event.role}</span></td><td>{event.eventType}</td><td>{event.source}</td><td>{event.resource}</td><td>{event.status}</td><td>Live source</td></tr>)}</tbody>
      </table>
    </div>
  )
}

export function EventCards({ events, selectedId, onSelect }: { events: AuditEvent[]; selectedId: string | null; onSelect: (event: AuditEvent) => void }) {
  return <div className="event-cards">{events.map((event) => <article className={`event-card ${selectedId === event.id ? 'is-selected' : ''}`} key={event.id}><button onClick={() => onSelect(event)}><span className="mono">{event.time} · timezone unknown</span><strong>{event.eventType}</strong><span>{event.actor} · {event.role}</span><span>{event.source} · Live source</span><Badge tone={event.late || event.status.includes('missing') || event.status.includes('gap') ? 'warning' : 'neutral'}>{event.status}</Badge></button></article>)}</div>
}

export function EventDetail({ event, preservation, onPreserve, onReconstruct, onBack, records, onAddRecord }: { event: AuditEvent; preservation: PreservationState; onPreserve: () => void; onReconstruct: () => void; onBack?: () => void; records: AnalystRecord[]; onAddRecord: (type: 'note' | 'inference') => void }) {
  return <Panel title="Event detail summary" className="event-detail">
    {onBack && <Button variant="tertiary" onClick={onBack}>← Return to selected result</Button>}
    <p className="semantic-label semantic-label--observed">● Observed Source Event · source-reported content</p>
    <h3><span className="mono">{event.time}</span> · {event.eventType}</h3>
    <dl className="detail-grid"><div><dt>Original time</dt><dd>{event.time} · date/timezone unknown</dd></div><div><dt>Ingestion time</dt><dd>{event.ingestionTime} · mock fixture</dd></div><div><dt>Clock quality</dt><dd>{event.clockQuality}</dd></div><div><dt>Actor / role</dt><dd>{event.actor} · {event.role}</dd></div><div><dt>Source</dt><dd>{event.source}</dd></div><div><dt>Resource</dt><dd>{event.resource}</dd></div></dl>
    <p>{event.detail}</p>
    <div className="relationship"><strong>Session · no supported association supplied</strong><Badge tone="warning">Unresolved</Badge><p>Keep candidate identities separate until a source-qualified relationship is supported.</p></div>
    <div className="relationship"><strong>Device · identifier unavailable</strong><Badge tone="neutral">Unavailable</Badge><p>Absence of device data does not establish that no relationship exists.</p></div>
    <p className="preservation-label"><strong>{preservation}</strong> · source observation {preservation === 'Preserved' ? 'retained as evidence' : 'only'}</p>
    <div className="button-row"><Button variant="primary" onClick={onPreserve} disabled={preservation === 'Preserving' || preservation === 'Preserved'}>{preservation === 'Failed' ? 'Retry preservation' : preservation === 'Preserving' ? 'Preserving…' : preservation === 'Preserved' ? 'Evidence preserved' : 'Preserve source event'}</Button><Button onClick={() => onAddRecord('note')}>Add analyst note</Button><Button onClick={() => onAddRecord('inference')}>Mark inference</Button><Button onClick={onReconstruct}>Open reconstruction</Button></div>
    {records.filter((record) => record.text).map((record) => <div key={record.id} className={`analyst-record analyst-record--${record.type}`}><Badge tone={record.type === 'inference' ? 'inference' : 'neutral'}>{record.type === 'inference' ? 'Analyst Inference' : 'Analyst Note'}</Badge><p>{record.text}</p></div>)}
  </Panel>
}

export function TimelineEvent({ event, selected, preservation, onSelect, onPreserve }: { event: AuditEvent; selected: boolean; preservation: PreservationState; onSelect: () => void; onPreserve: () => void }) {
  return <article className={`timeline-event ${selected ? 'is-selected' : ''}`}><header><button onClick={onSelect}><span className="mono">{event.time}</span><strong>{event.eventType}</strong></button><Badge tone={preservation === 'Preserved' ? 'success' : 'neutral'}>{preservation === 'Preserved' ? 'Evidence Event' : 'Observed Event'}</Badge></header><p className="mono">Original time {event.time} · ingestion {event.ingestionTime}</p><p>{event.detail}</p>{event.late && <Badge tone="warning">Late Event · arrived four minutes late</Badge>}<p className="qualification">Clock Qualification: {event.clockQuality}. Displayed order does not prove causality.</p><Button onClick={onPreserve} disabled={preservation === 'Preserving' || preservation === 'Preserved'}>{preservation === 'Failed' ? 'Retry preservation' : preservation === 'Preserving' ? 'Preserving…' : preservation === 'Preserved' ? 'Preserved' : 'Preserve event'}</Button></article>
}

export function EvidenceItem({ event, state, onPreserve }: { event: AuditEvent; state: PreservationState; onPreserve: () => void }) {
  const tone = state === 'Preserved' ? 'success' : state === 'Failed' ? 'critical' : state === 'Preserving' ? 'info' : 'neutral'
  return <article className="evidence-item"><header><h3>{event.time} · {event.eventType}</h3><Badge tone={tone}>{state}</Badge></header><p><span className="semantic-label semantic-label--observed">● Observed Source Event</span></p><p>{event.source} · {event.resource}</p><p className="mono">Original {event.time} · ingestion {event.ingestionTime} · clock {event.clockQuality}</p>{state !== 'Preserved' && <Button onClick={onPreserve} disabled={state === 'Preserving'}>{state === 'Failed' ? 'Retry required preservation' : state === 'Preserving' ? 'Preserving…' : 'Preserve event'}</Button>}{state === 'Failed' && <StatusMessage tone="critical">Preservation Error · deterministic first attempt failed. Retry is available.</StatusMessage>}</article>
}
