"use client"

import { useState } from "react"
import { Menu, User, Brain, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function WHSPRAIPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-background"></div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>

      {/* Scanning Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="scan-line"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-4 border-b border-slate-500/30 bg-gradient-to-r from-black via-gray-900/20 to-black shadow-lg shadow-slate-500/10 header-nav">
        {/* Left spacer for centering */}
        <div className="w-20"></div>

        {/* Center - Logo and Navigation in same rounded container */}
        <nav className="hidden md:flex items-center space-x-8 bg-black/40 border border-slate-500/30 rounded-2xl px-8 py-3 backdrop-blur-sm relative overflow-hidden nav-glow">
          <Link href="/" className="mr-4 logo-container">
            <img 
              src="/whspr-neon-logo.png" 
              alt="WHSPR" 
              className="h-16 w-auto cursor-pointer neon-logo transition-all duration-300"
            />
          </Link>
          <Link href="/monitors" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium nav-item">
            Trench Monitors
          </Link>
          <Link href="/whspr-ai" className="text-white hover:text-purple-400 transition-colors font-medium nav-item">
            WHSPR Calls
          </Link>
          <Link href="/smart-wallets" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium nav-item">
            Smart Wallets
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-orange-400 transition-colors font-medium nav-item">
            About
          </Link>
        </nav>

        {/* Right spacer for centering */}
        <div className="w-20"></div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-slate-500/10 hover:shadow-lg hover:shadow-slate-500/20 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5 text-slate-400" />
        </Button>
      </header>

      {/* Main Content */}
      <div className="p-4 main-container">
        {/* WHSPR AI Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 pl-4">
            <Brain className="h-6 w-6 text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              WHSPR AI
            </h1>
          </div>
          <div className="bg-black/60 border border-purple-500/20 rounded-lg p-4 backdrop-blur-[0.5rem] shadow-lg shadow-purple-500/10">
            <p className="text-gray-300 text-sm leading-relaxed">
              WHSPR is a powerful AI trained to identify high-potential opportunities through real-time analysis of market trends, social sentiment, and on-chain data. Never miss a runner again.
            </p>
          </div>
        </div>

        {/* WHSPR Calls Content */}
        <Card className="bg-black/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 mb-6 backdrop-blur-[0.5rem]">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pick 1 - $MASK */}
              <div className="relative p-4 rounded-lg bg-gradient-to-br from-purple-900/20 via-cyan-900/10 to-black border border-purple-500/40 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Neon accent line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60"></div>

                {/* Header with profile and close */}
                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-400/60 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-400/50 transition-all duration-300">
                        <img src="/images/ninja-cat.png" alt="MASK" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse shadow-lg shadow-emerald-400/50"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          $MASK
                        </span>
                        <button className="w-4 h-4 bg-gray-700 hover:bg-purple-600/50 rounded flex items-center justify-center transition-colors">
                          <span className="text-xs text-gray-300">📋</span>
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm">catwifmask</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-400 text-xs">MC</div>
                    <div className="text-white font-semibold">$13.0M</div>
                    <div className="text-cyan-400 text-xs mt-1">👥 2.9K</div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mb-4">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-red-400/50">
                    <span className="text-red-400">✕</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-yellow-400/50">
                      <span className="text-yellow-400">⭐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-pink-400/50">
                      <span className="text-pink-400">❤️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <span className="text-blue-400">👤</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <span className="text-green-400">💬</span>
                    </button>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md">
                    <span>⚡</span>
                    Trade
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-purple-400 text-xs">Picked</div>
                    <div className="text-white font-bold">2d ago</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">116.5x</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">177.9x</div>
                  </div>
                </div>
              </div>

              {/* Pick 2 - $PEPE */}
              <div className="relative p-4 rounded-lg bg-gradient-to-br from-green-900/20 via-pink-900/10 to-black border border-green-500/40 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 overflow-hidden group">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-pink-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Neon accent line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"></div>

                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-green-400/60 shadow-lg shadow-green-500/30 group-hover:shadow-green-400/50 transition-all duration-300">
                        <img src="/images/space-pig.png" alt="PEPE" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse shadow-lg shadow-emerald-400/50"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent">
                          $PEPE
                        </span>
                        <button className="w-4 h-4 bg-gray-700 hover:bg-green-600/50 rounded flex items-center justify-center transition-colors">
                          <span className="text-xs text-gray-300">📋</span>
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm">pepewifhat</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-xs">MC</div>
                    <div className="text-white font-semibold">$7.8B</div>
                    <div className="text-pink-400 text-xs mt-1">👥 234K</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-red-400/50">
                    <span className="text-red-400">✕</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-yellow-400/50">
                      <span className="text-yellow-400">⭐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-pink-400/50">
                      <span className="text-pink-400">❤️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <span className="text-blue-400">👤</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <span className="text-green-400">💬</span>
                    </button>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md">
                    <span>⚡</span>
                    Trade
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-green-400 text-xs">Picked</div>
                    <div className="text-white font-bold">5h ago</div>
                  </div>
                  <div>
                    <div className="text-pink-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">89.2x</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">124.7x</div>
                  </div>
                </div>
              </div>

              {/* Pick 3 - $DOGE */}
              <div className="relative p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 via-orange-900/10 to-black border border-cyan-500/40 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden group">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-orange-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Neon accent line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all duration-300">
                        <img src="/images/blue-bunny.png" alt="DOGE" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse shadow-lg shadow-emerald-400/50"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                          $DOGE
                        </span>
                        <button className="w-4 h-4 bg-gray-700 hover:bg-cyan-600/50 rounded flex items-center justify-center transition-colors">
                          <span className="text-xs text-gray-300">📋</span>
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm">dogewifcoin</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 text-xs">MC</div>
                    <div className="text-white font-semibold">$15.4B</div>
                    <div className="text-orange-400 text-xs mt-1">👥 4.8K</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-red-400/50">
                    <span className="text-red-400">✕</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-yellow-400/50">
                      <span className="text-yellow-400">⭐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-pink-400/50">
                      <span className="text-pink-400">❤️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                      <span className="text-blue-400">👤</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                      <span className="text-green-400">💬</span>
                    </button>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md">
                    <span>⚡</span>
                    Trade
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-cyan-400 text-xs">Picked</div>
                    <div className="text-white font-bold">1d ago</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs">Current Gain</div>
                    <div className="text-emerald-400 font-bold text-lg">45.8x</div>
                  </div>
                  <div>
                    <div className="text-purple-400 text-xs">Highest Gain</div>
                    <div className="text-emerald-400 font-bold">67.3x</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add the CSS styles */}
      <style jsx>{`
        .grid-background {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 15s infinite linear;
        }

        .particle-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 12s;
        }

        .particle-2 {
          top: 20%;
          left: 80%;
          animation-delay: -2s;
          animation-duration: 18s;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%);
        }

        .particle-3 {
          top: 60%;
          left: 20%;
          animation-delay: -4s;
          animation-duration: 14s;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, transparent 70%);
        }

        .particle-4 {
          top: 80%;
          left: 70%;
          animation-delay: -6s;
          animation-duration: 16s;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%);
        }

        .particle-5 {
          top: 30%;
          left: 50%;
          animation-delay: -8s;
          animation-duration: 20s;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, transparent 70%);
        }

        .particle-6 {
          top: 70%;
          left: 90%;
          animation-delay: -10s;
          animation-duration: 13s;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);
        }

        .particle-7 {
          top: 40%;
          left: 5%;
          animation-delay: -12s;
          animation-duration: 17s;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, transparent 70%);
        }

        .particle-8 {
          top: 90%;
          left: 40%;
          animation-delay: -14s;
          animation-duration: 19s;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(10px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-10vh) translateX(-10px) scale(1);
          }
          100% {
            transform: translateY(-20vh) translateX(0px) scale(0);
            opacity: 0;
          }
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(6, 182, 212, 0.6) 50%, 
            transparent 100%);
          animation: scan 8s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        @keyframes scan {
          0%, 100% {
            transform: translateY(0vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .main-container {
          position: relative;
          z-index: 1;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </div>
  )
} 