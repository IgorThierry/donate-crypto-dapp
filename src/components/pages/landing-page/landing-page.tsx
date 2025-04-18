'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { useEffect, useRef, useState } from 'react'

import { HeroSection } from './sections/hero'
import { FeaturesSection } from './sections/features'
import { HowItWorksSection } from './sections/how-it-works'
import { BenefitsSection } from './sections/benefits'
import { FeeSection } from './sections/fee'
import { FaqSection } from './sections/faq'
import { CtaSection } from './sections/cta'
import { Footer } from './sections/footer'

export function LandingPage() {
  // State to track scroll position for performance optimizations
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef(null)

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href')?.slice(1)
    const targetElement = document.getElementById(targetId || '')

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Throttle scroll event for better performance
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
          scrollY > 50 ? 'bg-background/95' : 'bg-background/80'
        }`}
      >
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <span className="text-white">D</span>
            </div>
            DonateCrypto
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#hero"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              Benefits
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                Launch DApp
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <FeeSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer handleSmoothScroll={handleSmoothScroll} />
    </div>
  )
}
