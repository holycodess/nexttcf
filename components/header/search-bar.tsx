"use client"

import { Search, X } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useState } from "react"

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <>
      {/* Desktop Search */}
      <div className="hidden md:flex flex-1">
        <div className="relative max-w-[500px] w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search flights, hotels, visa services..." 
            className="pl-8 w-full"
          />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden flex-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        >
          <Search className="h-5 w-5" />
        </Button>
        {isSearchVisible && (
          <div className="absolute left-0 right-0 top-14 p-4 bg-background border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search flights, hotels, visa services..." 
                className="pl-8 pr-8"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchVisible(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}