import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const order = await request.json();

  // Log the order (in production, send email/SMS to restaurant)
  console.log("=== NEW ORDER ===");
  console.log("Customer:", order.customer?.name, "-", order.customer?.phone);
  console.log("Type:", order.orderType);
  console.log("Items:");
  for (const item of order.items) {
    console.log(`  ${item.quantity}x ${item.name} — $${(item.price * item.quantity).toFixed(2)}`);
  }
  if (order.discount > 0) {
    console.log("Discount:", `-$${order.discount.toFixed(2)}`);
  }
  console.log("Total:", `$${order.total.toFixed(2)}`);
  if (order.notes) console.log("Notes:", order.notes);
  console.log("=================");

  return NextResponse.json({ success: true, orderId: `FT-${Date.now()}` });
}
