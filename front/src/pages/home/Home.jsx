import React from 'react'
import homeMain from '../../assets/images/home-main.svg'
import { MdWavingHand } from "react-icons/md";
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <>
      <section className='w-full h-100 flex items-center justify-center min-h-[650px] '>
        <div className='flex items-center justify-between w-full max-w-7xl'>

          <div>

            <p className='flex gap-4 items-center mb-2 text-[#fff] text-[2rem] '> Hey there! <MdWavingHand className='wave' /> </p>
            <p className='text-[#fff] text-[3rem] uppercase '>I'm <span className='text-[#8E6AFB]'> Shota Chikvaidze </span> </p>
            <p className="text-[2rem] text-white mt-10">
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "React Front-End Specialist",
                  "Node.js and Express Back-End Builder"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                className='text-[1.8rem]'
              />
            </p>

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

    </>
  )
}
