export type Area = 'overview' | 'events' | 'reconstruction' | 'package'
export type CoverageState = 'Complete' | 'Capped' | 'Incomplete Coverage'
export type PreservationState = 'Not Preserved' | 'Preserving' | 'Preserved' | 'Failed'
export type EvidenceKind = 'Observed Event' | 'Late Event' | 'Clock Qualification' | 'Evidence Event' | 'Inference' | 'Data Gap' | 'Unresolved Relationship'
export type PackageStage = 'Draft' | 'Incomplete' | 'Ready for Review' | 'Ready for Export' | 'Export Processing' | 'Export Complete' | 'Export Error'

export interface AuditEvent {
  id: string
  time: string
  ingestionTime: string
  actor: string
  role: string
  eventType: string
  source: string
  resource: string
  status: string
  detail: string
  clockQuality: 'Verified' | 'Unknown' | 'Qualified'
  late?: boolean
  required?: boolean
  preservationFailureOnce?: boolean
}

export interface Filters {
  search: string
  actor: string
  eventType: string
  source: string
  resource: string
  start: string
  end: string
}

export interface AnalystRecord {
  id: string
  type: 'note' | 'inference'
  text: string
}
