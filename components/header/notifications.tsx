"use client"

import { Bell } from "lucide-react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const notifications = [
  {
    id: 1,
    title: "Special Offer",
    message: "30% off on international flights!",
    time: "5 mins ago",
    type: "offer"
  },
  {
    id: 2,
    title: "Booking Confirmed",
    message: "Your hotel booking has been confirmed",
    time: "1 hour ago",
    type: "booking"
  },
  {
    id: 3,
    title: "Price Alert",
    message: "Prices dropped for your saved flight",
    time: "2 hours ago",
    type: "alert"
  },
  {
    id: 4,
    title: "New Destination",
    message: "Explore our new routes to Bangkok!",
    time: "3 hours ago",
    type: "update"
  }
]

export default function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="px-4 py-2 font-medium border-b">Notifications</div>
        <div className="max-h-[400px] overflow-auto">
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4 cursor-pointer">
              <div className="font-medium">{notification.title}</div>
              <div className="text-sm text-muted-foreground">{notification.message}</div>
              <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}