"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  menuCategories,
  restaurantInfo,
  type SpiceLevel,
  type DietaryTag,
} from "@/data/menu";

const spiceConfig: Record<SpiceLevel, { label: string; dots: number; color: string }> = {
  none: { label: "No spice", dots: 0, color: "" },
  mild: { label: "Mild", dots: 1, color: "text-yellow-500" },
  medium: { label: "Medium", dots: 2, color: "text-orange-500" },
  spicy: { label: "Spicy", dots: 3, color: "text-red-500" },
};

const dietaryConfig: Record<DietaryTag, { label: string; color: string }> = {
  vegetarian: { label: "Vegetarian", color: "bg-green-900/30 text-green-400 border-green-800/50" },
  vegan: { label: "Vegan", color: "bg-emerald-900/30 text-emerald-400 border-emerald-800/50" },
  "gluten-free": { label: "GF", color: "bg-amber-900/30 text-amber-400 border-amber-800/50" },
  seafood: { label: "Seafood", color: "bg-blue-900/30 text-blue-400 border-blue-800/50" },
};

function SpiceDots({ level }: { level: SpiceLevel }) {
  const config = spiceConfig[level];
  if (config.dots === 0) return null;
  return (
    <span className={`flex items-center gap-0.5 ${config.color}`} title={config.label}>
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-1.5 h-1.5 rounded-full ${
            i < config.dots ? "bg-current" : "bg-current/20"
          }`}
        />
      ))}
    </span>
  );
}

export function MenuPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [dietaryFilter, setDietaryFilter] = useState<DietaryTag | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isScrolling, setIsScrolling] = useState(false);

  const filteredCategories = useMemo(() => {
    const q = search.toLowerCase().trim();
    return menuCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const matchesSearch =
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q);
          const matchesDietary =
            !dietaryFilter ||
            item.dietaryTags?.includes(dietaryFilter);
          return matchesSearch && matchesDietary;
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [search, dietaryFilter]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    setIsScrolling(true);
    const el = categoryRefs.current[id];
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 600);
    }
  };

  useEffect(() => {
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    for (const ref of Object.values(categoryRefs.current)) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [filteredCategories, isScrolling]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
          Our Menu
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Explore Our Full Menu
        </h1>
        <p className="text-muted-foreground max-w-xl">
          From classic Pad Thai to chef&apos;s specials — every dish prepared to order with fresh ingredients.
          Choose your protein on most dishes.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {(Object.entries(dietaryConfig) as [DietaryTag, typeof dietaryConfig[DietaryTag]][]).map(
            ([key, config]) => (
              <button
                key={key}
                onClick={() => setDietaryFilter(dietaryFilter === key ? null : key)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                  dietaryFilter === key
                    ? config.color
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {config.label}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex gap-8">
        {/* Category sidebar (desktop) */}
        <nav className="hidden lg:block w-48 shrink-0">
          <div className="sticky top-24 space-y-1">
            {filteredCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.name}
                <span className="text-xs ml-1 opacity-60">({cat.items.length})</span>
              </button>
            ))}

            <div className="border-t border-border pt-4 mt-4">
              <Button
                size="sm"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
              >
                Order Online
              </Button>
            </div>

            {/* Spice level legend */}
            <div className="border-t border-border pt-4 mt-4">
              <p className="text-xs text-muted-foreground font-medium mb-2">Spice Level</p>
              <div className="space-y-1.5">
                {(["mild", "medium", "spicy"] as SpiceLevel[]).map((level) => (
                  <div key={level} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <SpiceDots level={level} />
                    <span>{spiceConfig[level].label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile category pills */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {filteredCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 space-y-12 pb-20 lg:pb-0">
          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No dishes found</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}

          {filteredCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              ref={(el) => { categoryRefs.current[category.id] = el; }}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {category.name}
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({category.items.length} items)
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-foreground">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                              Popular
                            </Badge>
                          )}
                          {item.greatPrice && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-green-900/30 text-green-400 border-green-800/50">
                              Great Price
                            </Badge>
                          )}
                          <SpiceDots level={item.spiceLevel} />
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                            {item.description}
                          </p>
                        )}
                        {item.dietaryTags && item.dietaryTags.length > 0 && (
                          <div className="flex gap-1.5 mt-2">
                            {item.dietaryTags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[10px] px-1.5 py-0.5 rounded border ${dietaryConfig[tag].color}`}
                              >
                                {dietaryConfig[tag].label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-primary font-bold text-lg shrink-0">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
