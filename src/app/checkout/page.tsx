import type { Metadata } from "next";
import { CheckoutClient } from "./checkout-client";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Fine Thai order for pickup or delivery.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
