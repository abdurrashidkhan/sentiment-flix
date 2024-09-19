"use client";
import { usePathname } from "next/navigation";
export default function ActiveLink() {
  const pathname = usePathname();
  // console.log(pathname);
  return pathname;
}
