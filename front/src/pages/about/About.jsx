import React from 'react'
import Tech from '../../data/Tech'
import Values from '../../data/Values'
import { motion } from 'framer-motion'


export const About = () => {

  return (
    <section className='min-h-[calc(100vh-70px)] w-full px-4 py-14'>
      <div className='mx-auto w-full max-w-7xl'>

        <div className='grid md:grid-cols-2 gap-16 mb-16' >
          
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-2xl font-[600] text-[var(--text-white)] mb-8'
            >
              My Story
            </motion.h2>

            <div className='relative pl-8 before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent-primary)] before:via-[var(--bg-accent)] before:to-transparent'>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='mb-10 relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>THE BEGINNING</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>3 Month Foundation Course</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Started with HTML, CSS basics and JavaScript concepts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='mb-10 relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>DEEP DIVE</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>9 Month Intensive Program</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Mastered HTML, CSS, JavaScript, React, Node.js & Express</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='mb-10 relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>CONTINUOUS GROWTH</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>Self-Driven Improvement</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Building projects daily, constantly leveling up my skills</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className='relative'
              >
                <div className='absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20'></div>
                <div className='text-[var(--accent-primary)] text-sm font-[500] mb-2'>NEXT CHAPTER</div>
                <h3 className='text-[var(--text-white)] text-xl font-[600] mb-2'>Expanding Tech Arsenal</h3>
                <p className='text-[var(--text-secondary)] text-sm'>Learning Python and Django framework for backend development</p>
              </motion.div>

            </div>
          </div>


          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-2xl font-[600] text-[var(--text-white)] text-left md:text-right mb-8'
            >
              Tech Stack
            </motion.h2>
            <div className='grid grid-cols-2 gap-4'>
              {Tech?.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='group rounded-xl border border-[var(--border-color)] px-4 py-6 transition hover:border-[var(--border-color)]/50 hover:bg-[var(--glass-overlay)]/50'
                >
                  <div className='flex flex-col items-center text-center gap-2'>
                    <div 
                      className='text-[var(--text-secondary)] transition group-hover:scale-110 text-2xl'
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className='text-[var(--text-white)] font-[500] text-xs mb-0.5'>{tech.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>

        <div className='my-16'>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-2xl font-[600] text-[var(--text-white)] mb-6'
          >
            What I Value
          </motion.h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {Values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className='rounded-2xl border border-[var(--border-color)]  p-6'
              >
                <div className='mb-4 text-[var(--accent-primary)]'>
                  {value.icon}
                </div>
                <h3 className='text-[var(--text-white)] font-[600] text-lg mb-2'>{value.title}</h3>
                <p className='text-[var(--text-secondary)] text-sm leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='rounded-2xl border border-[var(--border-color)] p-8'
        >
          <h2 className='text-2xl font-[600] text-[var(--text-white)] mb-4'>Currently Working On</h2>
          <div className='space-y-3 text-[var(--text-secondary)]'>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className='flex items-start gap-3'
            >
              <span className='bg-[var(--accent)] mt-1'>▸</span>
              <p>Building full-stack applications with MERN stack</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className='flex items-start gap-3'
            >
              <span className='bg-[var(--accent)] mt-1'>▸</span>
              <p>Deepening my understanding of system design and architecture</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className='flex items-start gap-3'
            >
              <span className='bg-[var(--accent)] mt-1'>▸</span>
              <p>Exploring TypeScript and modern development patterns</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className='flex items-start gap-3'
            >
              <span className='bg-[var(--accent)] mt-1'>▸</span>
              <p>Contributing to open-source projects and learning from the community</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
