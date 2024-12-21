"use client"

import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { NavigationItems } from "../sidebar/navigation-items"

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="h-14 border-b px-4 flex items-center">
          <span className="text-lg font-semibold">Travel</span>
        </div>
        <NavigationItems className="px-2" />
      </SheetContent>
    </Sheet>
  )
}