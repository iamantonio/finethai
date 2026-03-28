import type { Metadata } from "next";
import { MenuPageClient } from "./menu-client";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full Fine Thai menu — appetizers, noodles, curries, seafood, vegetarian options, and more. Order online for pickup or delivery in Brookfield, IL.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
