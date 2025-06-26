"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  User,
  Code,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Shield,
  Flag,
  Instagram,
  MessageCircle,
  Download,
  ExternalLink,
  Sparkles,
  Award,
  Target,
  Home,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Resume() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const skills = [
    { name: "Python", level: 85, color: "from-emerald-400 via-teal-500 to-cyan-600", icon: "🐍" },
    { name: "JavaScript", level: 80, color: "from-amber-400 via-orange-500 to-red-500", icon: "⚡" },
    { name: "React", level: 75, color: "from-blue-400 via-indigo-500 to-purple-600", icon: "⚛️" },
    { name: "PHP", level: 70, color: "from-violet-400 via-purple-500 to-indigo-600", icon: "🔧" },
    { name: "HTML/CSS", level: 90, color: "from-rose-400 via-pink-500 to-red-500", icon: "🎨" },
    { name: "MySQL", level: 65, color: "from-slate-400 via-gray-500 to-zinc-600", icon: "🗄️" },
  ]

  const languages = [
    { name: "Persian", level: 5, flag: "🇮🇷" },
    { name: "English", level: 3, flag: "🇺🇸" },
  ]

  const personalInfo = [
    { icon: Users, label: "Gender", value: "Male", color: "text-blue-500" },
    { icon: Users, label: "Marital Status", value: "Single", color: "text-emerald-500" },
    { icon: Shield, label: "Military Service", value: "Educational Exemption", color: "text-amber-500" },
    { icon: Calendar, label: "Date of Birth", value: "10-5-2006", color: "text-rose-500" },
    { icon: Flag, label: "Nationality", value: "Iranian", color: "text-green-500" },
    { icon: MapPin, label: "Location", value: "Iran, Mashhad", color: "text-purple-500" },
    { icon: Phone, label: "Phone", value: "0915-269-5146", color: "text-cyan-500" },
    { icon: Mail, label: "Email", value: "immhrab@gmail.com", color: "text-indigo-500" },
  ]

  const mobileNavItems = [
    { id: "about", icon: Home, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "languages", icon: Globe, label: "Languages" },
    { id: "contact", icon: Send, label: "Contact" },
  ]

  const nextSkill = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
  }

  const prevSkill = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + skills.length) % skills.length)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "dark bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900"
          : "bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Header */}
        <header className="py-8 hidden lg:block">
          <div className="flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl px-6 py-4 border border-white/20 dark:border-white/10">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mehrab.dev
                  </span>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 text-amber-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Developer</span>
                  </div>
                </div>
              </div>
              <nav className="flex space-x-8">
                <a
                  href="https://t.me/qtlgh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all duration-300 font-medium hover:scale-105"
                >
                  Telegram Account
                </a>
                <a
                  href="https://t.me/qtlgh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-all duration-300 font-medium hover:scale-105"
                >
                  Telegram Channel
                </a>
              </nav>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-white/20 dark:hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </Button>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="py-4 lg:hidden">
          <div className="flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl px-4 py-3 border border-white/20 dark:border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mehrab.dev
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-white/20 dark:hover:bg-white/10 rounded-xl"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-indigo-600" />}
            </Button>
          </div>
        </header>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 pb-8">
          {/* Desktop Sidebar */}
          <Card className="lg:col-span-1 backdrop-blur-md bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-zinc-800/90 dark:from-slate-900/90 dark:via-gray-900/90 dark:to-zinc-900/90 text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            <CardContent className="relative z-10 p-8">
              <div className="text-center mb-8">
                <div className="relative mx-auto mb-6">
                  <div className="w-36 h-36 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <User className="h-20 w-20 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Mehrab Mm
                </h1>
                <p className="text-lg text-gray-300 mb-4 font-light">مهراب محمدی</p>

                <div className="flex justify-center space-x-2 mb-6">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-full shadow-lg">
                    <Target className="h-3 w-3 mr-1" />
                    Developer
                  </Badge>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-4 py-2 rounded-full shadow-lg">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Creative
                  </Badge>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/iw_mehrab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://t.me/qtlgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <MessageCircle className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <info.icon className={`h-4 w-4 ${info.color}`} />
                      <span className="text-gray-300 font-medium">{info.label}</span>
                    </div>
                    <span className="text-white font-semibold">{info.value}</span>
                  </div>
                ))}
              </div>

              <a href="https://rayaateam.ir" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full mt-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl py-6 font-semibold text-lg">
                  <Download className="h-5 w-5 mr-2" />
                  View Portfolio
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Desktop Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 dark:bg-black/40 border border-white/20 dark:border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-2xl mr-4 shadow-lg">
                    <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Biography
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light">
                  A passionate{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">17-year-old developer</span> with
                  <span className="font-semibold text-purple-600 dark:text-purple-400"> 4 years of experience</span> in
                  programming and reverse engineering. I love creating innovative solutions and exploring new
                  technologies. My journey in tech started early, and I'm constantly learning and growing in this
                  ever-evolving field of
                  <span className="font-semibold text-pink-600 dark:text-pink-400"> software development</span>.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 dark:bg-black/40 border border-white/20 dark:border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/50 dark:to-cyan-900/50 rounded-2xl mr-4 shadow-lg">
                    <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Technical Skills
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="space-y-4 p-4 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-white/5 dark:to-gray-800/20 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-black/20 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                          <div
                            className={`h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 dark:bg-black/40 border border-white/20 dark:border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 rounded-2xl mr-4 shadow-lg">
                    <Globe className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Languages
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  {languages.map((language, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-white/5 dark:to-gray-800/20 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{language.flag}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{language.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                              i < language.level
                                ? "bg-gradient-to-br from-violet-400 via-purple-500 to-pink-500 shadow-lg"
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border border-white/20 dark:border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl mb-4">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      Let's Create Something Amazing!
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg font-light">
                      Ready to collaborate on exciting projects? Let's turn ideas into reality!
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://t.me/qtlgh" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl py-6 px-8 font-semibold text-lg">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Start Conversation
                      </Button>
                    </a>
                    <a href="https://rayaateam.ir" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-6 px-8 font-semibold text-lg backdrop-blur-sm"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Portfolio
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Layout - Revolutionary Design */}
        <div className="lg:hidden pb-24">
          {/* Mobile Profile Header - Always Visible */}
          <Card className="mb-6 backdrop-blur-md bg-white/95 border border-gray-200/30 dark:bg-gradient-to-br dark:from-slate-800/90 dark:via-gray-800/90 dark:to-zinc-800/90 text-gray-800 dark:text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>
            <CardContent className="relative z-10 p-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-xl font-bold text-gray-800 dark:bg-gradient-to-r dark:from-white dark:to-gray-300 dark:bg-clip-text dark:text-transparent">
                    Mehrab Mm
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">مهراب محمدی</p>
                  <div className="flex space-x-2">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs">
                      Developer
                    </Badge>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-3 py-1 rounded-full text-xs">
                      Creative
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://www.instagram.com/iw_mehrab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="https://t.me/qtlgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Content Sections */}
          <div className="space-y-6">
            {/* About Section */}
            {activeSection === "about" && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <Card className="shadow-xl backdrop-blur-md bg-white/80 dark:bg-black/40 border border-white/20 dark:border-white/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl mr-3">
                        <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        Biography
                      </h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A passionate{" "}
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">17-year-old developer</span>{" "}
                      with{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">4 years of experience</span>{" "}
                      in programming and reverse engineering.
                    </p>
                  </CardContent>
                </Card>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="backdrop-blur-md bg-white/60 dark:bg-black/30 border border-white/20 dark:border-white/10"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <info.icon className={`h-4 w-4 ${info.color}`} />
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{info.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{info.value}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === "skills" && (
              <div className="animate-in slide-in-from-right duration-300">
                <Card className="shadow-xl backdrop-blur-md bg-white/80 dark:bg-black/40 border border-white/20 dark:border-white/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="p-2 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/50 dark:to-cyan-900/50 rounded-xl mr-3">
                          <Code className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          Skills
                        </h2>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevSkill}
                          className="h-8 w-8 rounded-full bg-white/20 dark:bg-black/20"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextSkill}
                          className="h-8 w-8 rounded-full bg-white/20 dark:bg-black/20"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Skill Carousel */}
                    <div className="relative overflow-hidden">
                      <div
                        className="flex transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(-${currentSkillIndex * 100}%)` }}
                      >
                        {skills.map((skill, index) => (
                          <div key={index} className="w-full flex-shrink-0 px-2">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-white/5 dark:to-gray-800/20 backdrop-blur-sm">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <span className="text-3xl">{skill.icon}</span>
                                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-lg font-bold text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-black/20 px-4 py-2 rounded-full">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="relative">
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
                                  <div
                                    className={`h-6 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-lg`}
                                    style={{ width: `${skill.level}%` }}
                                  />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skill Indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {skills.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSkillIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSkillIndex
                              ? "bg-gradient-to-r from-indigo-500 to-purple-600 w-6"
                              : "bg-gray-300 dark:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Languages Section */}
            {activeSection === "languages" && (
              <div className="animate-in slide-in-from-right duration-300">
                <Card className="shadow-xl backdrop-blur-md bg-white/80 dark:bg-black/40 border border-white/20 dark:border-white/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 rounded-xl mr-3">
                        <Globe className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        Languages
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-white/5 dark:to-gray-800/20 backdrop-blur-sm"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{language.flag}</span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{language.name}</span>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                  i < language.level
                                    ? "bg-gradient-to-br from-violet-400 via-purple-500 to-pink-500 shadow-lg"
                                    : "bg-gray-300 dark:bg-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === "contact" && (
              <div className="animate-in slide-in-from-right duration-300">
                <Card className="shadow-xl backdrop-blur-md bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border border-white/20 dark:border-white/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl mb-4">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Let's Create Something Amazing!
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Ready to collaborate on exciting projects?
                      </p>
                      <div className="space-y-3">
                        <a href="https://t.me/qtlgh" target="_blank" rel="noopener noreferrer" className="block w-full">
                          <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl transition-all duration-300 rounded-xl py-4 font-semibold">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Start Conversation
                          </Button>
                        </a>
                        <a
                          href="https://rayaateam.ir"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button
                            variant="outline"
                            className="w-full border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20 shadow-lg transition-all duration-300 rounded-xl py-4 font-semibold backdrop-blur-sm"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Portfolio
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
          <div className="mx-4 mb-4">
            <Card className="backdrop-blur-md bg-white/90 dark:bg-black/90 border border-white/20 dark:border-white/10 shadow-2xl">
              <CardContent className="p-2">
                <div className="flex justify-around">
                  {mobileNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Desktop Footer */}
        <footer className="hidden lg:block text-center py-8 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl border border-white/20 dark:border-white/10 mb-8">
          <p className="text-gray-600 dark:text-gray-400 font-light">Copyright © 2024 — Crafted with 💜 by Mehrab</p>
        </footer>
      </div>
    </div>
  )
}
