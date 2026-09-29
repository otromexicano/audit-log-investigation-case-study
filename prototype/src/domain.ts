import { mockEvents } from './mockData'
import type { AuditEvent, CoverageState, Filters, PackageStage, PreservationState } from './types'

export const activeFilterEntries = (filters: Filters) => Object.entries(filters).filter(([, value]) => value.trim() !== '') as [keyof Filters, string][]

export function filterEvents(events: AuditEvent[], filters: Filters): AuditEvent[] {
  const query = filters.search.trim().toLowerCase()
  return events.filter((event) => {
    const searchable = [event.time, event.actor, event.role, event.eventType, event.source, event.resource, event.status, event.detail].join(' ').toLowerCase()
    return (!query || searchable.includes(query))
      && (!filters.actor || event.actor === filters.actor)
      && (!filters.eventType || event.eventType === filters.eventType)
      && (!filters.source || event.source === filters.source)
      && (!filters.resource || event.resource === filters.resource)
      && (!filters.start || event.time >= filters.start)
      && (!filters.end || event.time <= filters.end)
  })
}

export function coverageFor(filters: Filters): CoverageState {
  const active = activeFilterEntries(filters)
  if (active.length === 0) return 'Capped'
  if (filters.source === 'Export Gateway' || filters.source === 'Telemetry Archive') return 'Incomplete Coverage'
  return 'Complete'
}

export const requiredEventIds = mockEvents.filter((event) => event.required).map((event) => event.id)

export function packageBlockers(preservation: Record<string, PreservationState>, gapAcknowledged: boolean): string[] {
  const blockers: string[] = []
  for (const id of requiredEventIds) {
    const state = preservation[id] ?? 'Not Preserved'
    if (state === 'Failed') blockers.push(`Required preservation failed for ${id}. Retry before export.`)
    else if (state !== 'Preserved') blockers.push(`Required event ${id} is not preserved.`)
  }
  if (!gapAcknowledged) blockers.push('Required data-gap acknowledgement is unresolved.')
  return blockers
}

export function resolvedPackageStage(current: PackageStage, blockers: string[]): PackageStage {
  if (['Ready for Export', 'Export Processing', 'Export Complete', 'Export Error'].includes(current)) return current
  if (current === 'Draft') return 'Draft'
  return blockers.length ? 'Incomplete' : 'Ready for Review'
}

export const canExport = (stage: PackageStage, blockers: string[]) => stage === 'Ready for Export' && blockers.length === 0

export interface SelectionState { area: string; selectedEventId: string | null }
export type SelectionAction = { type: 'select'; id: string } | { type: 'navigate'; area: string } | { type: 'clear' }

export function selectionReducer(state: SelectionState, action: SelectionAction): SelectionState {
  if (action.type === 'select') return { ...state, selectedEventId: action.id }
  if (action.type === 'navigate') return { ...state, area: action.area }
  return { ...state, selectedEventId: null }
}
