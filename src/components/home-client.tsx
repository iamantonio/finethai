"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { restaurantInfo, menuCategories } from "@/data/menu";
import { FadeIn, StaggerChildren, StaggerItem, FloatingCTA } from "@/components/animations";
import { ThaiOrnament } from "@/components/thai-ornament";

interface FeaturedDish {
  name: string;
  description: string;
  price: string;
  tag: string;
  image: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-primary fill-primary" : "text-border"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function HomeClient({
  featuredDishes,
  reviews,
  totalItems,
}: {
  featuredDishes: FeaturedDish[];
  reviews: Review[];
  totalItems: number;
}) {
  return (
    <>
      {/* Hero Section — Full bleed with image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1920&h=1080&fit=crop"
            alt="Thai cuisine"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 w-full">
          <FadeIn delay={0.2}>
            <Badge variant="outline" className="border-primary/40 text-primary mb-6 py-1.5 px-4 text-sm backdrop-blur-sm">
              Brookfield&apos;s Favorite Thai Restaurant
            </Badge>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 max-w-3xl">
              Authentic Thai{" "}
              <span className="text-gradient-gold">Cuisine</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-md mb-10 leading-relaxed">
              Traditional recipes. Fresh ingredients. Convenient online ordering for pickup or delivery.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-13 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
                render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Order Online
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold text-base px-8 h-13 rounded-full backdrop-blur-sm"
                render={<Link href="/menu" />}
              >
                Browse Menu
              </Button>
            </div>
          </FadeIn>

          {/* Trust signals */}
          <FadeIn delay={1.0}>
            <div className="flex items-center gap-6 mt-14 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Stars count={5} />
                <span>4.7 Rating</span>
              </div>
              <span className="text-border">|</span>
              <span>{totalItems}+ Menu Items</span>
              <span className="text-border hidden sm:inline">|</span>
              <span className="hidden sm:inline">Pickup & Delivery</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <a href={restaurantInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                9305 Ogden Ave, Brookfield
              </a>
              <a href={restaurantInfo.phoneHref} className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors hidden sm:flex">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {restaurantInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-sm font-semibold">10% off orders $60+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes — Image-driven cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">From Our Kitchen</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Guest Favorites
              </h2>
              <ThaiOrnament className="mt-6 max-w-xs mx-auto" />
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <StaggerItem key={dish.name}>
                <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm">
                      {dish.tag}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{dish.name}</h3>
                      <span className="text-primary font-bold">{dish.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary rounded-full px-8"
              render={<Link href="/menu" />}
            >
              View Full Menu &rarr;
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* About / Story Section */}
      <section id="about" className="py-24 bg-card scroll-mt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">
                  A Taste of{" "}
                  <span className="text-gradient-gold">Thailand</span>{" "}
                  in Brookfield
                </h2>
                <div className="space-y-5 text-foreground/70 leading-relaxed text-lg">
                  <p>
                    Fine Thai brings authentic Thai flavors to the heart of Brookfield. Our chefs combine generations of culinary tradition with the freshest locally sourced ingredients.
                  </p>
                  <p>
                    Every dish — from our aromatic curries to our perfectly balanced Pad Thai — is prepared to order, crafted with the care of a home kitchen and the precision of a professional one.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                  {[
                    { value: "102+", label: "Menu Items" },
                    { value: "14", label: "Categories" },
                    { value: "9", label: "Vegetarian Dishes" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=533&fit=crop"
                      alt="Thai curry dish"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
                    <p className="text-primary font-bold text-lg">Fresh Daily</p>
                    <p className="text-sm text-muted-foreground mt-1">All ingredients sourced fresh every morning</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl bg-secondary p-6 border border-border">
                    <p className="font-bold text-lg">Made to Order</p>
                    <p className="text-sm text-muted-foreground mt-1">Every dish wok-fired fresh when you order</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=533&fit=crop"
                      alt="Pad Thai"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Menu Categories — Visual browse */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">Explore</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Browse by Category
              </h2>
              <ThaiOrnament className="mt-6 max-w-xs mx-auto" />
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuCategories.slice(0, 8).map((cat) => (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/menu#${cat.id}`}
                  className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-3">
                    {cat.id === "appetizers" ? "🥟" :
                     cat.id === "soups" ? "🍲" :
                     cat.id === "noodles" ? "🍜" :
                     cat.id === "curry" ? "🍛" :
                     cat.id === "fried-rice" ? "🍚" :
                     cat.id === "seafood" ? "🦐" :
                     cat.id === "specials" ? "⭐" :
                     cat.id === "vegetarian" ? "🌿" :
                     "🍽️"}
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.items.length} items</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="text-center mt-8">
            <Link href="/menu" className="text-sm text-primary hover:underline font-medium">
              View all {menuCategories.length} Categories &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Reviews / Social Proof */}
      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">What People Say</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Loved by Our Community
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <Stars count={5} />
                <span className="text-foreground/70">4.7 out of 5</span>
              </div>
              <ThaiOrnament className="mt-6 max-w-xs mx-auto" />
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <StaggerItem key={review.name}>
                <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors h-full flex flex-col">
                  <Stars count={review.rating} />
                  <p className="text-foreground/80 leading-relaxed mt-4 flex-1 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-medium text-sm">{review.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Coupon / Promo Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1920&h=600&fit=crop"
            alt="Thai food spread"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <Badge variant="outline" className="border-primary/40 text-primary mb-4 py-1 px-4 text-sm">
              Special Offer
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Spend $60+ &amp; <span className="text-gradient-gold">Save 10%</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-8 max-w-md mx-auto">
              Automatically applied at checkout. Valid for pickup and delivery orders.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-10 h-13 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
            >
              Start Your Order
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">Visit Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Location & Hours
              </h2>
              <ThaiOrnament className="mt-6 max-w-xs mx-auto" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-8">
            <FadeIn direction="left" className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-border bg-card h-80 lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.5!2d-87.845!3d41.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3601c446da09%3A0xbd39e9457fddf45d!2s9305%20Ogden%20Ave%2C%20Brookfield%2C%20IL%2060513!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fine Thai Location"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-6">Hours of Operation</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  {restaurantInfo.hours.map((h) => (
                    <li key={h.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-sm">{h.day}</span>
                      <span className={`text-sm ${h.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mb-6">
                  <a href={restaurantInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    {restaurantInfo.address}
                  </a>
                  <a href={restaurantInfo.phoneHref} className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    {restaurantInfo.phone}
                  </a>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full"
                    render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
                  >
                    Order Online
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:bg-secondary rounded-full"
                    render={<a href={restaurantInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" />}
                  >
                    Directions
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </>
  );
}
