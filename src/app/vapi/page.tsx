"use client"
import React from "react";
import { motion } from "framer-motion";

// Halo Landing, single-file React component for Next.js
// Tailwind required, framer-motion required

export default function HaloLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-60" />

        {/* Looping color overlay, subtle and premium */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[160%] h-[160%] -left-1/4 -top-1/4 transform-gpu animate-rotateSlow opacity-30 mix-blend-screen">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(112,66,246,0.18),transparent_30%),radial-gradient(circle_at_10%_20%,rgba(0,210,255,0.06),transparent_20%),linear-gradient(90deg,rgba(255,86,140,0.03),transparent)]" />
          </div>
        </div>

        {/* Subtle 3D parallax shapes */}
        <svg className="absolute right-[-10%] top-[-10%] w-[70vw] opacity-8 transform-gpu" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path d="M0,30 C20,0 40,80 100,20 L100,100 L0,100 Z" fill="url(#g1)" />
        </svg>
      </div>

      {/* Page container */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center shadow-2xl">
            <span className="font-semibold tracking-widest text-black">HALO</span>
          </div>
          <div>
            <div className="text-sm text-gray-300">Halo Smart Glass</div>
            <div className="text-xs text-gray-500">Innovation meets design</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <button className="ml-2 px-4 py-2 rounded-md bg-white text-black font-medium shadow-lg hover:scale-[1.02] transition-transform">Book a Consultation</button>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
              The future of glass, reimagined.
            </motion.h1>

            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg text-gray-300 max-w-xl">
              Halo Smart Glass merges engineering with craft, creating intelligent surfaces that control privacy, display content, and elevate architecture. From penthouses to storefronts, transform windows into living experiences.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-4">
              <a href="#book" className="inline-flex items-center gap-3 bg-gradient-to-br from-indigo-600 to-cyan-400 px-6 py-3 rounded-full font-semibold shadow-xl hover:scale-[1.02] transition-transform">
                Book a Consultation
              </a>
              <a href="#projects" className="inline-flex items-center gap-3 border border-gray-700 px-5 py-3 rounded-full text-gray-300 hover:text-white">View Projects</a>
            </motion.div>

            <div className="mt-6 text-sm text-gray-500">Available Mon-Fri, 10 AM to 6 PM, local time.</div>
          </div>

          {/* 3D showcase card */}
          <div className="relative">
            <div className="perspective-1000">
              <motion.div whileHover={{ rotateY: -8, scale: 1.02 }} className="relative rounded-3xl bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-gray-800 p-6 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-0 rounded-3xl border border-white/4 pointer-events-none" />

                <div className="grid grid-cols-1 gap-4">
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0f172a]/40 via-transparent to-[#0f172a]/10">
                    <div className="p-6">
                      <div className="text-sm text-gray-400">Featured solution</div>
                      <div className="text-2xl font-semibold mt-2">Micro LED Transparent Glass</div>
                      <p className="mt-3 text-gray-300 text-sm">Immersive display, zero compromise on transparency, seamless architectural integration.</p>

                      <div className="mt-6 flex gap-3">
                        <button className="px-4 py-2 rounded-md bg-white text-black font-medium">Request Specs</button>
                        <button className="px-4 py-2 rounded-md border border-white/10 text-white">Request Quote</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-700/20 to-cyan-400/10 flex items-end p-3">
                      <div className="text-xs text-gray-300">Smart Film</div>
                    </div>
                    <div className="h-24 rounded-lg bg-gradient-to-br from-violet-700/18 to-pink-400/8 flex items-end p-3">
                      <div className="text-xs text-gray-300">Smart Glass</div>
                    </div>
                    <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-500/12 to-sky-400/6 flex items-end p-3">
                      <div className="text-xs text-gray-300">Branded Design</div>
                    </div>
                  </div>
                </div>

                {/* subtle glow */}
                <div className="absolute -bottom-6 left-6 w-32 h-2 rounded-full blur-xl bg-gradient-to-r from-indigo-500 to-cyan-300 opacity-50" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="products" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-800">
          <h2 className="text-2xl font-semibold">Our solutions</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">Smart Film, Smart Glass, Micro LED Transparent Glass, custom branded smart surfaces, delivered with precision and design care.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Halo Smart Film', desc: 'Retrofit film that toggles privacy instantly.' },
              { title: 'Halo Smart Glass', desc: 'Integrated glass panels with control and clarity.' },
              { title: 'Micro LED Transparent Glass', desc: 'Transparent displays for immersive visuals.' },
              { title: 'Smart Glass with Logo', desc: 'Branded or patterned glass with dynamic effects.' },
            ].map((p) => (
              <motion.article key={p.title} whileHover={{ translateY: -6 }} className="rounded-2xl p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-gray-800 backdrop-blur-sm">
                <div className="text-sm text-gray-300">{p.title}</div>
                <div className="mt-3 text-gray-200 font-medium">{p.desc}</div>
                <div className="mt-4">
                  <button className="px-3 py-2 rounded-md border border-white/8 text-sm">Learn more</button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-xl font-semibold">How we work</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6 text-gray-300">
            {[
              { step: '1', title: 'Measurement & Design', desc: 'On-site assessment, bespoke panel layouts.' },
              { step: '2', title: 'Offsite Preparation', desc: 'Precision manufacturing with integrated tech.' },
              { step: '3', title: 'Delivery', desc: 'Specialized transport to site.' },
              { step: '4', title: 'Installation', desc: '2-4 days per m2, minimal disruption.' },
              { step: '5', title: 'Commissioning', desc: 'Testing and final handover.' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl p-4 bg-neutral-900/40 border border-gray-800">
                <div className="text-sm text-indigo-400 font-semibold">Step {s.step}</div>
                <div className="mt-2 font-medium">{s.title}</div>
                <div className="mt-1 text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section id="book" className="max-w-7xl mx-auto px-6 py-12 mt-6 rounded-2xl bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold">Ready to transform your space?</h4>
              <p className="text-gray-300 mt-1">Share a few details and our design team will contact you for a tailored consultation.</p>
            </div>

            <form action="/api/book" method="POST" className="w-full md:w-auto flex gap-3 items-center">
              <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-md bg-neutral-800 border border-gray-700 placeholder-gray-500" />
              <input name="email" required placeholder="Email" className="px-4 py-3 rounded-md bg-neutral-800 border border-gray-700 placeholder-gray-500" />
              <button type="submit" className="px-4 py-3 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-400 font-semibold">Request Consultation</button>
            </form>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto px-6 py-12 text-gray-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Halo Smart Glass</div>
              <div className="text-sm">A smarter way of living</div>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} Halo Smart Glass</div>
          </div>
        </footer>
      </main>

      {/* Extra styles */}
      <style jsx global>{`
        .perspective-1000 { perspective: 1400px; }
        .perspective-1000 > div { transform-style: preserve-3d; }

        @keyframes rotateSlow {
          0% { transform: rotate(0deg) translateZ(0); }
          50% { transform: rotate(18deg) translateZ(0); }
          100% { transform: rotate(0deg) translateZ(0); }
        }

        .animate-rotateSlow { animation: rotateSlow 16s linear infinite; }

        /* subtle low opacity on svg shapes across browsers */
        svg[aria-hidden] { opacity: 0.08; }

        /* small responsive tweaks */
        @media (max-width: 640px) {
          .perspective-1000 { perspective: 900px; }
        }
      `}</style>
    </div>
  );
}
