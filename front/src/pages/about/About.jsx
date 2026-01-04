import React from 'react'
import Tech from '../../data/Tech'
import Values from '../../data/Values'


export const About = () => {

  return (
    <section className='min-h-[calc(100vh-70px)] w-full px-4 py-14'>
      <div className='mx-auto w-full max-w-7xl'>
        
        <div className='mb-16'>
          <h1 className='text-4xl font-[600] tracking-tight text-[#E3E3E3] mb-4'>About Me</h1>
          <p className='text-lg text-[#E3E3E3]/80 font-[300] max-w-3xl'>
            Full-stack developer passionate about creating elegant solutions to complex problems.
          </p>
        </div>

        <div className='mb-16 rounded-2xl border border-white/10 bg-[#456882]/30 backdrop-blur-md p-8'>
          <h2 className='text-2xl font-[600] text-[#E3E3E3] mb-6'>My Story</h2>
          <div className='space-y-4 text-[#E3E3E3] font-[400] leading-relaxed'>
            <p>
              I'm Shota - a web developer with a strong focus on building fast, clean, and functional applications. 
              I work mainly with <span className='text-[#647cd5] font-[500]'>React and Node.js</span>, and I enjoy 
              turning ideas into real, well-structured products.
            </p>
            <p>
              Programming isn't something I do casually - it's what I <span className='text-[#647cd5] font-[500]'>actively 
              study, practice, and level up in every day</span>. I care about writing maintainable code, designing 
              clear user experiences, and constantly improving both my skills and the quality of my work.
            </p>
            <p>
              My mindset is simple: <span className='text-[#647cd5] font-[500]'>build, break, learn, improve</span>. 
              Right now, I'm expanding my skills, taking on more complex projects, and moving toward full-stack 
              mastery - one step at a time.
            </p>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-2xl font-[600] text-white mb-6'>Tech Stack</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {Tech.map((tech) => (
              <div 
                key={tech.name}
                className='group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:border-white/20 hover:bg-white/10'
              >
                <div className='flex flex-col items-center text-center gap-3'>
                  <div 
                    className='text-white/80 transition group-hover:scale-110'
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className='text-white font-[500] text-sm mb-1'>{tech.name}</h3>
                    <p className='text-white/60 text-xs'>{tech.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-2xl font-[600] text-white mb-6'>What I Value</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {Values.map((value, index) => (
              <div 
                key={index}
                className='rounded-2xl border border-white/10 bg-[#456882]/30 backdrop-blur-md p-6'
              >
                <div className='mb-4 text-[#647cd5]'>
                  {value.icon}
                </div>
                <h3 className='text-white font-[600] text-lg mb-2'>{value.title}</h3>
                <p className='text-white/70 text-sm leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-2xl border border-white/10 bg-gradient-to-br from-[#456882]/10 to-transparent backdrop-blur p-8'>
          <h2 className='text-2xl font-[600] text-white mb-4'>Currently Working On</h2>
          <div className='space-y-3 text-white/80'>
            <div className='flex items-start gap-3'>
              <span className='text-[#8E6AFB] mt-1'>▸</span>
              <p>Building full-stack applications with MERN stack</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-[#8E6AFB] mt-1'>▸</span>
              <p>Deepening my understanding of system design and architecture</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-[#8E6AFB] mt-1'>▸</span>
              <p>Exploring TypeScript and modern development patterns</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-[#8E6AFB] mt-1'>▸</span>
              <p>Contributing to open-source projects and learning from the community</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
