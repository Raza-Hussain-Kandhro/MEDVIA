import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'

export const formatRs = (n: number): string => `Rs ${new Intl.NumberFormat('en-PK').format(n)}`

type Variant = 'primary' | 'secondary' | 'ghost'
const variants: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-strong',
  secondary: 'border border-line bg-surface text-ink hover:bg-surface-sunken',
  ghost: 'text-brand hover:bg-surface-sunken',
}
/** Class string so Links and buttons share one look. 44px min target, press feedback gated for reduced motion. */
export function buttonClass(variant: Variant = 'primary', extra = ''): string {
  return `inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md px-5 text-base font-semibold transition-[background-color,transform] duration-(--duration-press) ease-out active:scale-[0.97] motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${extra}`
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>
}
export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`py-12 md:py-16 ${className}`}><Container>{children}</Container></section>
}
type Tone = 'neutral' | 'success' | 'warning' | 'danger'
const tones: Record<Tone, string> = {
  neutral: 'bg-surface-sunken text-muted', success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning', danger: 'bg-danger/10 text-danger',
}
/** Text label always present, so color is never the only signal. */
export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: Tone }) {
  return <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>
}
interface FieldProps extends InputHTMLAttributes<HTMLInputElement> { label: string; hint?: string; error?: string }
export function Input({ label, hint, error, id, ...rest }: FieldProps) {
  const fid = id ?? rest.name ?? label
  const desc = error ? `${fid}-err` : hint ? `${fid}-hint` : undefined
  return (
    <div>
      <label htmlFor={fid} className="mb-1 block text-sm font-medium">{label}</label>
      <input id={fid} aria-invalid={error ? true : undefined} aria-describedby={desc}
        className={`min-h-11 w-full rounded-md border bg-surface px-3 ${error ? 'border-danger' : 'border-control'}`} {...rest} />
      {hint && !error && <p id={`${fid}-hint`} className="mt-1 text-sm text-muted">{hint}</p>}
      {error && <p id={`${fid}-err`} className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  )
}
export function Wordmark({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 144 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" className={className} role="img" aria-label="MEDVIA">
      <path d="M2 28V4l9 15 9-15v24" /><path d="M44 4H31v24h13M31 16h10" /><path d="M55 4v24h6c7 0 11-5 11-12S68 4 61 4z" />
      <path d="M82 4l10 24 10-24" /><path d="M112 4v24" /><path d="M122 28 132 4l10 24M126 20h12" />
    </svg>
  )
}

/** Static placeholder that reserves the card's footprint while products load (no looping animation). */
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div aria-hidden="true" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="rounded-lg border border-line p-3">
          <div className="aspect-square bg-surface-sunken" /><div className="mt-3 h-5 w-3/4 bg-surface-sunken" /><div className="mt-2 h-6 w-1/3 bg-surface-sunken" /><div className="mt-3 h-11 bg-surface-sunken" />
        </div>
      ))}
    </div>
  )
}

interface AreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label: string; hint?: string; error?: string }
export function Textarea({ label, hint, error, id, ...rest }: AreaProps) {
  const fid = id ?? rest.name ?? label
  const desc = error ? `${fid}-err` : hint ? `${fid}-hint` : undefined
  return (
    <div>
      <label htmlFor={fid} className="mb-1 block text-sm font-medium">{label}</label>
      <textarea id={fid} aria-invalid={error ? true : undefined} aria-describedby={desc} rows={5}
        className={`w-full rounded-md border bg-surface px-3 py-2 ${error ? 'border-danger' : 'border-control'}`} {...rest} />
      {hint && !error && <p id={`${fid}-hint`} className="mt-1 text-sm text-muted">{hint}</p>}
      {error && <p id={`${fid}-err`} className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  )
}
export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <header className="border-b border-line bg-surface-sunken">
      <Container className="py-10 md:py-14"><h1>{title}</h1>{lead && <p className="mt-3 text-lg text-muted">{lead}</p>}</Container>
    </header>
  )
}
