'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Layout from '@/components/Layout'
import { TbApi } from 'react-icons/tb';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaCode  } from 'react-icons/fa';
import { 
  SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb, SiCplusplus, SiRedux 
} from 'react-icons/si';
import { useState } from 'react'

const projects = [
  { 
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1741366329165.png", 
    title: "E-Commerce client",
    link: "https://soft-world-client-shyams-projects-623c4087.vercel.app/",
    description: "Full-stack e-commerce platform of paid software" 
  },
  { 
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1742452644875.png", 
    title: "PassSG", 
    link: "https://password-manager-shyams-projects.vercel.app/", 
    description: "Secure password manager application" 
  },
  { 
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1742453005644.png", 
    title: "SMG_Link",
    link: "https://bitlink-shyams-projects.vercel.app/", 
    description: "URL shortener and analytics dashboard" 
  },
  { 
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1742453306935.png", 
    title: "Ecommerce admin",
    link: "https://ecomm-admin-orpin.vercel.app", 
    description: "Admin dashboard for e-commerce platform" 
  }
]

const skills = [
  // Core Frontend
  { name: "HTML5", icon: FaHtml5, x: 15, y: 15 },
  { name: "CSS3", icon: FaCss3, x: 15, y: 30 },
  { name: "JavaScript", icon: FaJs, x: 15, y: 45 },
  { name: "ES6/ES5", icon: FaJs, x: 15, y: 60 },
  
  // React Ecosystem
  { name: "React", icon: FaReact, x: 30, y: 20 },
  { name: "Next.js", icon: SiNextdotjs, x: 30, y: 40 },
  { name: "Redux", icon: SiRedux, x: 30, y: 60 },
  
  // Backend
  { name: "Node.js", icon: FaNodeJs, x: 50, y: 25 },
  { name: "Express.js", icon: SiExpress, x: 50, y: 45 },
  
  // Database
  { name: "MongoDB", icon: SiMongodb, x: 70, y: 35 },
  
  // Styling
  { name: "Tailwind CSS", icon: SiTailwindcss, x: 70, y: 55 },
  
  // Programming
  { name: "Python", icon: FaPython, x: 85, y: 20 },
  { name: "C", icon: SiCplusplus, x: 85, y: 40 },
  { name: "C++", icon: SiCplusplus, x: 85, y: 60 },
  
  // Tools
  { name: "Git", icon: FaGit, x: 50, y: 75 },
  { name: "GitHub", icon: FaGithub, x: 65, y: 75 },
  
  // Concepts
  { name: "DSA", icon: FaCode, x: 15, y: 75 },
  { name: "API Integration", icon: TbApi, x: 30, y: 75 },
  { name: "Responsive UI", icon: FaCss3, x: 85, y: 75 }
];

const connections = [
  [0, 1],
  [1, 2]
]

export default function Home() {
  
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  
  // For external links, use window.location.href
  const handleProjectClick = (project) => {
    window.location.href = project.link;
  }

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')

  const handlechange = (e) => {
    if (e.target.name === 'Name') {
      setName(e.target.value)
    } else if (e.target.name === 'Email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'Message') {
      setMessage(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name, Email, Message })
      })
      const data = await res.json()
      console.log(data)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error sending contact:', error)
    }
  }

  return (
    <Layout>
      {/* Animated Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 z-50"
        style={{ scaleX }}
      />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh'
            }}
            animate={{
              x: ['0%', '100%', '0%'],
              y: ['0%', '100%', '0%'],
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Shyam Ghosh
              </span>
              <motion.span 
                className="block text-xl md:text-3xl mt-6 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </motion.span>
            </h1>

            {/* Animated Tech Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-4xl mx-auto"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              {['Full-Stack', 'SEO', 'UI/UX Design', 'Blogging'].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-400/20 backdrop-blur-lg"
                >
                  <div className="text-emerald-400 mb-2">
                    <FaCode className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{tech}</h3>
                  <p className="text-gray-400 text-sm mt-2">Innovation Driven Solutions</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-[2rem] border border-emerald-400/20 p-8"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent z-10" />
                  <img
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/80 transition-opacity">
                    <button
                      className="px-8 py-3 bg-emerald-400/10 border border-emerald-400/20 rounded-full backdrop-blur-lg hover:bg-emerald-400/20 transition-colors"
                      onClick={() => handleProjectClick(project)}
                    >
                      Explore Project
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Network */}
      <section className="min-h-screen relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-[2rem] border border-emerald-400/20 p-8"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Skill Matrix
            </h2>

            <div className="relative h-[600px] w-full bg-gray-950 rounded-2xl">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="absolute w-20 h-20 bg-emerald-400/10 border border-emerald-400/20 rounded-xl flex items-center justify-center backdrop-blur-lg"
                  style={{
                    left: `${skill.x}%`,
                    top: `${skill.y}%`
                  }}
                  whileHover={{ scale: 1.1 }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                >
                  <skill.icon className="text-3xl text-emerald-400" />
                  <span className="absolute bottom-2 text-xs font-bold">{skill.name}</span>
                </motion.div>
              ))}
              
              {/* Animated Connections */}
              <svg className="absolute inset-0">
                {connections.map(([start, end]) => (
                  <motion.line
                    key={`${start}-${end}`}
                    x1={skills[start].x + 10}
                    y1={skills[start].y + 10}
                    x2={skills[end].x + 10}
                    y2={skills[end].y + 10}
                    stroke="rgba(16, 185, 129, 0.2)"
                    strokeWidth="2"
                    animate={{
                      strokeDasharray: ["0, 1000", "1000, 0"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen relative py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-[2rem] border border-emerald-400/20 p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              CONNECT TO ME 
            </h2>

            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={handlechange}
                  name='Name'
                  value={Name}
                  className="w-full bg-gray-950/50 border border-emerald-400/20 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <input
                  type="email"
                  onChange={handlechange}
                  name='Email'
                  value={Email}
                  placeholder="Your Email"
                  className="w-full bg-gray-950/50 border border-emerald-400/20 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <textarea
                  rows="5"
                  onChange={handlechange}
                  name='Message'
                  value={Message}
                  placeholder="Your Message"
                  className="w-full bg-gray-950/50 border border-emerald-400/20 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-emerald-400/10 border border-emerald-400/20 rounded-full backdrop-blur-lg hover:bg-emerald-400/20 transition-colors font-bold flex items-center gap-3"
                >
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Send Message
                  </span>
                  <i className="fa-solid fa-arrow-right text-emerald-400" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
