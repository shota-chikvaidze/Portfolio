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

export default function ContactExtras() {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <h3 className='text-[1.15rem] text-[var(--text-primary)] font-semibold'>Get in touch</h3>
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
    </div>
  )
}
