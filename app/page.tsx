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
                  <path d="M6 12C6 8.68629 8.68629 6 12 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
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
            href="#how-it-works"
            className="px-4 py-2 text-gray-800 font-semibold hover:text-black hover:bg-gray-100 rounded-md transition-colors border border-gray-200 shadow-sm flex items-center"
          >
            How it works (we think)
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
              href="#how-it-works"
              className="px-4 py-2 text-gray-800 font-semibold hover:text-black hover:bg-gray-100 rounded-md transition-colors border border-gray-200 shadow-sm flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works (we think)
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
            className="rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-medium bg-black hover:bg-gray-800 text-white mb-8 md:mb-10"
          >
            Get Contact High
          </Button>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-8 md:mb-10">
            <span className="text-sm text-gray-600 font-medium">Used by</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm shadow-sm">
              💼 founders
            </span>
            <span className="text-gray-400">•</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-pink-100 text-pink-800 font-semibold text-sm shadow-sm">
              💕 flirts
            </span>
            <span className="text-gray-400">•</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-800 font-semibold text-sm shadow-sm">
              🦋 social butterflies
            </span>
          </div>

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

                <div className="bg-white rounded-xl p-3 sm:p-4 mb-2 sm:mb-3 shadow-sm border-l-4 border-green-300">
                  <div className="flex justify-between">
                    <div className="text-sm sm:text-base font-bold">Cute Barista</div>
                    <div className="text-xs sm:text-sm bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded-full">3d ago</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Added at Coffee Shop</div>
                  <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm italic text-gray-400">
                    "Makes the best flat white"
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border-l-4 border-purple-300">
                  <div className="flex justify-between">
                    <div className="text-sm sm:text-base font-bold">Sarah from Startup</div>
                    <div className="text-xs sm:text-sm bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded-full">1w ago</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">Added at Networking Event</div>
                  <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm italic text-gray-400">
                    "Building something with AI"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Join 1,000+ people who remember names (kinda)
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Used by founders, flirts and social butterflies who are tired of forgetting names.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 - Founder */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">💼</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Founder
              </div>
            </div>
            <blockquote className="text-sm md:text-base text-gray-700 italic mb-4">
              "I used to save contacts and never find them again. Now I know exactly when I saved each one."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">- Sarah, Founder</cite>
          </div>

          {/* Testimonial 2 - Flirt */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-pink-500">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">💕</div>
              <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                Flirt
              </div>
            </div>
            <blockquote className="text-sm md:text-base text-gray-700 italic mb-4">
              "Before ContactHigh, I'd think 'what's their name again?' Now I can actually follow up with people."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">- Alex, Professional Flirt</cite>
          </div>

          {/* Testimonial 3 - Social Butterfly */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">🦋</div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Social Butterfly
              </div>
            </div>
            <blockquote className="text-sm md:text-base text-gray-700 italic mb-4">
              "I have 847 contacts and used to lose track of who was who. Now I know when I saved each one."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">- Jamie, Social Butterfly</cite>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            How it works (we think)
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Three steps to never losing track of contacts again. Well, mostly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-6xl mb-4">👋</div>
            <h3 className="text-xl font-bold mb-3">Meet Someone</h3>
            <p className="text-gray-600">
              You meet someone. At a bar, conference, or 2 AM taco stand. We don't judge.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Save Them (Like Normal)</h3>
            <p className="text-gray-600">
              Save them to your phone (like normal). ContactHigh logs when and where.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">Find Them Later (Kinda)</h3>
            <p className="text-gray-600">
              Next time you're scrolling through contacts, you'll know exactly when you saved them. Magic (kinda).
            </p>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">What it does (last time we checked)</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Three simple things that make your contact list less confusing. We promise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">🕒</div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Time-Based Sorting</h3>
            <p className="text-sm md:text-base text-gray-600">
              See who you added and when — like a memory timeline, minus the remembering.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">📍</div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Kinda Location Aware</h3>
            <p className="text-sm md:text-base text-gray-600">
              "You met Jamie in Lisbon. At 2:14AM." We don't ask questions, we just log it.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200 sm:col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">🧠</div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Contextual Vibes</h3>
            <p className="text-sm md:text-base text-gray-600">
              Add quick tags like "VC guy" or "rooftop brunch" so future-you isn't confused.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Pricing (we kept it simple)
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Because complicated pricing is almost as annoying as forgetting names
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-200">
            {/* Pricing Header */}
            <div className="text-center mb-10 pb-8 border-b border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Free Forever</h3>
              <div className="text-5xl font-bold mb-3">
                $0<span className="text-xl text-gray-500 font-normal">/month</span>
              </div>
              <p className="text-gray-500 text-lg">(We're not that ambitious)</p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
              {/* What You Get */}
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h4 className="font-bold text-xl text-green-700">What You Get</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-0.5 text-lg">✅</span>
                    <span className="text-gray-700 leading-relaxed">Unlimited contact logging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-0.5 text-lg">✅</span>
                    <span className="text-gray-700 leading-relaxed">Time-based sorting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-0.5 text-lg">✅</span>
                    <span className="text-gray-700 leading-relaxed">Location logging (kinda)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-0.5 text-lg">✅</span>
                    <span className="text-gray-700 leading-relaxed">Quick notes & tags</span>
                  </li>
                </ul>
              </div>

              {/* What You Don't Get */}
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">✕</span>
                  </div>
                  <h4 className="font-bold text-xl text-red-700">What You Don't Get</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5 text-lg">❌</span>
                    <span className="text-gray-700 leading-relaxed">AI face recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5 text-lg">❌</span>
                    <span className="text-gray-700 leading-relaxed">Social media stalking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5 text-lg">❌</span>
                    <span className="text-gray-700 leading-relaxed">Memory guarantees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-0.5 text-lg">❌</span>
                    <span className="text-gray-700 leading-relaxed">Premium support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-gray-100">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Get Contact High
              </Button>
              <p className="text-gray-500 text-sm mt-4">No credit card required. No strings attached. No kidding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Oh FAQ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Questions we get asked (and our honest answers)
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3">Will this actually work?</h3>
            <p className="text-gray-600">
              Kinda, but it's better than nothing. Look, we can't fix your memory, but we can log when and where you saved each contact. That's already better than staring at "Mike from Conference" in your phone at 3 AM trying to remember who he is.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3">Is my data safe?</h3>
            <p className="text-gray-600">
              Safer than your memory, that's for sure. We don't sell your data, we don't share it, and honestly, we're not even sure what we'd do with it. Your awkward networking moments are yours alone.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3">What if I forget to save someone to my contacts?</h3>
            <p className="text-gray-600">
              Then ContactHigh can't help you. It only works with contacts you've already saved to your phone. (We're helpful, not mind readers.)
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3">Can I export my contacts?</h3>
            <p className="text-gray-600">
              Eventually, yeah. Right now we're focused on making sure the app doesn't crash when you add your 500th "guy from networking event." Priorities.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3">Do you have an app?</h3>
            <p className="text-gray-600">
              Not yet. This is a landing page demonstrating how good brand voice can make simple ideas interesting. But if enough people ask, maybe we'll build the actual thing. (No promises.)
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3">Why "Contact High"?</h3>
            <p className="text-gray-600">
              Because "People You Met But Might Forget" was too long. And because we think it's funny. You're allowed to disagree.
            </p>
          </div>
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
