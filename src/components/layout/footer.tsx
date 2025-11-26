import Deerhead from "@/app/icon.svg";
import Link from "next/link";
import type { Navigation, Website } from "@antlur/backstage";

interface FooterProps {
  navigation?: Navigation | null;
  website?: Website;
}

export function Footer({ navigation, website }: FooterProps) {
  const navItems = navigation?.items ?? [];

  return (
    <footer className="bg-footer text-footer-foreground py-4">
      {navItems.length > 0 && (
        <nav className="container mx-auto mb-4" aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url} className="hover:underline" target={item.new_window ? "_blank" : undefined}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="container mx-auto text-center flex items-center justify-center gap-1">
        <span>Website powered by</span>
        <Deerhead className="inline-block size-5 fill-current text-current" />
        <a href="https://antlur.co" className="primary hover:underline">
          Antlur Creative
        </a>
      </div>
    </footer>
  );
}
