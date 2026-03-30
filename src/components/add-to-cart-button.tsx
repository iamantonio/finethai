"use client";

import { useCart } from "@/context/cart-context";
import type { MenuItem } from "@/data/menu";

export function AddToCartButton({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  const { addItem } = useCart();

  if (compact) {
    return (
      <button
        onClick={() => addItem(item)}
        className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors shrink-0"
        title={`Add ${item.name} to cart`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={() => addItem(item)}
      className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium transition-colors flex items-center gap-1"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Add
    </button>
  );
}
