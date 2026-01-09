import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si'

const Tech = [
    { name: 'React', icon: <FaReact className='w-8 h-8' />, level: 'Advanced', color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs className='w-8 h-8' />, level: 'Advanced', color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb className='w-8 h-8' />, level: 'Intermediate', color: '#47A248' },
    { name: 'Express', icon: <SiExpress className='w-8 h-8' />, level: 'Advanced', color: '#fff' },
    { name: 'JavaScript', icon: <SiJavascript className='w-8 h-8' />, level: 'Advanced', color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript className='w-8 h-8' />, level: 'Intermediate', color: '#3178C6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='w-8 h-8' />, level: 'Advanced', color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt className='w-8 h-8' />, level: 'Intermediate', color: '#F05032' },
]


export default Tech