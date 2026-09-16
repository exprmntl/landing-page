"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Latest" },
  { href: "/directions", label: "Compare" },
  { href: "/directions/original", label: "00 Original" },
  { href: "/directions/products", label: "01 Products" },
  { href: "/directions/lab", label: "02 The lab" },
  { href: "/directions/gallery", label: "03 Gallery" },
];

export function DirectionNav() {
  const pathname = usePathname();
  return (
    <aside className="direction-preview" aria-label="Design review tools">
      <span className="direction-label">HOMEPAGE STUDIES</span>
      <nav aria-label="Compare homepage directions">
        {links.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
