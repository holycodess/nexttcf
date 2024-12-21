"use client"

import { useTheme } from "next-themes"
import SearchBar from "./search-bar"
import MobileMenu from "./mobile-menu"
import LanguageSelector from "./language-selector"
import Notifications from "./notifications"
import UserMenu from "./user-menu"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="flex h-14 items-center gap-4 px-4">
        <MobileMenu />
        <span className="text-xl font-semibold">Travel</span>
        
        <SearchBar />

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Notifications />
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}