"use client";

import { useState } from "react";
import { CopyableBankDetails } from "../../CopyableBankDetails";

const WHATSAPP_NUMBER = "2349036419473";

type ProductPurchasePanelProps = {
  availableColor?: string;
  gender?: string;
  name: string;
  price: string;
  soldOut: boolean;
};

export function ProductPurchasePanel({
  availableColor,
  gender,
  name,
  price,
  soldOut,
}: ProductPurchasePanelProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const message = encodeURIComponent(
    `Hello, I have made payment for ${name}. Here is my receipt (attach receipt):\n\nHere is my Delivery Address and phone number:`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  if (isCheckingOut) {
    return (
      <div className="product-detail-info checkout-details inline-checkout">
        <button
          className="inline-checkout-back"
          onClick={() => setIsCheckingOut(false)}
          type="button"
        >
          Back to product details
        </button>
        <h1>{name}</h1>
        <strong className="product-detail-price">{price}</strong>
        <CopyableBankDetails />
        <a
          className="buy-now-button receipt-button"
          href={whatsappUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Send Receipt
        </a>
      </div>
    );
  }

  return (
    <div className="product-detail-info">
      <h1>{name}</h1>
      <strong className="product-detail-price">{price}</strong>

      <div className="product-properties" aria-label="Product properties">
        {gender && <span>{gender}</span>}
        <span>{soldOut ? "SOLD OUT" : "AVAILABLE"}</span>
        {availableColor && <span>AVAILABLE IN {availableColor.toUpperCase()}</span>}
      </div>

      <button
        className="buy-now-button"
        disabled={soldOut}
        onClick={() => setIsCheckingOut(true)}
        type="button"
      >
        {soldOut ? "Sold Out" : "Buy Now"}
      </button>
    </div>
  );
}
