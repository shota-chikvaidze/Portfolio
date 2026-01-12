import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si'

const Tech = [
  {
    name: 'React',
    type: 'Frontend Library',
    icon: <FaReact className='w-8 h-8' />,
    color: '#61DAFB',
  },
  {
    name: 'Node.js',
    type: 'Runtime Environment',
    icon: <FaNodeJs className='w-8 h-8' />,
    color: '#339933',
  },
  {
    name: 'MongoDB',
    type: 'NoSQL Database',
    icon: <SiMongodb className='w-8 h-8' />,
    color: '#47A248',
  },
  {
    name: 'Express',
    type: 'Backend Framework',
    icon: <SiExpress className='w-8 h-8' />,
    color: '#fff',
  },
  {
    name: 'JavaScript',
    type: 'Programming Language',
    icon: <SiJavascript className='w-8 h-8' />,
    color: '#F7DF1E',
  },
  {
    name: 'TypeScript',
    type: 'Typed Superset of JavaScript',
    icon: <SiTypescript className='w-8 h-8' />,
    color: '#3178C6',
  },
  {
    name: 'Tailwind CSS',
    type: 'Utility-First CSS Framework',
    icon: <SiTailwindcss className='w-8 h-8' />,
    color: '#06B6D4',
  },
  {
    name: 'Git',
    type: 'Version Control System',
    icon: <FaGitAlt className='w-8 h-8' />,
    color: '#F05032',
  },
]

export default Tech
