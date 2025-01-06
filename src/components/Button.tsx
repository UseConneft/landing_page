import React from 'react'

interface ButtonProps {
  text: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function Button({
  text,
  className = "",
  style = {},
  onClick,
  type = "button",
  disabled = false
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      style={style}
    >
      {text}
    </button>
  )
}
