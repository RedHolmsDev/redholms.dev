import type { ReactNode } from "react";

export default function MyLink({
  className,
  href,
  children
}: {
  className?: string,
  href: string,
  children: ReactNode
}) {
  return <a className={"text-[#ab7ebf] " + (className || "")} href={href}>{children}</a>;
}
