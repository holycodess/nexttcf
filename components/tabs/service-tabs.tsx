"use client"

import { Plane, Hotel, FileText, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { icon: Plane, label: "Flight" },
  { icon: Hotel, label: "Hotel" },
  { icon: FileText, label: "Visa" },
  { icon: CreditCard, label: "eSim" },
]

export default function ServiceTabs() {
  return (
    <div className="w-full border-b bg-background sticky top-14 z-40">
      <div className="flex md:ml-16 transition-all duration-300">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={cn(
              "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors flex-1",
              index === 0
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}