import { cva, VariantProps } from "class-variance-authority"

import {cn} from "@/utils/utils"
import { ComponentProps, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] disabled:opacity-35 disabled:cursor-not-allowed text-white focus:z-10 focus:outline-none focus:ring-4 border border-transparent rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-cyan-400 focus:ring-cyan-300 enabled:hover:bg-cyan-900",
        dark:
          "bg-gray-800 focus:ring-gray-300 enabled:hover:bg-gray-900",
        gray: "border-gray-200 bg-white text-gray-900 focus:text-cyan-700 enabled:hover:bg-gray-100 hover:text-cyan-700 ",
        light: "border-gray-300 bg-white text-gray-900 focus:ring-cyan-300 enabled:hover:bg-gray-100",
        success: "bg-green-700 focus:ring-green-300 enabled:hover:bg-green-800",
        danger:
          "bg-red-700 focus:ring-red-300 enabled:hover:bg-red-800",
        warning: "bg-yellow-400 focus:ring-yellow-300 enabled:hover:bg-yellow-500",
        link: "text-primary underline-offset-4 hover:underline",
        pinkToOrange: "bg-gradient-to-tr from-pink-500 to-orange-400 focus:ring-pink-200 enabled:hover:bg-gradient-to-l",
        greenToBlue: "bg-gradient-to-tr from-green-400 to-cyan-600 focus:ring-green-200 enabled:hover:bg-gradient-to-l",
        purpleToPink: "bg-gradient-to-tr from-purple-500 via-purple-600 to-pink-500 focus:ring-purple-200 enabled:hover:bg-gradient-to-l",
        redToYellow: "bg-gradient-to-tr from-red-200 via-red-300 to-yellow-200 text-gray-900 enabled:hover:bg-gradient-to-bl"
      },
      size: {
        default: "px-4 py-2 text-sm",
        xs: "px-3 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
        xl: "px-6 py-3 text-base",
        icon: "h-8 w-8"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean,
  pill?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild = false, pill=false, ...props}, ref) => {

  const Comp = asChild ? Slot : "button";

  return (
    <Comp ref={ref} className={cn(buttonVariants({variant, size, className}), `${pill && "rounded-full"}`)} {...props} />
  )
})

Button.displayName = "Button"