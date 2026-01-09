import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { services } from '../../data/Services'
import { process } from '../../data/Process'
import Tech from '../../data/Tech'

export const Services = () => {
  return (
    <section className='min-h-[calc(100vh-70px)] w-full px-4 py-14'>
      <div className='mx-auto w-full max-w-7xl'>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='mb-16 text-center'
        >
          <h1 className='text-5xl font-[700] tracking-tight text-[var(--text-white)] mb-4'>Services</h1>
          <p className='text-lg text-[var(--text-secondary)] max-w-2xl mx-auto'>
            Professional web development services to bring your ideas to life with modern technology and clean code.
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 mb-20'>
          {services?.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
              className='group relative rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur p-8 transition-all duration-300 hover:border-[var(--border-color)]/50 hover:bg-[var(--glass-overlay)]/50 hover:-translate-y-2 hover:shadow-2xl'
            >
              <div 
                className='mb-6 inline-flex rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110'
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  color: service.color
                }}
              >
                {service.icon}
              </div>

              <h3 className='text-2xl font-[600] text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300'>
                {service.title}
              </h3>

              <p className='text-[var(--text-secondary)] mb-6 leading-relaxed'>
                {service.description}
              </p>

              <ul className='space-y-3'>
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 + idx * 0.05, ease: "easeOut" }}
                    className='flex items-start gap-3 text-[var(--text-secondary)] text-sm'
                  >
                    <FiCheckCircle className='text-[var(--accent-primary)] mt-0.5 flex-shrink-0' />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='mb-20'
        >
          <h2 className='text-3xl font-[700] text-[var(--text-primary)] mb-8 text-center'>Tech Stack</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {Tech.slice(4).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className='flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur p-6 transition-all duration-300 hover:border-[var(--border-color)]/50 hover:bg-[var(--glass-overlay)]/50 hover:-translate-y-1'
              >
                <div style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <span className='text-[var(--text-primary)] font-[500]'>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='mb-20'
        >
          <h2 className='text-3xl font-[700] text-[var(--text-primary)] mb-8 text-center'>How I Work</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className='relative rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--glass-overlay)] to-transparent backdrop-blur p-6'
              >
                <div className='text-5xl font-[700] text-[var(--accent-primary)]/20 mb-4'>
                  {item.step}
                </div>
                <h3 className='text-xl font-[600] text-[var(--text-primary)] mb-3'>{item.title}</h3>
                <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--bg-accent)]/10 backdrop-blur p-12 text-center'
        >
          <h2 className='text-3xl font-[700] text-[var(--text-primary)] mb-4'>Ready to Start Your Project?</h2>
          <p className='text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto'>
            Let's discuss your ideas and create something amazing together. I'm available for freelance projects and collaborations.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a 
              href='/contact'
              className='px-8 py-3 rounded-xl bg-[var(--accent-primary)] text-[var(--text-primary)] font-[500] hover:bg-[var(--accent-primary-hover)] transition-all duration-300 shadow-lg shadow-[var(--accent-primary)]/30 hover:shadow-[var(--accent-primary)]/50 hover:-translate-y-0.5'
            >
              Get In Touch
            </a>
            <a 
              href='/projects'
              className='px-8 py-3 rounded-xl bg-[var(--glass-overlay)] border border-[var(--border-color)] text-[var(--text-primary)] font-[500] hover:bg-[var(--glass-overlay)]/50 transition-all duration-300'
            >
              View My Work
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
