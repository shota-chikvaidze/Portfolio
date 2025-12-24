import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiJsonwebtokens, SiAxios } from 'react-icons/si'


const Skills = [
  {
    name: 'React',
    icon: <FaReact size={22} className='text-[#61dafb]' />,
    desc: 'Modern front-end with hooks, context, and performance.'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={22} className='text-[#3c873a]' />,
    desc: 'Efficient back-end APIs and real-time apps.'
  },
  {
    name: 'Express',
    icon: <SiExpress size={22} className='text-white' />,
    desc: 'RESTful API design and middleware.'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={22} className='text-[#47a248]' />,
    desc: 'NoSQL data modeling and aggregation.'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={22} className='text-[#3178c6]' />,
    desc: 'Type-safe scalable codebases.'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={22} className='text-[#38bdf8]' />,
    desc: 'Rapid UI prototyping and design.'
  },
  {
    name: 'JWT',
    icon: <SiJsonwebtokens size={22} className='text-[#f4b400]' />,
    desc: 'Secure authentication and authorization.'
  },
  {
    name: 'Axios',
    icon: <SiAxios size={22} className='text-[#5a29e4]' />,
    desc: 'Robust API communication.'
  },
]

export default Skills