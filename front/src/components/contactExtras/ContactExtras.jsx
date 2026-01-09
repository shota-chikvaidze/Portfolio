import React, { useState } from 'react'

const ContactMethod = ({title, subtitle, children}) => (
  <div className='bg-[linear-gradient(180deg,var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] p-4 rounded-xl shadow-sm flex gap-3 items-start'>
    <div className='flex-1'>
      <div className='text-[var(--text-primary)] text-sm font-semibold'>{title}</div>
      <div className='text-[0.9rem] text-[var(--text-muted)] mt-1'>{subtitle}</div>
      <div className='mt-3 text-sm'>{children}</div>
    </div>
  </div>
)

const FAQItem = ({q, a}) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)} className='w-full text-left flex items-center justify-between py-3 px-4 bg-[linear-gradient(180deg, var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px]'>
        <div>
          <div className='text-[var(--text-primary)] font-medium'>{q}</div>
          <div className='text-xs text-[var(--text-muted)] mt-1'>{open ? 'Hide' : 'Read answer'}</div>
        </div>
        <div className='text-xl text-[var(--text-muted)]'>{open ? '-' : '+'}</div>
      </button>
      {open && (
        <div className='p-4 text-[var(--text-muted)] text-sm'>
          {a}
        </div>
      )}
    </div>
  )
}

export default function ContactExtras() {
  return (
    <aside className='flex flex-col gap-4'>
      <div>
        <h3 className='text-[1.15rem] text-[var(--text-primary)] font-semibold'>Get in touch</h3>
        <p className='text-[var(--text-muted)] mt-2 text-sm'>Prefer a different channel? Pick one - I usually reply within 1-2 business days.</p>
      </div>

      <ContactMethod title='Email' subtitle='Use this for detailed inquiries'>
        <a href='mailto:shchikvaidze1@gmail.com' className='text-sm  text-[var(--text-primary)] underline'>shchikvaidze1@gmail.com</a>
      </ContactMethod>

      <ContactMethod title='Social' subtitle='Quick messages or DM'>
        <div className='flex gap-3 flex-wrap'>
          <a target='_blank' className='text-[var(--text-primary)] px-3 py-2 bg-[linear-gradient(180deg, var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] text-sm' href='https://www.facebook.com/shota.chikvaidze.90/'>Facebook</a>
          <a target='_blank' className='text-[var(--text-primary)] px-3 py-2 bg-[linear-gradient(180deg, var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] text-sm' href='https://www.linkedin.com/in/shota-chikvaidze-a6845b370/'>LinkedIn</a>
          <a target='_blank' className='text-[var(--text-primary)] px-3 py-2 bg-[linear-gradient(180deg, var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] text-sm' href='https://github.com/shota-chikvaidze'>GitHub</a>
        </div>
      </ContactMethod>

      <div>
        <h4 className='font-semibold text-[var(--text-primary)]'>FAQ</h4>
        <div className='mt-2 flex flex-col gap-2'>
          <FAQItem q='What is your response time?' a='Typically within 1-2 business days. For urgent matters include "URGENT" in the subject.' />
          <FAQItem q='Do you work with remote teams?' a='Yes — I collaborate with distributed teams regularly.' />
        </div>
      </div>

      <div>
        <h4 className='font-semibold text-[var(--text-primary)]'>Recent messages</h4>
        <div className='mt-2 flex flex-col gap-2'>
          <div className='bg-[linear-gradient(180deg,var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] p-3'>
            <div className='text-sm font-medium text-[var(--text-primary)]'>Design collaboration</div>
            <div className='text-[var(--text-muted)] text-xs mt-1'>"Loved the quick prototype - let's iterate."</div>
          </div>
          <div className='bg-[linear-gradient(180deg, var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] p-3'>
            <div className='text-sm font-medium text-[var(--text-primary)]'>New project inquiry</div>
            <div className='text-[var(--text-muted)] text-xs mt-1'>"Are you available for a 3-week contract?"</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
