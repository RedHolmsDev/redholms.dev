import type { ReactNode } from "react";

export default function Center({
  className,
  children
}: {
  className?: string,
  children: ReactNode
}) {
  return (
    <span className={"w-full flex justify-center " + (className || "")}>{children}</span>
  );
}
