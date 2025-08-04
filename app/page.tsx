"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Server,
  Cloud,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "projects", "skills", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  const projects = [
    {
      title: "TaskFlow",
      description: "Local job matching platform connecting job seekers with employers",
      tech: ["React", "Node.js", "MySQL", "RazorPay API"],
      github: "https://github.com/Imbasava/Task-connection-service-application",
      demo: "https://task-connection-service-application.vercel.app/",
    },
    {
      title: "Edge ML Library for IoT Security",
      description: "Lightweight machine learning library for IoT device security",
      tech: ["Python", "TinyML", "TensorFlow Lite"],
      github: "https://github.com/Imbasava/SOC-Tools-To-Defend-The-Cyber-Attack",
      demo: "https://github.com/Imbasava/SOC-Tools-To-Defend-The-Cyber-Attack",
    },
    {
      title: "Deliver While You Travel",
      description: "Peer-to-peer delivery system for travelers",
      tech: ["Spring Boot", "React", "Maps API"],
      github: "https://github.com/Imbasava/Deliver-While-You-Travel",
      demo: "https://github.com/Imbasava/Deliver-While-You-Travel",
    },
  ]

  const skills = {
    "Programming Languages": ["Java", "Python", "C/C++", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Spring Boot", "React.js", "Node.js", "TensorFlow", "scikit-learn"],
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools & Technologies": ["AWS", "Docker", "Kubernetes", "Git", "Snort IDS", "ELK Stack", "ClamAV"],
    "Other Skills": ["REST APIs", "IoT", "Microservices", "Kafka", "Grafana", "Linux"],
  }

  const achievements = [
    "AWS Cloud Practitioner (2025)",
    "IoT Workshop – BMSIT & DSCE",
    "Solved 200+ DSA problems (LeetCode, GFG)",
    "Maintained CGPA > 8.0",
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
                BN
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12 scale-150"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/profile-photo.jpg"
                    alt="Basavaraj Nayak"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.currentTarget.style.display = "none"
                      e.currentTarget.nextElementSibling.style.display = "flex"
                    }}
                  />
                  <div
                    className="w-full h-full bg-white dark:bg-gray-900 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <span className="text-4xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
                      BN
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
                Basavaraj Nayak
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              CSE Student | Full-Stack Developer | Cybersecurity Enthusiast
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              "Building smart, secure, and scalable software for the future."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1St1ACAxBqKQM83xlbPVVohp8ujZNLRQK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Imbasava" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/basavaraj-nayak-577689294/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student at PES University, Bengaluru, with a deep
                fascination for software development, IoT technologies, and cybersecurity. My journey in tech is driven
                by curiosity and a desire to create innovative solutions that make a real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                As a fast learner and problem solver, I thrive on tackling complex challenges and turning ideas into
                reality. I'm actively involved in open source contributions and believe in the power of collaborative
                development to drive technological advancement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Fast Learner
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Problem Solver
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Open Source Contributor
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Team Player
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="ml-16">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">PES University, Bengaluru</CardTitle>
                          <Badge variant="outline">2022 - 2026</Badge>
                        </div>
                        <CardDescription>Bachelor of Technology - Computer Science Engineering</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-2" />
                            <span className="font-semibold">CGPA: 8.18/10</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="ml-16">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">Sri Vidyaniketana PU College</CardTitle>
                          <Badge variant="outline">2020 - 2022</Badge>
                        </div>
                        <CardDescription>Pre-University Course (Science)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-2" />
                            <span className="font-semibold">Percentage: 95.5%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="ml-16">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">Jawahar Navodaya Vidyalaya, Raichur</CardTitle>
                          <Badge variant="outline">2016 - 2020</Badge>
                        </div>
                        <CardDescription>Secondary Education (6th - 10th Grade)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-2" />
                            <span className="font-semibold">Secondary School Completion</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Summer Research Intern</CardTitle>
                    <CardDescription className="text-lg">SOC @ PESU-C IOT</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Jun - Aug 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Developed a lightweight Security Operations Center using Snort, Fail2Ban, and ELK Stack
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Integrated ClamAV antivirus for comprehensive threat detection
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Improved threat detection and response capabilities for IoT infrastructure
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary">Snort</Badge>
                  <Badge variant="secondary">Fail2Ban</Badge>
                  <Badge variant="secondary">ELK Stack</Badge>
                  <Badge variant="secondary">ClamAV</Badge>
                  <Badge variant="secondary">Cybersecurity</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    {category === "Programming Languages" && <Code className="h-5 w-5 mr-2 text-blue-600" />}
                    {category === "Frameworks & Libraries" && <Server className="h-5 w-5 mr-2 text-purple-600" />}
                    {category === "Databases" && <Database className="h-5 w-5 mr-2 text-green-600" />}
                    {category === "Tools & Technologies" && <Cloud className="h-5 w-5 mr-2 text-orange-600" />}
                    {category === "Other Skills" && <Award className="h-5 w-5 mr-2 text-red-600" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg font-medium">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                      technology.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                        <span>Bengaluru, India</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-blue-600 mr-3" />
                        <a href="mailto:bbasavarajnayak64@gmail.com" className="hover:text-blue-600 transition-colors">
                          bbasavarajnayak64@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-600 mr-3" />
                        <a href="tel:+916362228565" className="hover:text-blue-600 transition-colors">
                          +91-6362228565
                        </a>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://github.com/Imbasava" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://linkedin.com/in/basavaraj-nayak-577689294/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://leetcode.com/u/imbasavanayak" target="_blank" rel="noopener noreferrer">
                          <Code className="h-4 w-4 mr-2" />
                          LeetCode
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Basavaraj Nayak. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
