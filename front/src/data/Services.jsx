import { FiCode, FiLayout, FiServer, FiZap } from 'react-icons/fi'


export const services = [
    {
      icon: <FiLayout className='text-4xl' />,
      title: "Frontend Development",
      description: "Building responsive, performant, and accessible user interfaces with modern frameworks and best practices.",
      features: [
        "React & Next.js applications",
        "Responsive design & mobile-first",
        "Performance optimization",
        "Component libraries & design systems"
      ],
      color: "#61DAFB"
    },
    {
      icon: <FiServer className='text-4xl' />,
      title: "Backend Development",
      description: "Creating robust, scalable server-side applications with RESTful APIs and efficient database management.",
      features: [
        "Node.js & Express servers",
        "RESTful API design",
        "Authentication & authorization",
        "Database design & optimization"
      ],
      color: "#68A063"
    },
    {
      icon: <FiCode className='text-4xl' />,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development from concept to deployment with seamless integration.",
      features: [
        "MERN stack applications",
        "Real-time features (WebSockets)",
        "Third-party API integrations",
        "Deployment & DevOps"
      ],
      color: "#647cd5"
    },
    {
      icon: <FiZap className='text-4xl' />,
      title: "Performance Optimization",
      description: "Analyzing and improving application performance for faster load times and better user experience.",
      features: [
        "Code splitting & lazy loading",
        "Bundle size optimization",
        "Caching strategies",
        "SEO optimization"
      ],
      color: "#F59E0B"
    }
]
