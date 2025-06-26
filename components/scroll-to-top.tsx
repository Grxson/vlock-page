"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.pageYOffset > 300
      // ⬇️ update only when the value is different
      setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev))
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in p-0"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
