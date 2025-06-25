"use client"

import type React from "react"
import { useEffect, useState, useMemo, useCallback, useRef } from "react"
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
  Shield,
  Sparkles,
  Heart,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"

// بهینه‌سازی Loading Component با حفظ انیمیشن‌ها
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  // برگرداندن تعداد اصلی circles با بهینه‌سازی
  const backgroundCircles = useMemo(
    () =>
      [...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400/30 rounded-full"
          animate={{
            x: [0, Math.cos((i * 45 * Math.PI) / 180) * 100],
            y: [0, Math.sin((i * 45 * Math.PI) / 180) * 100],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.4,
          }}
          style={{
            left: "50%",
            top: "50%",
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        />
      )),
    [],
  )

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center relative">
        <div className="absolute inset-0 -m-20">{backgroundCircles}</div>

        <motion.div
          className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        >
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-pink-400 border-l-blue-400 rounded-full"></div>
          <motion.div
            className="absolute inset-4 border-2 border-transparent border-t-yellow-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          />
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-4xl font-bold text-white mb-4"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          style={{ willChange: "transform, opacity" }}
        >
          یارا تیم
        </motion.h2>

        <div className="w-48 sm:w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full relative"
            style={{ width: `${progress}%`, willChange: "width" }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/30 rounded-full"
              animate={{ x: [-20, 100] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              style={{ willChange: "transform" }}
            />
          </motion.div>
        </div>

        <motion.p
          className="text-cyan-300 mt-4 text-sm sm:text-lg"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          style={{ willChange: "opacity" }}
        >
          {progress}% بارگذاری...
        </motion.p>
      </div>
    </motion.div>
  )
}

// بهینه‌سازی FloatingParticles با حفظ تعداد اصلی
const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      [...Array(18)].map((_, i) => ({
        id: i,
        size: i % 3 === 0 ? "w-1 h-1" : i % 3 === 1 ? "w-2 h-2" : "w-1.5 h-1.5",
        color: i % 3 === 0 ? "bg-cyan-400" : i % 3 === 1 ? "bg-purple-400" : "bg-pink-400",
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 2,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.size} ${particle.color} opacity-30`}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        />
      ))}
    </div>
  )
}

// بهینه‌سازی Navigation با debounced scroll
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)


  // بهینه‌سازی scroll handler
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const scrolled = window.scrollY > 50
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled)
      }
    }, 10)
  }, [isScrolled])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
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
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3 space-x-reverse group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
          >
            <motion.div
              className="relative w-10 h-10 sm:w-12 sm:h-12"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.2 }}
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-50 blur-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                style={{ willChange: "transform, opacity" }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                یارا تیم
              </span>
              <motion.span
                className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
                style={{ willChange: "transform, opacity" }}
              >
                Web Developers
              </motion.span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1 space-x-reverse bg-gray-900/50 backdrop-blur-lg rounded-2xl p-2 border border-gray-700/50">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl transition-all duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveSection(item.href.slice(1))
                  setIsMobileMenuOpen(false)
                }}
                style={{ willChange: "transform" }}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>

                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/30"
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.03 }}
                  style={{ willChange: "transform, opacity" }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            className="lg:hidden relative w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <X className="w-6 h-6 text-cyan-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Menu className="w-6 h-6 text-cyan-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ willChange: "transform" }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                        style={{ willChange: "transform" }}
                      >
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </motion.div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// بهینه‌سازی HeroSection با حفظ mouse tracking
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseTimeoutRef = useRef<NodeJS.Timeout>()

  // بهینه‌سازی mouse tracking با requestAnimationFrame
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current)
    }

    mouseTimeoutRef.current = setTimeout(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }, 16) // ~60fps
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current)
      }
    }
  }, [handleMouseMove])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    >
      <FloatingParticles />

      {/* بهینه‌سازی Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-cyan-400/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />

      {/* حفظ Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center lg:text-right order-2 lg:order-1"
        >
          <motion.div
            className="inline-flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, type: "spring", duration: 1.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
            style={{ willChange: "transform" }}
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-medium">سلام، ما هستیم</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ willChange: "transform" }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1.2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%", willChange: "background-position" }}
            >
              یارا تیم
            </motion.span>
          </motion.h1>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 1.2 }}
          >
            <h2 className="text-xl sm:text-3xl lg:text-4xl text-gray-300 mb-4">طراح و توسعه‌دهنده وب</h2>
            <motion.div
              className="flex items-center justify-center lg:justify-end space-x-4 space-x-reverse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <motion.div
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30"
                whileHover={{ scale: 1.02 }}
                style={{ willChange: "transform" }}
              >
                <Monitor className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Frontend</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full border border-green-500/30"
                whileHover={{ scale: 1.02 }}
                style={{ willChange: "transform" }}
              >
                <Server className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Backend</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.65 }}
          >
            {[
              { icon: Phone, text: "09152695146", color: "cyan" },
              { icon: Phone, text: "09059697599", color: "purple" },
              { icon: MapPin, text: "ایران، بیرجند", color: "pink" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center lg:justify-end space-x-3 space-x-reverse group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: -5 }}
                style={{ willChange: "transform" }}
              >
                <motion.div
                  className={`w-10 h-10 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 rounded-lg flex items-center justify-center border border-${item.color}-500/30 group-hover:border-${item.color}-400/50 transition-all duration-300`}
                  whileHover={{ rotate: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end space-x-4 space-x-reverse"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.95 }}
          >
            {[
              { Icon: Facebook, color: "from-blue-600 to-blue-700", hoverColor: "hover:shadow-blue-500/25" },
              { Icon: Twitter, color: "from-sky-500 to-sky-600", hoverColor: "hover:shadow-sky-500/25" },
              { Icon: Github, color: "from-gray-700 to-gray-800", hoverColor: "hover:shadow-gray-500/25" },
              { Icon: Dribbble, color: "from-pink-500 to-pink-600", hoverColor: "hover:shadow-pink-500/25" },
            ].map(({ Icon, color, hoverColor }, index) => (
              <motion.a
                key={index}
                href="#"
                className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 group ${hoverColor} hover:shadow-lg overflow-hidden`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 2.1 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.03, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: "transform" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: "transform" }}
                />

                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  style={{ willChange: "transform, opacity" }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* حفظ Hero Visual */}
        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 1.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            />

            <motion.div
              className="absolute inset-4 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full blur-2xl opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            />

            <motion.div
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-full border-4 border-cyan-400/30 flex items-center justify-center backdrop-blur-lg overflow-hidden"
              whileHover={{ scale: 1.03, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ willChange: "transform" }}
            >
              {/* حفظ Background Pattern */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                    animate={{
                      x: [0, Math.cos((i * 30 * Math.PI) / 180) * 80],
                      y: [0, Math.sin((i * 30 * Math.PI) / 180) * 80],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      willChange: "transform, opacity",
                      transform: "translateZ(0)",
                    }}
                  />
                ))}
              </div>

              <div className="text-center relative z-10">
                <motion.div
                  className="relative mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ willChange: "transform" }}
                >
                  <Code className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-cyan-400 mx-auto" />
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    style={{ willChange: "transform" }}
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.25 }}
                >
                  <div className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      style={{ backgroundSize: "200% 200%", willChange: "background-position" }}
                    >
                      Web Developers
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center justify-center space-x-4 space-x-reverse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                      style={{ willChange: "transform" }}
                    >
                      <Smartphone className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                      style={{ willChange: "transform" }}
                    >
                      <Tablet className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                      style={{ willChange: "transform" }}
                    >
                      <Monitor className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* حفظ Floating Elements */}
              <motion.div
                className="absolute top-8 right-8 w-4 h-4 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-3 h-3 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* حفظ Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
          whileHover={{ scale: 1.03 }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            style={{ willChange: "transform" }}
          />
        </motion.div>
        <span className="text-cyan-400 text-xs font-medium">اسکرول کنید</span>
      </motion.div>
    </section>
  )
}

