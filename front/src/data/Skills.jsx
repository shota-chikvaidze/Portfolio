import { FaBrain, FaLightbulb, FaUsers, FaCode, FaRocket, FaTools, FaChartLine, FaComments } from 'react-icons/fa'


const Skills = [
  {
    name: 'Problem Solving',
    icon: <FaBrain size={22} className='text-[var(--skill-strategic)]' />,
    desc: 'Breaking down complex challenges into practical solutions.'
  },
  {
    name: 'Critical Thinking',
    icon: <FaLightbulb size={22} className='text-[var(--skill-creative)]' />,
    desc: 'Analyzing problems logically and making smart decisions.'
  },
  {
    name: 'Collaboration',
    icon: <FaUsers size={22} className='text-[var(--skill-collaborative)]' />,
    desc: 'Working effectively in teams and communicating clearly.'
  },
  {
    name: 'Clean Code',
    icon: <FaCode size={22} className='text-[var(--skill-technical)]' />,
    desc: 'Writing maintainable, readable, and well-structured code.'
  },
  {
    name: 'Fast Learning',
    icon: <FaRocket size={22} className='text-[var(--skill-execution)]' />,
    desc: 'Adapting quickly to new technologies and frameworks.'
  },
  {
    name: 'Debugging',
    icon: <FaTools size={22} className='text-[var(--skill-adaptability)]' />,
    desc: 'Identifying and fixing issues efficiently and systematically.'
  },
  {
    name: 'Growth Mindset',
    icon: <FaChartLine size={22} className='text-[var(--skill-performance)]' />,
    desc: 'Continuously improving skills and embracing challenges.'
  },
  {
    name: 'Communication',
    icon: <FaComments size={22} className='text-[var(--skill-communication)]' />,
    desc: 'Explaining technical concepts clearly to any audience.'
  },
]

export default Skills