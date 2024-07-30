import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative z-[1] transition-all duration-500 after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:transition-all after:duration-500 after:z-[-1] hover:after:w-full group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground after:bg-secondary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-gray-200 after:bg-secondary hover:text-cream-foreground",
        secondary: "bg-green text-cream-foreground rounded-md leading-normal after:bg-secondary ",
        ghost: "bg-secondary text-cream-foreground rounded-md leading-normal after:bg-green",
        pill: "bg-destructive border-2 border-destructive rounded-full text-cream-foreground hover:bg-transparent hover:text-destructive-foreground",
      },
      size: {
        default: "max-h-15 lg:py-5 px-[30px] py-2.5",
        sm: "h-9 rounded-md px-3",
        lg: "max-h-15 lg:py-[18px] px-7 py-2.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
