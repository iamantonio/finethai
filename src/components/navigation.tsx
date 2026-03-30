"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { restaurantInfo } from "@/data/menu";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#location", label: "Location" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsOpen: setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl lg:text-3xl font-bold text-gradient-gold tracking-tight">
              {restaurantInfo.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <a href={restaurantInfo.phoneHref} className="text-sm text-foreground/70 hover:text-primary transition-colors hidden lg:block">
              {restaurantInfo.phone}
            </a>
            <button
              onClick={() => itemCount > 0 ? setCartOpen(true) : undefined}
              className="relative"
            >
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6"
                render={itemCount > 0 ? <span /> : <Link href="/menu" />}
                onClick={itemCount > 0 ? () => setCartOpen(true) : undefined}
              >
                {itemCount > 0 ? `Cart (${itemCount})` : "Order Online"}
              </Button>
            </button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-80">
              <SheetTitle className="text-gradient-gold text-xl font-bold">
                {restaurantInfo.name}
              </SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-2 rounded-full"
                  render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
                >
                  Order Online
                </Button>
                <div className="border-t border-border pt-6 mt-2 space-y-3">
                  <p className="text-sm text-muted-foreground">{restaurantInfo.address}</p>
                  <a href={restaurantInfo.phoneHref} className="text-sm text-primary hover:underline block">
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* Mobile bottom nav bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="grid grid-cols-4 h-16">
          <Link
            href="/menu"
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="text-[10px] font-medium">Menu</span>
          </Link>
          <button
            onClick={() => itemCount > 0 ? setCartOpen(true) : undefined}
            className="flex flex-col items-center justify-center gap-1 text-primary font-semibold"
          >
            {itemCount > 0 ? (
              <Link href="#" onClick={(e) => { e.preventDefault(); setCartOpen(true); }} className="flex flex-col items-center">
                <div className="relative w-10 h-10 -mt-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                </div>
                <span className="text-[10px]">Cart</span>
              </Link>
            ) : (
              <Link href="/menu" className="flex flex-col items-center">
                <div className="w-10 h-10 -mt-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <span className="text-[10px]">Order</span>
              </Link>
            )}
          </button>
          <a
            href={restaurantInfo.phoneHref}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="text-[10px] font-medium">Call</span>
          </a>
          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-[10px] font-medium">Location</span>
          </a>
        </div>
      </div>
    </>
  );
}
