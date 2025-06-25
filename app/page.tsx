"use client"

import type React from "react"
import { useEffect, useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  MapPin,
  Mail,
  Github,
  Twitter,
  Dribbble,
  Code,
  Palette,
  Server,
  Users,
  Eye,
  ShoppingCart,
  Building,
  Facebook,
  Menu,
  X,
  Star,
  Zap,
  Sparkles,
  Heart,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"

// بهینه‌سازی شدید Loading Component
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + 5 // افزایش سرعت لودینگ
      })
    }, 80) // کاهش فریکوئنس آپدیت

    return () => clearInterval(timer)
  }, [onComplete])

  // کاهش شدید تعداد circles
  const backgroundCircles = useMemo(
    () =>
      [...Array(2)].map(
        (
          _,
          i, // کاهش از 4 به 2
        ) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400/20 rounded-full" // کاهش opacity
            animate={{
              x: [0, Math.cos((i * 180 * Math.PI) / 180) * 60], // کاهش فاصله
              y: [0, Math.sin((i * 180 * Math.PI) / 180) * 60],
              scale: [0, 0.8, 0], // کاهش scale
              opacity: [0, 0.6, 0], // کاهش opacity
            }}
            transition={{
              duration: 5, // افزایش مدت زمان
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8, // افزایش تاخیر
              ease: "easeInOut",
            }}
            style={{
              left: "50%",
              top: "50%",
            }}
          />
        ),
      ),
    [],
  )

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center relative">
        <div className="absolute inset-0 -m-16">{backgroundCircles}</div>

        {/* ساده‌سازی spinner */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 border-3 border-transparent border-t-cyan-400 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 border-2 border-transparent border-b-purple-400 rounded-full animate-spin-reverse"></div>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">یارا تیم</h2>

        <div className="w-40 sm:w-48 h-1.5 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-cyan-300 mt-3 text-sm">{progress}% بارگذاری...</p>
      </div>
    </motion.div>
  )
}

// کاهش شدید FloatingParticles
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        // کاهش از 20 به 6
        id: i,
        size: "w-1 h-1", // یکسان کردن سایز
        color: i % 2 === 0 ? "bg-cyan-400/20" : "bg-purple-400/20", // کاهش opacity
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 6 + 8, // افزایش مدت زمان
        delay: Math.random() * 4,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.size} ${particle.color}`}
          animate={{
            y: [0, -30, 0], // ساده‌سازی حرکت
            opacity: [0.2, 0.4, 0.2], // کاهش opacity
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  )
}

// ساده‌سازی Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // بهینه‌سازی scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled)
    }
  }, [isScrolled])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 16) // 60fps
    }

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [handleScroll])

  const navItems = useMemo(
    () => [
      { href: "#home", label: "خانه", icon: Globe },
      { href: "#about", label: "درباره ما", icon: Users },
      { href: "#skills", label: "مهارت‌ها", icon: Zap },
      { href: "#services", label: "خدمات", icon: Star },
      { href: "#portfolio", label: "نمونه کارها", icon: Eye },
      { href: "#pricing", label: "قیمت‌ها", icon: Heart },
      { href: "#contact", label: "تماس", icon: Mail },
    ],
    [],
  )

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* ساده‌سازی Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                یارا تیم
              </span>
            </div>
          </div>

          {/* ساده‌سازی Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse bg-gray-900/40 rounded-xl p-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  setActiveSection(item.href.slice(1))
                  setIsMobileMenuOpen(false)
                }}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-black/90 rounded-xl">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-cyan-400 mb-1" />
                  <span className="text-xs text-gray-300">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ساده‌سازی شدید HeroSection
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    >
      <FloatingParticles />

      {/* ساده‌سازی Background - فقط یک element */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-right order-2 lg:order-1"
        >
          {/* ساده‌سازی Badge */}
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm">سلام، ما هستیم</span>
          </div>

          {/* ساده‌سازی Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">یارا تیم</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">طراح و توسعه‌دهنده وب</h2>
            <div className="flex items-center justify-center lg:justify-end space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse px-3 py-1 bg-blue-500/10 rounded-full">
                <Monitor className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Frontend</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse px-3 py-1 bg-green-500/10 rounded-full">
                <Server className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Backend</span>
              </div>
            </div>
          </div>

          {/* ساده‌سازی Contact Info */}
          <div className="space-y-3 mb-8">
            {[
              { icon: Phone, text: "09152695146" },
              { icon: Phone, text: "09059697599" },
              { icon: MapPin, text: "ایران، بیرجند" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-end space-x-3 space-x-reverse text-gray-300"
              >
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* ساده‌سازی Social Links */}
          <div className="flex justify-center lg:justify-end space-x-4 space-x-reverse">
            {[
              { Icon: Facebook, color: "bg-blue-600" },
              { Icon: Twitter, color: "bg-sky-500" },
              { Icon: Github, color: "bg-gray-700" },
              { Icon: Dribbble, color: "bg-pink-500" },
            ].map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center hover:scale-105 transition-transform`}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ساده‌سازی Hero Visual */}
        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* ساده‌سازی Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl" />

            {/* ساده‌سازی Main Container */}
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto bg-gray-800/20 rounded-full border-2 border-cyan-400/20 flex items-center justify-center backdrop-blur-sm">
              {/* کاهش Background Pattern */}
              <div className="absolute inset-0">
                {[...Array(4)].map(
                  (
                    _,
                    i, // کاهش از 8 به 4
                  ) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
                      style={{
                        left: `${25 + i * 20}%`,
                        top: `${25 + (i % 2) * 50}%`,
                      }}
                    />
                  ),
                )}
              </div>

              <div className="text-center relative z-10">
                <div className="mb-4">
                  <Code className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto" />
                </div>

                <div className="text-white font-bold text-lg sm:text-xl">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Web Developers
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 space-x-reverse mt-3">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                  <Tablet className="w-5 h-5 text-purple-400" />
                  <Monitor className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ساده‌سازی Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-5 h-8 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-1 animate-bounce" />
        </div>
        <span className="text-cyan-400 text-xs mt-2">اسکرول کنید</span>
      </div>
    </section>
  )
}

