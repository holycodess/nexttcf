"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { ArrowRightLeft } from "lucide-react"

export default function FlightSearch() {
  return (
    <Card className="p-6 w-full">
      <div className="space-y-6">
        <RadioGroup defaultValue="oneWay" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneWay" id="oneWay" />
            <Label htmlFor="oneWay">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundTrip" id="roundTrip" />
            <Label htmlFor="roundTrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multiCity" id="multiCity" />
            <Label htmlFor="multiCity">Multi City</Label>
          </div>
        </RadioGroup>

        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label>From</Label>
              <div className="relative">
                <Input placeholder="Enter city or airport" defaultValue="Dhaka" />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Hazrat Shahjalal International Airport</p>
            </div>

            <div className="space-y-2">
              <Label>To</Label>
              <Input placeholder="Enter city or airport" defaultValue="Chittagong" />
              <p className="text-sm text-muted-foreground">Shah Amanat International</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Departure</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Select date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Return</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Select date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Travelers & Booking Class</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="1 Traveler, Economy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-economy">1 Traveler, Economy</SelectItem>
                <SelectItem value="2-economy">2 Travelers, Economy</SelectItem>
                <SelectItem value="1-business">1 Traveler, Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <RadioGroup defaultValue="regular" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="regular" id="regular" />
              <Label htmlFor="regular">Regular Fares</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Student Fares</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="seaman" id="seaman" />
              <Label htmlFor="seaman">Seaman Fares</Label>
            </div>
          </RadioGroup>

          <Button className="w-full" size="lg">
            Search
          </Button>
        </div>
      </div>
    </Card>
  )
}