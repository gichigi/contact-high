"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center relative z-50">
        <div className="flex items-center">
          <div className="relative font-bold text-xl">
            <div className="flex items-center">
              <div className="relative mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                  <path d="M8 12C8 9.79086 9.79086 8 12 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="16" cy="10" r="2" fill="#FEE08B" />
                </svg>
              </div>
              <span className="tracking-tight">Contact High</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#faq"
            className="px-4 py-2 text-gray-800 font-semibold hover:text-black hover:bg-gray-100 rounded-md transition-colors border border-gray-200 shadow-sm flex items-center"
          >
            Oh FAQ
          </Link>
          <Link
            href="#about"
            className="px-4 py-2 text-gray-800 font-semibold hover:text-black hover:bg-gray-100 rounded-md transition-colors border border-gray-200 shadow-sm flex items-center"
          >
            Wait, who are we again?
          </Link>
          <Button
            size="sm"
            className="rounded-full px-5 py-2.5 bg-black hover:bg-gray-800 text-white font-semibold shadow-md"
          >
            Get Contact High
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 bg-white shadow-lg rounded-b-lg p-4 flex flex-col space-y-3 md:hidden border border-gray-200 mx-4">
            <Link
              href="#faq"
              className="px-4 py-2 text-gray-800 font-semibold hover:text-black hover:bg-gray-100 rounded-md transition-colors border border-gray-200 shadow-sm flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oh FAQ
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 text-gray-800 font-semibold hover:text-black hover:bg-gray-100 rounded-md transition-colors border border-gray-200 shadow-sm flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wait, who are we again?
            </Link>
            <Button
              size="sm"
              className="rounded-full px-5 py-2.5 bg-black hover:bg-gray-800 text-white font-semibold shadow-md w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Contact High
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-10 md:pt-14 pb-12 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-5">
            What was his name?
            <br />
            Mark? Matt?
          </h1>

          {/* Subheading Style 2: Bold with Highlight */}
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
              Contact High shows you
              <span className="relative inline-block mx-1">
                <span className="relative z-10">which contacts</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
              </span>
              you saved,
              <span className="relative inline-block mx-1">
                <span className="relative z-10">when, and where</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
              </span>
              . No more <span className="italic">"what's his name, again?"</span>
            </p>
          </div>

          <Button
            size="lg"
            className="rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-medium bg-black hover:bg-gray-800 text-white"
          >
            Get Contact High
          </Button>

          <p className="text-sm text-gray-500 mt-3 mb-8 md:mb-10">Used by founders, flirts and social butterflies.</p>

          {/* Phone mockup with animated fog effect - responsive */}
          <div className="relative mx-auto max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl">
            {/* Animated fog elements - hidden on smallest screens, visible on sm and up */}
            <div className="hidden sm:block absolute top-[-150px] left-[-180px] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-pink-300 to-yellow-300 opacity-70 blur-2xl animate-fog-1 z-0"></div>

            <div className="hidden sm:block absolute top-[-30px] right-[-200px] w-[380px] h-[380px] rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-70 blur-2xl animate-fog-2 z-0"></div>

            <div className="hidden sm:block absolute bottom-[-150px] left-[-180px] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 opacity-70 blur-2xl animate-fog-3 z-0"></div>

            <div className="hidden sm:block absolute bottom-[-100px] right-[-180px] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-300 to-blue-300 opacity-70 blur-2xl animate-fog-4 z-0"></div>

            {/* Additional fog elements - hidden on smallest screens */}
            <div className="hidden sm:block absolute top-[40%] left-[-150px] w-[280px] h-[280px] rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 opacity-60 blur-2xl animate-fog-2 z-0"></div>

            <div className="hidden sm:block absolute top-[30%] right-[-160px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-pink-200 to-purple-200 opacity-60 blur-2xl animate-fog-3 z-0"></div>

            {/* Responsive phone mockup */}
            <div className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px] h-[500px] sm:h-[560px] md:h-[600px] lg:h-[640px] mx-auto bg-gray-100 rounded-[35px] border-4 border-gray-300 overflow-hidden shadow-xl relative z-10">
              <div className="absolute top-0 left-0 right-0 h-16 sm:h-18 md:h-20 bg-black rounded-t-[31px] flex justify-center items-end pb-1">
                <div className="w-24 sm:w-28 md:w-32 h-5 sm:h-6 bg-black rounded-b-xl"></div>
              </div>
              <div className="px-4 sm:px-5 md:px-6">
                {/* Fixed spacing to prevent cards from being cut off */}
                <div className="flex justify-between items-center pt-20 sm:pt-22 md:pt-24 pb-3">
                  <div className="text-xs sm:text-sm text-gray-500">Tuesday, 2:14 AM</div>
                  <div className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-0.5 sm:py-1 bg-yellow-200 rounded-full">
                    recents
                  </div>
                </div>

                {/* Contact cards - adjusted spacing */}
                <div className="bg-white rounded-xl p-3 sm:p-4 mb-2 sm:mb-3 shadow-sm border-l-4 border-pink-300">
                  <div className="flex justify-between">
                    <div className="text-sm sm:text-base font-bold">Jamie Something</div>
                    <div className="text-xs sm:text-sm bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded-full">2h ago</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Added at Rooftop Bar</div>
                  <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm italic text-gray-400">
                    "Talked about crypto for 45 min"
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 mb-2 sm:mb-3 shadow-sm border-l-4 border-blue-300">
                  <div className="flex justify-between">
                    <div className="text-sm sm:text-base font-bold">VC Guy (Alex?)</div>
                    <div className="text-xs sm:text-sm bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded-full">Yesterday</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Added at Conference</div>
                  <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm italic text-gray-400">"Has a podcast about AI"</div>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border-l-4 border-green-300">
                  <div className="flex justify-between">
                    <div className="text-sm sm:text-base font-bold">Cute Barista</div>
                    <div className="text-xs sm:text-sm bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded-full">3d ago</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Added at Coffee Shop</div>
                  <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm italic text-gray-400">
                    "Makes the best flat white"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-10 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">What it does (last time we checked)</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">🕒</div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Time-Based Sorting</h3>
            <p className="text-sm md:text-base text-gray-600">
              See who you added and when — like a memory timeline, minus the remembering.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">📍</div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Kinda Location Aware</h3>
            <p className="text-sm md:text-base text-gray-600">
              "You met Jamie in Lisbon. At 2:14AM." We don't ask questions, we just log it.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm sm:col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">🧠</div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Contextual Vibes</h3>
            <p className="text-sm md:text-base text-gray-600">
              Add quick tags like "VC guy" or "rooftop brunch" so future-you isn't confused.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Remember people. Or at least pretend to.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Because "nice to meet you again" is less awkward than "wait, who are you?"
          </p>
          <Button
            size="lg"
            className="rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-medium bg-black hover:bg-gray-800 text-white"
          >
            Get Contact High
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 md:py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold">Contact High</span>
            <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} • Made with foggy memories</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#privacy" className="text-sm text-gray-500 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-gray-500 hover:text-black transition-colors">
              Terms of Use
            </Link>
            <Link href="#contact" className="text-sm text-gray-500 hover:text-black transition-colors">
              Contact (if you remember)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