// ساده‌سازی AboutSection
const AboutSection = () => {
  const skills = ["HTML", "CSS", "JavaScript", "PHP", "Python", "Node.js"]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-full h-80 bg-gray-800/30 rounded-2xl border border-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <Server className="w-16 h-16 text-purple-400 mx-auto" />
                  <div className="mt-4 text-white font-bold text-lg">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Frontend & Backend
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center lg:text-right">
              درباره ما
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-center lg:text-right">
              ما یک تیم دونفره خلاق و متخصص در حوزه طراحی و توسعه وب هستیم. یکی از ما در زمینه{" "}
              <span className="text-cyan-400 font-semibold">توسعه فرانت‌اند</span> با مهارت در طراحی رابط کاربری زیبا و
              کاربرپسند فعالیت می‌کند، و دیگری متخصص <span className="text-purple-400 font-semibold">توسعه بک‌اند</span>{" "}
              با توانایی در ساختاردهی، منطق‌نویسی و پیاده‌سازی هسته فنی پروژه‌هاست.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8 text-center lg:text-right">
              ما با ترکیب دانش فنی، تجربه کاری و عشق به کدنویسی، تلاش می‌کنیم تا وب‌سایت‌ها و اپلیکیشن‌هایی مدرن، سریع و
              قابل توسعه برای مشتریان خود ایجاد کنیم.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ساده‌سازی ServicesSection
const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "طراحی UI/UX",
      description: "طراحی رابط کاربری و تجربه کاربری جذاب، کاربرپسند و متناسب با نیاز پروژه‌های وب و موبایل",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "توسعه فرانت‌اند",
      description: "پیاده‌سازی رابط کاربری مدرن و واکنش‌گرا با استفاده از تکنولوژی‌های روز",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Server,
      title: "توسعه بک‌اند",
      description: "برنامه‌نویسی سمت سرور با تمرکز بر امنیت، مقیاس‌پذیری و ساختاردهی حرفه‌ای",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            خدمات ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ساده‌سازی SkillsSection
const SkillsSection = () => {
  const technicalSkills = [
    { name: "JavaScript", percentage: 86 },
    { name: "Python", percentage: 70 },
    { name: "Node.js", percentage: 50 },
    { name: "PHP", percentage: 90 },
    { name: "HTML | CSS", percentage: 90 },
  ]

  const professionalSkills = [
    { name: "مخابرات", percentage: 95 },
    { name: "کار تیمی", percentage: 55 },
    { name: "مدیریت پروژه", percentage: 86 },
    { name: "خلاقیت", percentage: 60 },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              مهارت‌های فنی
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              مهارت‌های حرفه‌ای
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-700"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        whileInView={{
                          strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.percentage / 100),
                        }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-cyan-400">{skill.percentage}%</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ساده‌سازی PortfolioSection
const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "پلتفرم آموزش آنلاین",
      category: "وب اپلیکیشن",
      icon: Code,
      description: "سیستم جامع آموزش آنلاین با قابلیت‌های پیشرفته",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "فروشگاه مد و پوشاک",
      category: "ای-کامرس",
      icon: ShoppingCart,
      description: "فروشگاه آنلاین مدرن با درگاه پرداخت امن",
      tech: ["Vue.js", "Laravel", "MySQL"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "سیستم مدیریت رستوران",
      category: "سیستم مدیریت",
      icon: Building,
      description: "پنل مدیریت کامل رستوران با سفارش‌گیری آنلاین",
      tech: ["Angular", "Express", "PostgreSQL"],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            نمونه کارهای اخیر
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                <div className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full mb-4`}
                  >
                    <span className="text-sm font-medium text-cyan-300">{project.category}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 rounded-lg text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`w-full py-2 bg-gradient-to-r ${project.color} text-white font-bold rounded-xl hover:scale-105 transition-transform`}
                  >
                    <div className="flex items-center justify-center space-x-2 space-x-reverse">
                      <Eye className="w-4 h-4" />
                      <span>مشاهده پروژه</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ساده‌سازی PricingSection
const PricingSection = () => {
  const plans = [
    {
      icon: Users,
      title: "سایت شخصی",
      description: "مناسب برای رزومه، معرفی خدمات فردی و نمونه‌کارها",
      price: "۴,۰۰۰,۰۰۰",
      features: [
        "طراحی اختصاصی و واکنش‌گرا",
        "۴ صفحه شامل خانه، درباره من، تماس با ما، نمونه‌کارها",
        "اتصال به شبکه‌های اجتماعی",
        "تحویل سریع + پشتیبانی اولیه",
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      icon: ShoppingCart,
      title: "سایت فروشگاهی",
      description: "مناسب برای فروش آنلاین محصولات فیزیکی یا دیجیتال",
      price: "۳۰,۰۰۰,۰۰۰",
      features: [
        "سبد خرید + درگاه پرداخت آنلاین",
        "سیستم مدیریت موجودی و سفارش",
        "امکان فیلتر، جستجو، دسته‌بندی حرفه‌ای",
        "آموزش مدیریت فروشگاه",
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      icon: Building,
      title: "سایت شرکتی / نمایشگاهی",
      description: "برای معرفی برند، خدمات، پروژه‌ها یا نمونه‌کارها",
      price: "۱۵,۰۰۰,۰۰۰",
      features: [
        "طراحی حرفه‌ای و برندینگ اختصاصی",
        "صفحات خدمات، پروژه‌ها، درباره ما، تماس با ما",
        "فرم ارتباطی حرفه‌ای + نقشه و موقعیت",
        "سازگاری با موبایل و بهینه برای گوگل",
      ],
      color: "from-green-500 to-teal-500",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            جدول قیمت‌گذاری
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative ${plan.popular ? "lg:-mt-4" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                  محبوب‌ترین
                </div>
              )}

              <div
                className={`p-8 bg-gray-800/30 rounded-2xl border ${plan.popular ? "border-cyan-500/50" : "border-gray-700/30"} h-full`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 text-sm">تومان</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 space-x-reverse text-gray-300">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl hover:scale-105 transition-transform`}
                >
                  سفارش دهید
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ساده‌سازی ContactSection
const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const telegramMessage = `
📝 فرم تماس جدید:
👤 نام: ${formData.firstName} ${formData.lastName}
📧 ایمیل: ${formData.email}
💬 پیام: ${formData.message}
    `

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7227712599:AAF2ehlpxAJmfsFit78MbFdVnKeLhivclOI/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "-4692723402",
            text: telegramMessage,
          }),
        },
      )

      if (response.ok) {
        alert("پیام با موفقیت ارسال شد ✌️")
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      alert("خطا در ارسال پیام به تلگرام 😢")
      console.error(error)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "آدرس",
      content: "ایران، بیرجند",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Mail,
      title: "ایمیل",
      content: "immhrab@email.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "تلفن اول",
      content: "09152695146",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "تلفن دوم",
      content: "09059697599",
      color: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            تماس با ما
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="نام کوچک"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />

                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="ایمیل شما"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                required
              />

              <textarea
                placeholder="پیام شما"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                required
              />

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-transform"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 space-x-reverse mt-16">
          {[
            { Icon: Facebook, color: "bg-blue-600" },
            { Icon: Twitter, color: "bg-sky-500" },
            { Icon: Github, color: "bg-gray-700" },
            { Icon: Dribbble, color: "bg-pink-500" },
          ].map(({ Icon, color }, index) => (
            <a
              key={index}
              href="#"
              className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform`}
            >
              <Icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main App Component
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}</AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <PortfolioSection />
          <PricingSection />
          <ContactSection />
        </>
      )}
    </div>
  )
}