// باقی کامپوننت‌ها با بهینه‌سازی مشابه...
const AboutSection = () => {
  const skills = ["HTML", "CSS", "JavaScript", "PHP", "Python", "Node.js"]

  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              />
              <div className="relative z-10 w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Palette className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto mb-4" />
                  <Server className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400 mx-auto" />
                  <div className="mt-4 text-white font-bold text-lg sm:text-xl">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Frontend & Backend
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center lg:text-right"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.75 }}
            >
              درباره ما
            </motion.h2>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg text-center lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              ما یک تیم دونفره خلاق و متخصص در حوزه طراحی و توسعه وب هستیم. یکی از ما در زمینه{" "}
              <span className="text-cyan-400 font-semibold">توسعه فرانت‌اند</span> با مهارت در طراحی رابط کاربری زیبا و
              کاربرپسند فعالیت می‌کند، و دیگری متخصص <span className="text-purple-400 font-semibold">توسعه بک‌اند</span>{" "}
              با توانایی در ساختاردهی، منطق‌نویسی و پیاده‌سازی هسته فنی پروژه‌هاست.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base text-center lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              ما با ترکیب دانش فنی، تجربه کاری و عشق به کدنویسی، تلاش می‌کنیم تا وب‌سایت‌ها و اپلیکیشن‌هایی مدرن، سریع و
              قابل توسعه برای مشتریان خود ایجاد کنیم.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{ willChange: "transform" }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Section with Hover Effects
const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "طراحی UI/UX",
      description: "طراحی رابط کاربری و تجربه کاربری جذاب، کاربرپسند و متناسب با نیاز پروژه‌های وب و موبایل",
      color: "from-purple-500 to-pink-500",
      bgIcon: Star,
    },
    {
      icon: Code,
      title: "توسعه فرانت‌اند",
      description: "پیاده‌سازی رابط کاربری مدرن و واکنش‌گرا با استفاده از تکنولوژی‌های روز",
      color: "from-cyan-500 to-blue-500",
      bgIcon: Zap,
    },
    {
      icon: Server,
      title: "توسعه بک‌اند",
      description: "برنامه‌نویسی سمت سرور با تمرکز بر امنیت، مقیاس‌پذیری و ساختاردهی حرفه‌ای",
      color: "from-green-500 to-teal-500",
      bgIcon: Shield,
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            خدمات ما
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ willChange: "transform" }}
            >
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Background Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <service.bgIcon className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400" />
                </div>

                {/* Background Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Icon */}
                <motion.div
                  className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section with Animated Progress Bars
