import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Helmet } from 'react-helmet'
import { API_NAME } from '../constant'
import { Container, Input, PageHeader, Textarea, buttonClass } from '../components/ui'

interface Fields { name: string; email: string; phone: string; company: string; message: string }
const empty: Fields = { name: '', email: '', phone: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<Fields>(empty)
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setState('sending')
    try {
      const response = await fetch(`${API_NAME}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (response.ok) { setState('sent'); setForm(empty) } else setState('failed')
    } catch (error) { console.error('Error:', error); setState('failed') }
  }
  const link = 'font-medium text-brand underline'
  return (
    <main id="main">
      <Helmet><title>Contact | MEDVIA</title><meta name="description" content="Contact MEDVIA about medical devices, surgical instruments and healthcare supplies." /></Helmet>
      <PageHeader title="Contact us" lead="Questions about medical devices, surgical instruments or healthcare supplies? Our support team will help." />
      <Container className="grid gap-10 py-10 md:grid-cols-[1fr_1.2fr] md:py-14">
        <div>
          <h2>Talk to us</h2>
          <ul className="mt-4 space-y-3">
            <li>WhatsApp or call: <a className={link} href="https://wa.me/923054440378">0305-4440378</a>, <a className={link} href="https://wa.me/923001086684">0300-1086684</a></li>
            <li>Email: <a className={link} href="mailto:biovasurgicals@gmail.com">biovasurgicals@gmail.com</a></li>
            <li className="text-sm text-muted">Website issues: <a className={link} href="tel:+923172327487">0317-2327487</a></li>
          </ul>
        </div>
        <form onSubmit={(e) => void submit(e)} className="space-y-4">
          <h2>Send us a message</h2>
          <Input label="Your name (required)" name="name" value={form.name} onChange={change} required autoComplete="name" />
          <Input label="Email address (required)" name="email" type="email" value={form.email} onChange={change} required autoComplete="email" />
          <Input label="Phone number (optional)" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={change} autoComplete="tel" />
          <Input label="Company name (optional)" name="company" value={form.company} onChange={change} autoComplete="organization" />
          <Textarea label="Message (required)" name="message" value={form.message} onChange={change} required />
          <button type="submit" disabled={state === 'sending'} className={buttonClass('primary')}>{state === 'sending' ? 'Sending' : 'Send message'}</button>
          <p role="status" className={state === 'failed' ? 'text-danger' : 'text-success'}>
            {state === 'sent' && 'Message sent. We will reply as soon as we can.'}
            {state === 'failed' && 'The message could not be sent. Check your connection and try again, or contact us on WhatsApp.'}
          </p>
        </form>
      </Container>
    </main>
  )
}
