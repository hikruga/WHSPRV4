"use client"

import { TrendingUp, Activity, Brain, Wallet, BarChart3, PieChart, Users, Zap } from "lucide-react"

export interface WidgetConfig {
  id: string
  type: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  borderColor: string
  shadowColor: string
  defaultSize: { w: number; h: number }
  minSize: { w: number; h: number }
  category: 'market' | 'social' | 'trading' | 'analytics'
}

export const AVAILABLE_WIDGETS: WidgetConfig[] = [
  {
    id: 'top-gainers',
    type: 'top-gainers',
    title: 'Top Gainers',
    description: 'Highest performing Solana memecoins over 24 hours, ranked by percentage price increase.',
    icon: TrendingUp,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    shadowColor: 'shadow-emerald-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'market'
  },
  {
    id: 'hourly-performers',
    type: 'hourly-performers',
    title: 'Hourly Performers',
    description: 'Highest performing Solana memecoins over the last hour, ranked by percentage price increase.',
    icon: Activity,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    shadowColor: 'shadow-rose-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'market'
  },
  {
    id: 'volume-spike',
    type: 'volume-spike',
    title: 'Volume Spike',
    description: 'Tokens experiencing significant volume increases following periods of low buy pressure.',
    icon: BarChart3,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    shadowColor: 'shadow-amber-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'market'
  },
  {
    id: 'strong-survivors',
    type: 'strong-survivors',
    title: 'Strong Survivors',
    description: 'Coins launched 2+ days ago that maintain steady volume, holder growth, or price accumulation.',
    icon: TrendingUp,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    shadowColor: 'shadow-emerald-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'market'
  },
  {
    id: 'momentum-gainers',
    type: 'momentum-gainers',
    title: 'Momentum Gainers',
    description: 'Tokens ranked by sustained upward momentum and trading velocity.',
    icon: Zap,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    shadowColor: 'shadow-indigo-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'trading'
  },
  {
    id: 'holder-gainer',
    type: 'holder-gainer',
    title: 'Holder Gainer',
    description: 'Tokens experiencing the fastest growth in unique wallet holders.',
    icon: Users,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    shadowColor: 'shadow-purple-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'social'
  },
  {
    id: 'big-dips',
    type: 'big-dips',
    title: 'Big Dips',
    description: 'Tokens with market cap of 5M+ that experience sudden price drops of at least 50%.',
    icon: PieChart,
    color: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    shadowColor: 'shadow-orange-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'analytics'
  },
  {
    id: 'worst-performers',
    type: 'worst-performers',
    title: 'Worst Performers',
    description: 'Tokens with the largest price declines over 24 hours.',
    icon: TrendingUp,
    color: 'text-red-400',
    borderColor: 'border-red-500/20',
    shadowColor: 'shadow-red-500/10',
    defaultSize: { w: 3, h: 4 },
    minSize: { w: 2, h: 3 },
    category: 'analytics'
  }
]

export const WIDGET_CATEGORIES = {
  market: { label: 'Market Analysis', color: 'text-slate-400' },
  social: { label: 'Social Intelligence', color: 'text-purple-400' },
  trading: { label: 'Trading Signals', color: 'text-emerald-400' },
  analytics: { label: 'Analytics & Metrics', color: 'text-orange-400' }
} 