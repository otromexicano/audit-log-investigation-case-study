import { describe, expect, it } from 'vitest'
import { canExport, coverageFor, filterEvents, packageBlockers, resolvedPackageStage, selectionReducer } from '../src/domain'
import { emptyFilters, mockEvents } from '../src/mockData'
import type { PreservationState } from '../src/types'

describe('event filtering and coverage', () => {
  it('filters the broad set to the suspicious administrator assignment', () => {
    const result = filterEvents(mockEvents, { ...emptyFilters, eventType: 'Administrator role assigned', resource: 'Administrator role' })
    expect(result.map((event) => event.id)).toEqual(['evt-003'])
  })

  it('keeps capped and incomplete coverage distinct', () => {
    expect(coverageFor(emptyFilters)).toBe('Capped')
    expect(coverageFor({ ...emptyFilters, source: 'Export Gateway' })).toBe('Incomplete Coverage')
    expect(coverageFor({ ...emptyFilters, eventType: 'Administrator role assigned' })).toBe('Complete')
  })
})

describe('selected event persistence', () => {
  it('preserves selection across area navigation', () => {
    const selected = selectionReducer({ area: 'events', selectedEventId: null }, { type: 'select', id: 'evt-003' })
    const reconstruction = selectionReducer(selected, { type: 'navigate', area: 'reconstruction' })
    const back = selectionReducer(reconstruction, { type: 'navigate', area: 'events' })
    expect(back.selectedEventId).toBe('evt-003')
  })
})

describe('preservation and package readiness', () => {
  const states = (assignment: PreservationState, exportEvent: PreservationState) => ({ 'evt-003': assignment, 'evt-005': exportEvent })

  it('represents preservation transition states independently', () => {
    expect(packageBlockers(states('Preserving', 'Not Preserved'), true)).toHaveLength(2)
    expect(packageBlockers(states('Preserved', 'Failed'), true)[0]).toContain('failed')
    expect(packageBlockers(states('Preserved', 'Preserved'), true)).toEqual([])
  })

  it('blocks export until required evidence and the required gap acknowledgement are resolved', () => {
    const incomplete = packageBlockers(states('Preserved', 'Preserved'), false)
    expect(canExport('Ready for Export', incomplete)).toBe(false)
    expect(resolvedPackageStage('Incomplete', incomplete)).toBe('Incomplete')
    const ready = packageBlockers(states('Preserved', 'Preserved'), true)
    expect(resolvedPackageStage('Incomplete', ready)).toBe('Ready for Review')
    expect(canExport('Ready for Export', ready)).toBe(true)
  })
})
