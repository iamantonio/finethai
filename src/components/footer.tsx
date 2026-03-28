import Link from "next/link";
import { restaurantInfo } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-gold mb-3">
              {restaurantInfo.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic Thai cuisine crafted with traditional recipes and the freshest ingredients. Serving the Brookfield community with love.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Hours</h4>
            <ul className="space-y-1.5">
              {restaurantInfo.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className={h.hours === "Closed" ? "text-destructive" : "text-foreground"}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {restaurantInfo.address}
              </a>
              <a
                href={restaurantInfo.phoneHref}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {restaurantInfo.phone}
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                </svg>
                Pickup & Delivery Available
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/menu" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Order Online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
