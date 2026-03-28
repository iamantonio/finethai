import Link from "next/link";
import { restaurantInfo } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient-gold mb-3">
              {restaurantInfo.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic Thai cuisine crafted with traditional recipes and the freshest ingredients.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-primary fill-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">4.7 / 5</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/menu", label: "Full Menu" },
                { href: "/#about", label: "Our Story" },
                { href: "/#location", label: "Location & Hours" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">
                  Order Online &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase">Hours</h4>
            <ul className="space-y-1.5">
              {restaurantInfo.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm gap-4">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className={h.hours === "Closed" ? "text-destructive" : "text-foreground/80"}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href={restaurantInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {restaurantInfo.address}
              </a>
              <a href={restaurantInfo.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {restaurantInfo.phone}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                </svg>
                Pickup & Delivery
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Serving Brookfield, La Grange, Riverside & surrounding areas
          </p>
        </div>
      </div>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}
