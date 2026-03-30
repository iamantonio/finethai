"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export function CartSheet() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, discount, total, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="bg-background border-border w-96 flex flex-col">
        <SheetTitle className="text-xl font-bold">Your Order</SheetTitle>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl mb-4">🛒</div>
            <p className="text-lg font-semibold mb-2">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mb-6">
              Browse the menu to add items to your order.
            </p>
            <Button
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
              render={<Link href="/menu" />}
            >
              Browse Menu
            </Button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto space-y-3 mt-4 pr-1">
              {items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.menuItem.name}</p>
                    <p className="text-xs text-muted-foreground">${item.menuItem.price.toFixed(2)} each</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-sm font-semibold text-primary">
                      ${(item.menuItem.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.menuItem.id)}
                      className="text-xs text-muted-foreground hover:text-destructive transition-colors mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-border pt-4 mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">10% Discount (orders $60+)</span>
                  <span className="text-green-400">-${discount.toFixed(2)}</span>
                </div>
              )}
              {subtotal > 0 && subtotal < 60 && (
                <p className="text-xs text-muted-foreground">
                  Add ${(60 - subtotal).toFixed(2)} more for 10% off!
                </p>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mt-4">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12"
                onClick={() => setIsOpen(false)}
                render={<Link href="/checkout" />}
              >
                Proceed to Checkout
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
