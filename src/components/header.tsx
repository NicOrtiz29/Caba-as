"use client";

import * as React from "react";
import Link from "next/link";
import { MountainSnow, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#cabins", label: "Cabañas" },
  { href: "#location", label: "Ubicación" },
  { href: "#ai-itinerary", label: "Tu Viaje Ideal" },
  { href: "#booking", label: "Reservas" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary text-black drop-shadow-[0_2px_6px_white]"
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );
  
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-header",
        isScrolled ? "border-b bg-header/90 backdrop-blur-sm" : "bg-header"
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <MountainSnow className="h-6 w-6 text-white" />
          <span className="hidden sm:inline-block font-headline text-lg font-bold uppercase tracking-widest text-black drop-shadow-[0_2px_6px_white]">
            Entreñires cabañas de montaña
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild className="hidden md:flex text-black drop-shadow-[0_2px_6px_white]" variant="outline">
            <Link href="#booking">Contactar</Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <MountainSnow className="h-6 w-6 text-white" />
                  <span className="font-headline text-lg font-bold uppercase tracking-widest text-black drop-shadow-[0_2px_6px_white]">Entreñires cabañas de montaña</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
                <Button asChild className="text-black drop-shadow-[0_2px_6px_white]">
                   <Link href="#booking" onClick={() => setMobileMenuOpen(false)}>Contactar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}