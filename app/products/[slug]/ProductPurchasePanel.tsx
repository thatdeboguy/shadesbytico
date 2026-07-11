"use client";

import { useState } from "react";
import { CopyableBankDetails } from "../../CopyableBankDetails";

const WHATSAPP_NUMBER = "2349036419473";

type ProductPurchasePanelProps = {
  gender: string;
  name: string;
  price: string;
  soldOut: boolean;
};

export function ProductPurchasePanel({
  gender,
  name,
  price,
  soldOut,
}: ProductPurchasePanelProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const message = encodeURIComponent(
    `Hello, I have made payment for ${name}. Here is my receipt.`
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
        <span>{gender}</span>
        <span>{soldOut ? "SOLD OUT" : "AVAILABLE"}</span>
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
