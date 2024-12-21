"use client"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { 
  Home, 
  Building2, 
  Plane, 
  Hotel, 
  Calendar, 
  Car, 
  Ticket, 
  FileText, 
  Shield, 
  FileQuestion,
  Newspaper,
  BookOpen,
  Gift,
  Menu
} from "lucide-react"
import { useState } from "react"

const sidebarItems = [
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

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "relative border-r bg-background transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        {!isCollapsed && <span className="ml-2 text-lg font-semibold">Travel</span>}
      </div>

      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-1 p-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                isCollapsed && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-2">{item.label}</span>}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}