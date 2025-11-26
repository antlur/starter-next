"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { Navigation, NavigationItem, Website } from "@antlur/backstage";

// Fallback navigation for when CMS data is not available
const defaultNavItems: Pick<NavigationItem, "id" | "url" | "text" | "new_window">[] = [
  { id: "1", url: "/", text: "Home", new_window: false },
  { id: "2", url: "/about", text: "About", new_window: false },
  { id: "3", url: "/services", text: "Services", new_window: false },
  { id: "4", url: "/contact", text: "Contact", new_window: false },
];

interface HeaderProps {
  navigation?: Navigation | null;
  website?: Website;
}

export function Header({ navigation, website }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use CMS navigation if available, otherwise fall back to defaults
  const navItems = navigation?.items?.length ? navigation.items : defaultNavItems;
  const siteName = website?.app_name ?? "Antlur Next.js Starter";

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-header text-header-foreground py-4 px-6">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">{siteName}</Link>
        </div>
        <nav className="hidden md:flex" aria-label="Main navigation">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url} className="hover:underline" target={item.new_window ? "_blank" : undefined}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="hover:underline block py-2"
                  target={item.new_window ? "_blank" : undefined}
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
