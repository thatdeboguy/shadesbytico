"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const bankDetails = [
  { label: "Bank", value: "Moniepoint MFB" },
  { label: "Account Number", value: "9036419473" },
  { label: "Account Name", value: "Merit Aimienwan Okoh" },
];

export function CopyableBankDetails() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  async function copyValue(value: string) {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(null), 1800);
  }

  return (
    <div className="bank-card" aria-label="Bank transfer information">
      {bankDetails.map(({ label, value }) => {
        const isCopied = copiedValue === value;

        return (
          <div className="bank-detail" key={label}>
            <span>{label}</span>
            <button
              aria-label={`Copy ${label}: ${value}`}
              className="copyable-bank-value"
              onClick={() => copyValue(value)}
              title={`Copy ${label}`}
              type="button"
            >
              <strong>{value}</strong>
              {isCopied ? (
                <Check aria-hidden="true" size={18} />
              ) : (
                <Copy aria-hidden="true" size={18} />
              )}
              <small aria-live="polite">{isCopied ? "Copied" : "Copy"}</small>
            </button>
          </div>
        );
      })}
    </div>
  );
}
