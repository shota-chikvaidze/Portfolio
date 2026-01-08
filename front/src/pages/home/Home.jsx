import React from 'react'
import homeMain from '../../assets/images/newImage.jpg'
import { MdWavingHand } from "react-icons/md";
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom'
import Skills from '../../data/Skills';
import { motion } from 'framer-motion';
import { HiLightningBolt } from "react-icons/hi";
import { PiTargetDuotone } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";

export const Home = () => {

  const navigate = useNavigate()

  const projNavigate = () => {
    navigate('/projects')
  }

  const contNavigate = () => {
    navigate('/contact')
  }

  return (
    <>
      <section className='w-full h-100 flex items-center justify-center min-h-[650px] '>
        <div className='flex items-center justify-between w-full max-w-7xl'>

          <div className='max-w-2xl'>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className='flex gap-4 items-center mb-2 text-[#E3E3E3] text-[2rem]'
            > 
              Hey there! <MdWavingHand className='wave' /> 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className='text-[#E3E3E3] text-[3rem] uppercase'
            >
              I'm <span className='text-[#647cd5]'> Shota Chikvaidze </span> 
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="py-2"
            >
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "React Front-End Specialist",
                  "Node.js and Express Back-End Builder"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                className='text-[1.2rem] text-[#E3E3E3]'
              />
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className='text-[#E3E3E3] py-2'
            >
              I build performant, accessible web apps with a focus on clean code, UX and pragmatic architecture. I enjoy crafting apps that scale and are pleasent to work on.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className='flex gap-3 py-2'
            >
              <button onClick={projNavigate} className="w-[140px] h-[35px] rounded-xl bg-[#456882] text-white cursor-pointer text-[15px] border border-transparent hover:bg-transparent hover:border-white/10 transition-all duration-300"> View Projects </button>
              <button onClick={contNavigate} className='w-[140px] h-[35px] bg-transparent text-[#E3E3E3] rounded-xl border border-white/10 text-[15px] cursor-pointer hover:border-white/40 transition '>Contact</button>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className='relative group'
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-[#647cd5] to-[#456882] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse'></div>
            <div className='relative bg-gradient-to-br from-[#456882] to-[#234C6A] rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-500'>
              <img 
                src={homeMain} 
                alt='Coding guy image' 
                className='w-[430px] rounded-2xl h-auto  transition-shadow duration-300' 
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section className='w-full py-20 flex justify-center'>
        <div className='w-full max-w-7xl'>

          <div className='grid md:grid-cols-2 gap-16 items-center'>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#647cd5]/20 to-[#456882]/20 rounded-3xl blur-3xl'></div>
              <div className='relative bg-gradient-to-br from-[#234C6A]/50 to-[#1B3C53]/50 backdrop-blur border border-white/10 rounded-3xl p-12'>
                <div className='space-y-8'>
                  
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-14 h-14 rounded-xl border border-[#FFD700]/30 flex items-center justify-center'>
                      <HiLightningBolt className='text-3xl text-[#FFD700]' />
                    </div>
                    <div>
                      <h5 className='text-xl font-semibold text-[#E3E3E3] mb-2'>Performance First</h5>
                      <p className='text-[#E3E3E3]/70 text-sm'>Clean, optimized code that scales</p>
                    </div>
                  </div>

                  <div className='h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>

                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-14 h-14 rounded-xl border border-[#FF6B6B]/30 flex items-center justify-center'>
                      <PiTargetDuotone className='text-3xl text-[#FF6B6B]' />  
                    </div>
                    <div>
                      <h5 className='text-xl font-semibold text-[#E3E3E3] mb-2'>Solution Focused</h5>
                      <p className='text-[#E3E3E3]/70 text-sm'>Turning problems into working products</p>
                    </div>
                  </div>

                  <div className='h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent'></div>

                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-14 h-14 rounded-xl border border-[#4ECDC4]/30 flex items-center justify-center'>
                      <FiTrendingUp className='text-3xl text-[#4ECDC4]' />
                    </div>
                    <div>
                      <h5 className='text-xl font-semibold text-[#E3E3E3] mb-2'>Continuous Growth</h5>
                      <p className='text-[#E3E3E3]/70 text-sm'>Leveling up through daily practice</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='space-y-6'
            >
              <div>
                <h4 className='text-4xl md:text-5xl font-bold text-[#E3E3E3] leading-tight'>
                  Build. Break. <br />
                  <span className='bg-gradient-to-r from-[#647cd5] to-[#456882] bg-clip-text text-transparent'>
                    Learn. Repeat.
                  </span>
                </h4>
              </div>

              <p className='text-lg text-[#E3E3E3]/80 leading-relaxed'>
                That's my approach to development. I focus on creating fast, maintainable web applications 
                with <span className='text-[#647cd5] font-semibold'>React</span> and <span className='text-[#647cd5] font-semibold'>Node.js</span>, 
                constantly improving my craft through real projects and daily practice.
              </p>

              <div className='flex flex-wrap gap-4 pt-4'>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[#234C6A]/30 border border-white/10 tranistion duration-300 hover:-translate-y-2'>
                  <div className='w-2 h-2 rounded-full bg-[#647cd5] animate-pulse'></div>
                  <span className='text-sm text-[#E3E3E3]/80'>MERN Stack</span>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[#234C6A]/30 border border-white/10 tranistion duration-300 hover:-translate-y-2'>
                  <div className='w-2 h-2 rounded-full bg-[#647cd5] animate-pulse'></div>
                  <span className='text-sm text-[#E3E3E3]/80'>Full Stack</span>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[#234C6A]/30 border border-white/10 tranistion duration-300 hover:-translate-y-2'>
                  <div className='w-2 h-2 rounded-full bg-[#647cd5] animate-pulse'></div>
                  <span className='text-sm text-[#E3E3E3]/80'>Always Learning</span>
                </div>
              </div>
            </motion.div>

            

          </div>

        </div>
      </section>

      <section className='w-full py-10'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='text-2xl font-semibold text-slate-100 mb-7'
          >
            Main Skills
          </motion.h3>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {Skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="cursor-pointer relative overflow-hidden flex items-center gap-4 rounded-xl bg-[#234C6A] border border-white/10 p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:bg-[#456882]/20 before:transition-transform before:duration-300 before:translate-y-0 hover:before:-translate-y-full before:z-0 ">
                <div className='flex-shrink-0'>{skill.icon}</div>
                <div>
                  <div className='font-semibold text-slate-100'>{skill.name}</div>
                  <div className='text-sm text-slate-300 mt-1'>{skill.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
