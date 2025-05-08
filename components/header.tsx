"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-slate-900">
            GOOD CRYPTO!
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-md">
                <nav className="flex flex-col space-y-4">
                  <Link href="#" className="text-slate-600 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                    Program
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                    Impact
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Apply Now</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link href="#" className="text-slate-600 hover:text-slate-900">
                About
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900">
                Program
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900">
                Impact
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900">
                Contact
              </Link>
            </nav>
            <Button className="bg-emerald-500 hover:bg-emerald-600">Apply Now</Button>
          </div>
        )}
      </div>
    </header>
  )
}
