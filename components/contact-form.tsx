'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { programs } from '@/lib/site-data';

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
  preferredTime?: string;
  message?: string;
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  program: '',
  preferredTime: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (state: FormState): FormErrors => {
    const e: FormErrors = {};
    if (!state.name.trim()) e.name = 'Please enter your name.';
    else if (state.name.trim().length < 2) e.name = 'Name must be at least 2 characters.';

    if (!state.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      e.email = 'Please enter a valid email address.';

    if (!state.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(state.phone))
      e.phone = 'Please enter a valid phone number.';

    if (!state.program) e.program = 'Please select a program.';
    if (!state.preferredTime.trim()) e.preferredTime = 'Please tell us when you can visit.';
    if (!state.message.trim()) e.message = 'Please tell us a little about your goals.';
    else if (state.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters.';

    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // TODO: connect to backend/email API
    console.log('Contact form submission:', form);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSuccess(true);
    setForm(initial);
  };

  const inputBase =
    'w-full rounded-lg border bg-ink-950/60 px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-volt-500/60';
  const ok = 'border-white/10';
  const bad = 'border-red-500/60';

  if (success) {
    return (
      <div className="rounded-2xl border border-volt-500/30 bg-ink-900/60 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-volt-500" />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">Message sent!</h3>
        <p className="mt-2 text-sm text-white/60">
          Thanks for reaching out. Our team will contact you within 24 hours to confirm your free trial.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-volt-500 hover:text-volt-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <Field label="Full Name" error={errors.name} htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Arjun Sharma"
          className={`${inputBase} ${errors.name ? bad : ok}`}
          aria-invalid={!!errors.name}
        />
      </Field>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email Address" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? bad : ok}`}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            className={`${inputBase} ${errors.phone ? bad : ok}`}
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      {/* Program + Time */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Interested Program" error={errors.program} htmlFor="program">
          <select
            id="program"
            name="program"
            value={form.program}
            onChange={handleChange}
            className={`${inputBase} ${errors.program ? bad : ok}`}
            aria-invalid={!!errors.program}
          >
            <option value="">Select a program</option>
            {programs.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — help me choose</option>
          </select>
        </Field>
        <Field label="Preferred Time to Visit" error={errors.preferredTime} htmlFor="preferredTime">
          <input
            id="preferredTime"
            name="preferredTime"
            type="text"
            value={form.preferredTime}
            onChange={handleChange}
            placeholder="e.g. Sat morning, weekdays after 7pm"
            className={`${inputBase} ${errors.preferredTime ? bad : ok}`}
            aria-invalid={!!errors.preferredTime}
          />
        </Field>
      </div>

      {/* Message */}
      <Field label="Your Message" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your fitness goals, experience level, or any questions you have…"
          className={`${inputBase} resize-none ${errors.message ? bad : ok}`}
          aria-invalid={!!errors.message}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-volt-500 px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink-950 shadow-lg shadow-volt-500/30 transition-all hover:bg-volt-400 hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/70">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
