'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('English')
  const languageOptions = ['English', 'Indonesian']

  const [authOpen, setAuthOpen] = useState(false)
  const [selectedAuth, setSelectedAuth] = useState('Login')
  const authOptions = ['Login', 'Sign Up']


  const toggleLang = () => setLangOpen(!langOpen)
  const selectLang = (lang: string) => {
    setSelectedLang(lang)
    setLangOpen(false)
  }

  const toggleAuth = () => setAuthOpen(!authOpen)
  const selectAuth = (auth: string) => {
    setSelectedAuth(auth)
    setAuthOpen(false)
  }

  return (
    <nav className="fixed top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-[30px] font-bold tracking-tight">
          <span className="text-[var(--color-brand-red)]">PPI</span>
          <span className="text-[var(--color-primary-text)]">T</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-[18px] font-medium text-[var(--color-primary-text)]">
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/living-in-norway" className="hover:underline">
            Living in Norway
          </Link>
          <Link href="/policies" className="hover:underline">
            Policies
          </Link>
          <Link href="/about" className="hover:underline">
            About us
          </Link>

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded text-[18px] text-[var(--color-primary-text)] hover:bg-white/10 transition"
            >
                {selectedLang}
              <svg
                className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-md bg-[var(--background)] shadow-lg border border-white/20 text-[var(--foreground)] z-50">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                  onClick={() => selectLang('English')}
                >
                  English
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                  onClick={() => selectLang('Indonesian')}
                >
                  Indonesian
                </Link>
              </div>
            )}
          </div>

          {/* Login/Signup dropdown */}
          <div className="relative">
            <button
              onClick={toggleAuth}
              className="flex items-center gap-1 rounded text-[18px] text-[var(--color-primary-text)] hover:bg-white/10 transition"
            >
                Login/Sign Up 

                {/*If Logged in, have a profile icon*/}
              <svg
                className={`w-4 h-4 transition-transform ${authOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {authOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-md bg-[var(--background)] shadow-lg border border-white/20 text-[var(--foreground)] z-50">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                  onClick={() => selectAuth('Login')}
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                  onClick={() => selectAuth('Sign Up')}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
