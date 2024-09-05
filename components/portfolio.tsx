'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Sheraj Hussein</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-cyan-400" href="#projects">Projects</Link>
              <Link className="transition-colors hover:text-cyan-400" href="#skills">Skills</Link>
              <Link className="transition-colors hover:text-cyan-400" href="#contact">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <nav className="flex items-center">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800 hover:text-cyan-400 h-9 py-2 w-9 px-0">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800 hover:text-cyan-400 h-9 py-2 w-9 px-0">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs border-r border-gray-800 bg-gray-900 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Link className="flex items-center space-x-2" href="/">
                <span className="font-bold">Sheraj Hussein</span>
              </Link>
              <Button variant="ghost" onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-6 flex flex-col space-y-4">
              <Link className="text-lg font-medium hover:text-cyan-400" href="#projects" onClick={toggleMenu}>Projects</Link>
              <Link className="text-lg font-medium hover:text-cyan-400" href="#skills" onClick={toggleMenu}>Skills</Link>
              <Link className="text-lg font-medium hover:text-cyan-400" href="#contact" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                    Jane Doe
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Web3 Developer | AI Enthusiast | AR/VR Developer
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 font-medium">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Hero Image"
                  width={400}
                  height={400}
                  className="rounded-full bg-gray-800 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Project 1"
                description="A brief description of Project 1"
                details="Details about Project 1 go here."
              />
              <ProjectCard
                title="Project 2"
                description="A brief description of Project 2"
                details="Details about Project 2 go here."
              />
              <ProjectCard
                title="Project 3"
                description="A brief description of Project 3"
                details="Details about Project 3 go here."
              />
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">Skills</h2>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                <TabsTrigger value="frontend" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">Frontend</TabsTrigger>
                <TabsTrigger value="backend" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">Backend</TabsTrigger>
                <TabsTrigger value="other" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <AnimatedBadge>React</AnimatedBadge>
                  <AnimatedBadge>Next.js</AnimatedBadge>
                  <AnimatedBadge>TypeScript</AnimatedBadge>
                  <AnimatedBadge>HTML</AnimatedBadge>
                  <AnimatedBadge>CSS</AnimatedBadge>
                  <AnimatedBadge>Tailwind CSS</AnimatedBadge>
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <AnimatedBadge>Node.js</AnimatedBadge>
                  <AnimatedBadge>Express</AnimatedBadge>
                  <AnimatedBadge>PostgreSQL</AnimatedBadge>
                  <AnimatedBadge>MongoDB</AnimatedBadge>
                  <AnimatedBadge>GraphQL</AnimatedBadge>
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-6">
                <div className="flex flex-wrap gap-2">
                  <AnimatedBadge>Git</AnimatedBadge>
                  <AnimatedBadge>Docker</AnimatedBadge>
                  <AnimatedBadge>AWS</AnimatedBadge>
                  <AnimatedBadge>CI/CD</AnimatedBadge>
                  <AnimatedBadge>Agile</AnimatedBadge>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">Contact Me</h2>
            <div className="mx-auto max-w-[600px]">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-cyan-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" required type="email" className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-cyan-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" required className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-cyan-400" />
                </div>
                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white transition-all duration-200">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
              © 2024 Sheraj Hussein. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="mailto:jane@example.com" className="transition-transform hover:scale-110 hover:text-cyan-400">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com/vashviper" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-cyan-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/sherajhussein/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 hover:text-cyan-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, details }) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 bg-gray-700 border-gray-600">
      <CardHeader>
        <CardTitle className="text-cyan-400">{title}</CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{details}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-gray-900 font-medium transition-all duration-200">
          <Link href="#">View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function AnimatedBadge({ children }) {
  return (
    <Badge className="transition-all duration-200 hover:bg-cyan-600 hover:text-white transform hover:scale-110 bg-gray-700 text-cyan-400">
      {children}
    </Badge>
  )
}