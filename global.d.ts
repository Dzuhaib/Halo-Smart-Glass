// src/types/vapi-widget.d.ts
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vapi-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "public-key"?: string;
        "assistant-id"?: string;
        "mode"?: string;
        "theme"?: string;
        "region"?: string;
        "language"?: string;
        "consent-storage-key"?: string;
      };
    }
  }
}

export {};
