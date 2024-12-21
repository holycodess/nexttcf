"use client"

import { 
  Home, Building2, Plane, Hotel, Calendar, Car, 
  Ticket, FileText, Shield, FileQuestion, Newspaper, 
  BookOpen, Gift 
} from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: Building2, label: "Services" },
  { icon: Plane, label: "Flights" },
  { icon: Hotel, label: "Hotels" },
  { icon: Calendar, label: "Holidays" },
  { icon: Car, label: "Cars" },
  { icon: Ticket, label: "Events" },
  { icon: FileText, label: "Visa" },
  { icon: Shield, label: "Travel Insurance" },
  { icon: FileQuestion, label: "Travel Advisory" },
  { icon: Newspaper, label: "News" },
  { icon: BookOpen, label: "Blog" },
  { icon: Gift, label: "Promotions" },
]

interface NavigationItemsProps {
  className?: string
  showLabels?: boolean
}

export function NavigationItems({ className, showLabels = true }: NavigationItemsProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {sidebarItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className="w-full justify-start"
        >
          <item.icon className="h-5 w-5" />
          {showLabels && <span className="ml-2">{item.label}</span>}
        </Button>
      ))}
    </div>
  )
}