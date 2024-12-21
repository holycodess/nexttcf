"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Menu } from "lucide-react"
import { useState } from "react"
import { NavigationItems } from "./navigation-items"

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div
      data-sidebar
      className={cn(
        "relative border-r bg-background transition-all duration-300 hidden md:block",
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
        <NavigationItems showLabels={!isCollapsed} />
      </ScrollArea>
    </div>
  )
}