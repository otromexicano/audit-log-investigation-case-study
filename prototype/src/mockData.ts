import type { AuditEvent, Filters } from './types'

export const emptyFilters: Filters = {
  search: '', actor: '', eventType: '', source: '', resource: '', start: '', end: '',
}

export const mockEvents: AuditEvent[] = [
  { id: 'evt-001', time: '09:07', ingestionTime: '09:07', actor: 'system.scheduler', role: 'System', eventType: 'Policy evaluated', source: 'Policy Engine', resource: 'Admin access policy', status: 'Ordinary', detail: 'Scheduled policy evaluation completed.', clockQuality: 'Verified' },
  { id: 'evt-002', time: '09:14', ingestionTime: '09:14', actor: 'm.ortiz@example.test', role: 'User', eventType: 'Sign-in from new device', source: 'Identity Log', resource: 'Identity session', status: 'Device missing', detail: 'Successful sign-in. Device identifier is unavailable.', clockQuality: 'Verified' },
  { id: 'evt-003', time: '09:19', ingestionTime: '09:19', actor: 'admin.ops@example.test', role: 'Assigning identity', eventType: 'Administrator role assigned', source: 'Identity Log', resource: 'Administrator role', status: 'Suspicious', detail: 'Administrator role assigned to m.ortiz@example.test. Authorization, intent, and causality are not established.', clockQuality: 'Verified', required: true },
  { id: 'evt-004', time: '09:22', ingestionTime: '09:22', actor: 'm.ortiz@example.test', role: 'Role recipient', eventType: 'Customer records viewed', source: 'Application Audit', resource: 'Customer dataset', status: 'Ordinary', detail: 'Customer dataset view recorded after the role change.', clockQuality: 'Qualified' },
  { id: 'evt-005', time: '09:26', ingestionTime: '09:30', actor: 'm.ortiz@example.test', role: 'Export initiator', eventType: 'Customer export started', source: 'Export Gateway', resource: 'Customer export', status: 'Late arrival', detail: 'Export start was ingested four minutes after its original event-time label. Completion is not supplied.', clockQuality: 'Unknown', late: true, required: true, preservationFailureOnce: true },
  { id: 'evt-006', time: '09:31', ingestionTime: '09:31', actor: 'service.export', role: 'Service', eventType: 'Export chunk created', source: 'Export Gateway', resource: 'Customer export', status: 'Ordinary', detail: 'Intermediate export activity; destination and delivery are not supplied.', clockQuality: 'Unknown' },
  { id: 'evt-007', time: '09:34', ingestionTime: '09:35', actor: 'security.monitor', role: 'Service', eventType: 'Anomaly signal created', source: 'Security Monitor', resource: 'Admin access signal', status: 'Review', detail: 'Deterministic mock signal associated with the supplied sequence.', clockQuality: 'Qualified' },
  { id: 'evt-008', time: '09:41', ingestionTime: '09:41', actor: 'identity.admin', role: 'Revoking identity unknown', eventType: 'Administrator role revoked', source: 'Identity Log', resource: 'Administrator role', status: 'Reported', detail: 'Administrator role revoked. Revocation initiator is not established by the supplied scenario.', clockQuality: 'Verified' },
  { id: 'evt-009', time: '09:49', ingestionTime: '09:49', actor: 'system.scheduler', role: 'System', eventType: 'Policy evaluated', source: 'Policy Engine', resource: 'Admin access policy', status: 'Ordinary', detail: 'Scheduled policy evaluation completed.', clockQuality: 'Verified' },
  { id: 'evt-010', time: '10:02', ingestionTime: '10:02', actor: 'audit.archive', role: 'Service', eventType: 'Retention checkpoint', source: 'Telemetry Archive', resource: 'Audit partition', status: 'Coverage gap', detail: 'A mock source-coverage gap is represented for prototype validation; it is not a research finding.', clockQuality: 'Qualified' },
  { id: 'evt-011', time: '10:08', ingestionTime: '10:08', actor: 'case.worker', role: 'Service', eventType: 'Case index updated', source: 'Case Service', resource: 'Investigation case', status: 'Ordinary', detail: 'Mock case indexing activity.', clockQuality: 'Verified' },
  { id: 'evt-012', time: '10:12', ingestionTime: '10:12', actor: 'security.monitor', role: 'Service', eventType: 'Signal reviewed', source: 'Security Monitor', resource: 'Admin access signal', status: 'Ordinary', detail: 'Mock surrounding activity.', clockQuality: 'Verified' },
]

export const investigationSequence = mockEvents.filter((event) => ['evt-002', 'evt-003', 'evt-005', 'evt-008'].includes(event.id))
