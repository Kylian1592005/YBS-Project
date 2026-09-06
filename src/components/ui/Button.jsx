import React from "react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./buttonVariants";

const Button = React.forwardRef(({ children, onClick, variant, size, className = "", type = "button", ...props }, ref) => (
  <button ref={ref} type={type} onClick={onClick} className={cn(buttonVariants({ variant, size }), className)} {...props}>
    {children}
  </button>
));
Button.displayName = "Button";

export { Button };
export default Button;