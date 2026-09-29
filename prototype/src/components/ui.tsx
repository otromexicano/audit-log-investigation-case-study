import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

export function Button({ variant = 'secondary', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' }) {
  return <button className={`button button--${variant} ${className}`} {...props} />
}

export function Panel({ title, children, className = '', labelledBy }: PropsWithChildren<{ title?: string; className?: string; labelledBy?: string }>) {
  const titleId = labelledBy ?? (title ? `panel-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined)
  return (
    <section className={`panel ${className}`} aria-labelledby={titleId}>
      {title && <h2 className="panel__title" id={titleId}>{title}</h2>}
      {children}
    </section>
  )
}

export function Badge({ tone = 'info', children }: PropsWithChildren<{ tone?: 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'inference' }>) {
  const symbols = { info: 'ⓘ', success: '●', warning: '△', critical: '!', neutral: '○', inference: '◆' }
  return <span className={`badge badge--${tone}`}><span aria-hidden="true">{symbols[tone]}</span>{children}</span>
}

export function SectionHeader({ title, description, actions }: { title: string; description: string; actions?: ReactNode }) {
  return <header className="page-header"><div><h1>{title}</h1><p>{description}</p></div>{actions && <div className="page-header__actions">{actions}</div>}</header>
}

export function StatusMessage({ tone = 'info', children, live = false }: PropsWithChildren<{ tone?: 'info' | 'warning' | 'critical' | 'success'; live?: boolean }>) {
  return <div className={`status-message status-message--${tone}`} role={tone === 'critical' ? 'alert' : 'status'} aria-live={live ? 'polite' : undefined}>{children}</div>
}
