import React from 'react'
import homeMain from '../../assets/images/home-main.svg'
import { MdWavingHand } from "react-icons/md";
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom'
import Skills from '../../data/Skills';

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

            <p className='flex gap-4 items-center mb-2 text-[#fff] text-[2rem] '> Hey there! <MdWavingHand className='wave' /> </p>
            <p className='text-[#fff] text-[3rem] uppercase '>I'm <span className='text-[#8E6AFB]'> Shota Chikvaidze </span> </p>
            <p className="py-2">
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "React Front-End Specialist",
                  "Node.js and Express Back-End Builder"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                className='text-[1.2rem] text-white/70'
              />
            </p>
            <p className='text-white/70 py-2'>I build performant, accessible web apps with a focus on clean code, UX and pragmatic architecture. I enjoy crafting apps that scale and are pleasent to work on.</p>

            <div className='flex gap-3 py-2'>
              <button onClick={projNavigate} className="w-[140px] h-[35px] rounded-xl bg-[#976ae0] text-white cursor-pointer text-[15px] border border-transparent hover:bg-transparent hover:border-white/10 transition-all duration-300"> View Projects </button>
              <button onClick={contNavigate} className='w-[140px] h-[35px] bg-transparent text-white/70 rounded-xl border border-white/10 text-[15px] cursor-pointer hover:border-white/40 transition '>Contact</button>
            </div>

          </div>

          <div>

            <img src={homeMain} alt='Coding guy image' className='w-[430px] h-auto' />

          </div>

        </div>
      </section>

      <section className='w-full h-auto flex justify-center'>
        <div className=' w-full max-w-7xl flex flex-col min-h-[400px] gap-4 text-[#fff] '>

          <h4 className='py-5 uppercase text-[2rem] '>Get to Know Me</h4>

          <p className='tracking-[2px]'>
            I'm Shota — a web developer with a strong focus on building fast, clean, and functional applications. I work mainly with <span className='text-[#8E6AFB]'> React and Node.js, </span> and I enjoy turning ideas into real, well-structured products. I care about writing maintainable code, designing clear user experiences, and constantly improving both my skills and the quality of my work.
          </p>

          <p className='tracking-[2px]'>
            Programming isn't something I do casually — it's what I <span className=' text-[#8E6AFB]'> actively study, practice, and level up in every day. </span> I like creating things that solve real problems, look good, and perform even better. My mindset is simple: build, break, learn, improve.
          </p>

          <p className='tracking-[2px]'>
            Right now, I'm expanding my skills, taking on more complex projects, and moving toward full-stack mastery — one step at a time.
          </p>

        </div>
      </section>

      <section className='w-full py-10'>
        <div className='max-w-7xl mx-auto px-4'>
          <h3 className='text-2xl font-semibold text-slate-100 mb-7'>Main Skills</h3>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {Skills.map((skill) => (
              <div key={skill.name} className="cursor-pointer relative overflow-hidden flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 before:absolute before:inset-0 before:bg-[#976ae0]/20 before:transition-transform before:duration-300 before:translate-y-0 hover:before:-translate-y-full before:z-0 ">
                <div className='flex-shrink-0'>{skill.icon}</div>
                <div>
                  <div className='font-semibold text-slate-100'>{skill.name}</div>
                  <div className='text-sm text-slate-300 mt-1'>{skill.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}