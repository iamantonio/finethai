"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export function CheckoutClient() {
  const { items, subtotal, discount, total, clearCart } = useCart();
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-32 pb-20 text-center">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
        <p className="text-muted-foreground mb-2">
          Thank you, {name}! Your {orderType} order has been received.
        </p>
        <p className="text-muted-foreground mb-8">
          We&apos;ll call you at {phone} if we have any questions.
          {orderType === "pickup"
            ? " Your order will be ready in approximately 35 minutes."
            : " Estimated delivery time is approximately 55 minutes."}
        </p>
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-1">Order Total</p>
          <p className="text-3xl font-bold text-primary">${total.toFixed(2)}</p>
          {discount > 0 && (
            <p className="text-sm text-green-400 mt-1">You saved ${discount.toFixed(2)} with 10% discount!</p>
          )}
        </div>
        <Button
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          render={<Link href="/" />}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-32 pb-20 text-center">
        <div className="text-5xl mb-6">🛒</div>
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Add some items from the menu to get started.</p>
        <Button
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          render={<Link href="/menu" />}
        >
          Browse Menu
        </Button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.menuItem.name,
            price: i.menuItem.price,
            quantity: i.quantity,
          })),
          orderType,
          customer: { name, phone, address: orderType === "delivery" ? address : undefined },
          notes,
          subtotal,
          discount,
          total,
        }),
      });

      setSubmitted(true);
      clearCart();
    } catch {
      alert("Something went wrong. Please try again or call us to place your order.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
      <h1 className="text-3xl font-bold mb-2">Checkout</h1>
      <p className="text-muted-foreground mb-8">Review your order and provide your details.</p>

      {/* Order summary */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <h2 className="font-semibold mb-4">Order Summary</h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.menuItem.id} className="flex justify-between text-sm">
              <span>
                {item.menuItem.name} <span className="text-muted-foreground">x{item.quantity}</span>
              </span>
              <span className="font-medium">${(item.menuItem.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-4 pt-4 space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-400">10% Discount</span>
              <span className="text-green-400">-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold pt-2">
            <span>Total</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Order form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order type */}
        <div>
          <label className="block text-sm font-medium mb-3">Order Type</label>
          <div className="flex gap-3">
            {(["pickup", "delivery"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setOrderType(type)}
                className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-colors ${
                  orderType === type
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30"
                }`}
              >
                {type === "pickup" ? "🏪 Pickup (~35 min)" : "🚗 Delivery (~55 min)"}
              </button>
            ))}
          </div>
        </div>

        {/* Customer info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone *</label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              placeholder="(708) 555-0123"
            />
          </div>
        </div>

        {orderType === "delivery" && (
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1.5">Delivery Address *</label>
            <input
              id="address"
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              placeholder="123 Main St, Brookfield, IL"
            />
          </div>
        )}

        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-1.5">Special Instructions</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
            placeholder="Any allergies or special requests..."
          />
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-13 text-base shadow-lg shadow-primary/20 disabled:opacity-50"
        >
          {submitting ? "Placing Order..." : `Place Order — $${total.toFixed(2)}`}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Payment will be collected at {orderType === "pickup" ? "pickup" : "delivery"}. Cash and credit cards accepted.
        </p>
      </form>
    </div>
  );
}