const SkillsSection = () => {
  const technicalSkills = [
    { name: "JavaScript", percentage: 86, color: "from-yellow-400 to-orange-500" },
    { name: "Python", percentage: 70, color: "from-blue-400 to-blue-600" },
    { name: "Node.js", percentage: 50, color: "from-green-400 to-green-600" },
    { name: "PHP", percentage: 90, color: "from-purple-400 to-purple-600" },
    { name: "HTML | CSS", percentage: 90, color: "from-red-400 to-pink-500" },
  ]

  const professionalSkills = [
    { name: "مخابرات", percentage: 95 },
    { name: "کار تیمی", percentage: 55 },
    { name: "مدیریت پروژه", percentage: 86 },
    { name: "خلاقیت", percentage: 60 },
  ]

  return (
    <section id="skills" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              مهارت‌های فنی
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-cyan-400 font-bold text-sm sm:text-base">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 2.25, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{ willChange: "width" }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              مهارت‌های حرفه‌ای
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
                    <svg className="w-16 h-16 sm:w-24 sm:h-24 transform -rotate-90" viewBox="0 0 100 100">
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
                        transition={{ duration: 3, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{ willChange: "stroke-dashoffset" }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-cyan-400">{skill.percentage}%</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Portfolio Section with 3D Effects
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
    <section id="portfolio" className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            نمونه کارهای اخیر
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ willChange: "transform" }}
            >
              <div className="relative overflow-hidden rounded-2xl h-80 sm:h-96">
                {/* Main Card */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all duration-500 flex flex-col">
                  {/* Header Section */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 transform rotate-12 scale-150"></div>
                    </div>

                    {/* Icon with Animation */}
                    <motion.div
                      className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                      transition={{ duration: 0.9 }}
                      style={{ willChange: "transform" }}
                    >
                      <project.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />

                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                        style={{ willChange: "opacity" }}
                      ></div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      style={{ willChange: "transform" }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Category Badge */}
                    <motion.div
                      className={`inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full border border-current border-opacity-30 mb-3 sm:mb-4`}
                      whileHover={{ scale: 1.02 }}
                      style={{ willChange: "transform" }}
                    >
                      <span className="text-xs sm:text-sm font-medium text-cyan-300">{project.category}</span>
                    </motion.div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gray-700/50 rounded-lg text-xs sm:text-sm text-gray-300 border border-gray-600/50 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * techIndex }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          style={{ willChange: "transform" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-4 sm:p-6 border-t border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                    <motion.button
                      className={`w-full py-2 sm:py-3 bg-gradient-to-r ${project.color} text-white font-bold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="flex items-center justify-center space-x-2 space-x-reverse">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>مشاهده پروژه</span>
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ opacity: 0 }}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500"></div>

                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 60}%`,
                        willChange: "transform, opacity",
                        transform: "translateZ(0)",
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section with Modern Cards
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
    <section id="pricing" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            جدول قیمت‌گذاری
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${plan.popular ? "lg:-mt-4 sm:-mt-0" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ willChange: "transform" }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  style={{ willChange: "transform" }}
                >
                  محبوب‌ترین
                </motion.div>
              )}

              <div
                className={`relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border ${plan.popular ? "border-cyan-500/50" : "border-gray-700/50"} backdrop-blur-sm overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300 h-full`}
              >
                {/* Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <plan.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">تومان</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start space-x-2 sm:space-x-3 space-x-reverse text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: "transform" }}
                >
                  سفارش دهید
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section with Modern Form
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
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            تماس با ما
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{ willChange: "transform" }}
            >
              <div className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all duration-300">
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                  style={{ willChange: "transform" }}
                >
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{info.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <input
                    type="text"
                    placeholder="نام کوچک"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <input
                    type="text"
                    placeholder="نام خانوادگی"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ willChange: "transform, opacity" }}
              >
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ willChange: "transform, opacity" }}
              >
                <textarea
                  placeholder="پیام شما"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ willChange: "transform" }}
              >
                ارسال پیام
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Ultra Enhanced Social Links */}
        <motion.div
          className="flex justify-center items-center space-x-6 sm:space-x-8 space-x-reverse mt-12 sm:mt-16 pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { Icon: Facebook, color: "from-blue-600 to-blue-700", name: "Facebook" },
            { Icon: Twitter, color: "from-sky-500 to-sky-600", name: "Twitter" },
            { Icon: Github, color: "from-gray-700 to-gray-800", name: "GitHub" },
            { Icon: Dribbble, color: "from-pink-500 to-pink-600", name: "Dribbble" },
          ].map(({ Icon, color, name }, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
              style={{ willChange: "transform" }}
            >
              <motion.a
                href="#"
                className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden shadow-lg hover:shadow-2xl`}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                style={{ willChange: "transform" }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                  style={{ willChange: "transform" }}
                />

                {/* Pulsing Ring */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-30`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  style={{ willChange: "transform, opacity" }}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: "transform" }}
                >
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white drop-shadow-lg" />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  {name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
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
