import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface PillProps {
  className?: string;
  label: string;
}

export const Pill = ({
  className,
  label,
  children,
}: PropsWithChildren<PillProps>) => {
  return (
    <div className={cn("rounded-full w-fit p-3 flex items-center", className)}>
      {children}
      <span className="ml-2">{label}</span>
    </div>
  );
};
