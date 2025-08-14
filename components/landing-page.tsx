"use client"

import { useState } from "react"

interface LandingPageProps {
  onAuthenticate: () => void
}

export function LandingPage({ onAuthenticate }: LandingPageProps) {
  const [authMode, setAuthMode] = useState<"none" | "setup" | "pin" | "confirm" | "loading">("none")
  const [pin, setPin] = useState(["", "", "", "", "", ""])
  const [confirmPin, setConfirmPin] = useState(["", "", "", "", "", ""])
  const [setupEmail, setSetupEmail] = useState("")

  const handlePinChange = (index: number, value: string, isConfirm = false) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const currentPin = isConfirm ? confirmPin : pin
      const setCurrentPin = isConfirm ? setConfirmPin : setPin

      const newPin = [...currentPin]
      newPin[index] = value
      setCurrentPin(newPin)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`${isConfirm ? "confirm-" : ""}pin-${index + 1}`)
        nextInput?.focus()
      }

      // Check if PIN is complete
      if (newPin.every((digit) => digit !== "") && newPin.join("").length === 6) {
        if (authMode === "pin") {
          // Sign in flow - go directly to loading
          setTimeout(() => {
            setAuthMode("loading")
          }, 500)
        } else if (authMode === "setup") {
          // Setup flow - go to confirm
          setTimeout(() => {
            setAuthMode("confirm")
          }, 500)
        } else if (authMode === "confirm") {
          // Check if PINs match
          if (pin.join("") === newPin.join("")) {
            setTimeout(() => {
              setAuthMode("loading")
            }, 500)
          } else {
            // PINs don't match - reset and show error
            setTimeout(() => {
              setConfirmPin(["", "", "", "", "", ""])
              alert("PINs don't match. Please try again.")
              const firstInput = document.getElementById("confirm-pin-0")
              firstInput?.focus()
            }, 500)
          }
        }
      }
    }
  }

  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/liminal-logo-new.jpeg" alt="LIMINAL Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {authMode === "none" && (
        <div className="absolute top-8 left-0 right-0 flex justify-between px-8 z-10">
          <button
            onClick={() => setAuthMode("setup")}
            className="glass-button-prismatic text-white/90 hover:text-white transition-all duration-300 text-sm font-light tracking-wide px-6 py-3"
          >
            <span className="relative z-10">Create Account</span>
          </button>
          <button
            onClick={() => setAuthMode("pin")}
            className="glass-button-prismatic text-white/90 hover:text-white transition-all duration-300 text-sm font-light tracking-wide px-6 py-3"
          >
            <span className="relative z-10">Sign In</span>
          </button>
        </div>
      )}

      {authMode === "setup" && (
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
          <div className="glass-panel-realistic px-8 py-4 backdrop-blur-md">
            <div className="text-center mb-4">
              <h2 className="chrome-text text-lg font-light mb-2">Create Your PIN</h2>
              <input
                type="email"
                placeholder="Recovery Email"
                value={setupEmail}
                onChange={(e) => setSetupEmail(e.target.value)}
                className="enhanced-input py-2 px-4 text-white placeholder-white/60 focus:outline-none transition-all text-sm mb-4"
                required
              />
            </div>
            <div className="flex gap-3 justify-center">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  className="w-12 h-12 glass-panel-realistic text-center text-white text-lg font-mono focus:outline-none transition-all backdrop-blur-md"
                  maxLength={1}
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {authMode === "confirm" && (
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
          <div className="glass-panel-realistic px-8 py-4 backdrop-blur-md">
            <div className="text-center mb-4">
              <h2 className="chrome-text text-lg font-light">Confirm Your PIN</h2>
            </div>
            <div className="flex gap-3 justify-center">
              {confirmPin.map((digit, index) => (
                <input
                  key={index}
                  id={`confirm-pin-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value, true)}
                  className="w-12 h-12 glass-panel-realistic text-center text-white text-lg font-mono focus:outline-none transition-all backdrop-blur-md"
                  maxLength={1}
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {authMode === "pin" && (
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
          <div className="glass-panel-realistic px-8 py-4 backdrop-blur-md">
            <div className="text-center mb-4">
              <h2 className="chrome-text text-lg font-light">Enter Your PIN</h2>
            </div>
            <div className="flex gap-3 justify-center">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  className="w-12 h-12 glass-panel-realistic text-center text-white text-lg font-mono focus:outline-none transition-all backdrop-blur-md"
                  maxLength={1}
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loading Screen */}
      {authMode === "loading" && (
        <div className="absolute inset-0 bg-black z-20">
          <video
            autoPlay
            muted
            className="w-full h-full object-cover"
            onEnded={() => {
              onAuthenticate()
            }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Whisk_cauajdiwzmu4zjdllwvmnmqtndy1oc1iztu1ltc%20%281%29-stytx0VCNDVShaXoZutVMkV1aXk6hC.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-white/50 text-xs font-light tracking-wide">
          LIMINAL is created by Lord Liminal LLC™ - © All Rights Reserved
        </p>
      </div>
    </div>
  )
}
